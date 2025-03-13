import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import { Reorder } from "framer-motion";
import { Item } from "./Item.tsx";

import { hsl2rgb, lab2rgb, rgb2hsl, rgb2lab } from "./ColorConversion.ts";
import { ConfigHSL } from "./ConfigHSL.tsx";
import { ConfigLAB } from "./ConfigLAB.tsx";
import { GlobalConfig } from "./GlobalConfig.tsx";

import type { HSLConfig } from "./ConfigHSL.tsx";
import type { LABConfig } from "./ConfigLAB.tsx";
import type { GlobalConfig as GlobalConfigType } from "./GlobalConfig.tsx";
import type { RGB, HSL, LAB } from "./ColorConversion.ts";
import {
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";

export type Color = {
  rgb: RGB;
  lab: LAB;
  hsl: HSL;
  position: number;
  key: number;
};

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function initialItemsLAB(n: number, config: LABConfig): Color[] {
  const lRange = config.lRange;
  const stepSize = (lRange[1] - lRange[0]) / n;
  const LABs = Array.from(
    { length: n },
    (_, i): LAB => ({
      L: randomBetween(
        i * stepSize + lRange[0],
        i * stepSize + stepSize + lRange[0]
      ),
      a: randomBetween(config.aRange[0], config.aRange[1]),
      b: randomBetween(config.bRange[0], config.bRange[1]),
    })
  );
  const colors = LABs.map((LAB, index): Color => {
    const rgb = lab2rgb(LAB);
    const hsl = rgb2hsl(rgb);
    return { lab: LAB, rgb: lab2rgb(LAB), position: index, hsl, key: index };
  });
  return shuffle(colors);
}

function initialItemsHSL(n: number, config: HSLConfig): Color[] {
  const lRange = config.lRange;
  const stepSize = (lRange[1] - lRange[0]) / n;
  const hRange = config.hRange.map((v) => v / 100);
  const sRange = config.sRange.map((v) => v / 100);
  const HSLs = Array.from(
    { length: n },
    (_, i): HSL => ({
      L:
        randomBetween(
          i * stepSize + lRange[0],
          i * stepSize + stepSize + lRange[0]
        ) / 100,
      s: randomBetween(sRange[0], sRange[1]),
      h: randomBetween(hRange[0], hRange[1]),
    })
  );
  const colors = HSLs.map((hsl, index): Color => {
    const rgb = hsl2rgb(hsl);
    const lab = rgb2lab(rgb);
    return { lab: lab, rgb: rgb, position: index, hsl, key: index };
  });

  return shuffle(colors);
}

function shuffle(a) {
  const array = [...a];
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return [...array];
}

const levenshteinDistance = (s: Array<any>, t: Array<any>) => {
  if (!s.length) return t.length;
  if (!t.length) return s.length;
  const arr: number[][] = [];
  for (let i = 0; i <= t.length; i++) {
    arr[i] = [i];
    for (let j = 1; j <= s.length; j++) {
      arr[i][j] =
        i === 0
          ? j
          : Math.min(
              arr[i - 1][j] + 1,
              arr[i][j - 1] + 1,
              arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
            );
    }
  }
  return arr[t.length][s.length];
};

export function App() {
  const [score, setScore] = useState(0);
  const [items, setItems] = useState<Color[]>([]);
  const [hslConfig, setHSLConfig] = useState<HSLConfig>({
    hRange: [0, 100],
    sRange: [0, 100],
    lRange: [0, 100],
  });

  const [labConfig, setLABConfig] = useState<LABConfig>({
    lRange: [0, 100],
    aRange: [-127, 128],
    bRange: [-127, 128],
  });

  const [globalConfig, setGlobalConfig] = useState<GlobalConfigType>({
    useHSL: false,
    displayBW: false,
    nItems: 10,
  });

  useEffect(() => {
    reset();
  }, [globalConfig.nItems, hslConfig, labConfig]);

  useEffect(() => {
    const currentPositions = items.map((item) => item.position);
    const rightPositions = [...Array(globalConfig.nItems).keys()];
    const distance = levenshteinDistance(currentPositions, rightPositions);

    setScore(globalConfig.nItems - distance);
  }, [items]);

  useEffect(() => {
    const colorKey = globalConfig.useHSL ? "hsl" : "lab";
    const itemsCopy: Color[] = items.toSorted(
      (a: Color, b: Color) => a[colorKey].L > b[colorKey].L
    );
    const newPositions = Array(globalConfig.nItems);
    if (!itemsCopy.length) {
      return;
    }
    for (let i = 0; i < globalConfig.nItems; i++) {
      newPositions[itemsCopy[i].key] = i;
    }

    setItems(
      items.map((item: Color) => ({
        ...item,
        position: newPositions[item.key],
      }))
    );
  }, [globalConfig.useHSL]);

  const reset = () => {
    globalConfig.useHSL
      ? setItems(initialItemsHSL(globalConfig.nItems, hslConfig))
      : setItems(initialItemsLAB(globalConfig.nItems, labConfig));
  };

  const onReorder = (items) => {
    setItems(items);
  };

  const sort = () => {
    const sorted = items.toSorted((a, b) => (a.position < b.position ? -1 : 1));
    console.log(sorted);
    setItems(sorted);
  };

  const onShuffle = () => {
    setItems([...shuffle(items)]);
  };

  const computeDisplayColor = (color: Color) => {
    const rgb = color.rgb;
    const L = globalConfig.useHSL
      ? color.hsl.L * 255
      : Math.floor(color.lab.L * 2.55);
    return globalConfig.displayBW
      ? `rgb(${L},${L},${L})`
      : `rgb(${rgb.r} ${rgb.g} ${rgb.b})`;
  };
  const theme = createTheme({
    typography: {
      htmlFontSize: 12,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <h1>Démo de perception des luminances</h1>
        <Typography>
          Déplacer les blocs de couleurs afin de les trier par ordre de
          luminances croissantes. Les différents réglages permettent de faire
          varier l'étendue de variation des paramètres des espaces
          colorimétriques.
        </Typography>
        <Reorder.Group axis="x" onReorder={onReorder} values={items}>
          {items.map((item) => (
            <Item
              item={item}
              key={item.key}
              displayColor={computeDisplayColor(item)}
              width={`${100 / globalConfig.nItems}%`}
            />
          ))}
        </Reorder.Group>
        <Stack spacing={2}>
          <h2>
            Configuration de l'espace colorimétrique{" "}
            {globalConfig.useHSL ? "HSL" : "LAB"}
          </h2>
          {globalConfig.useHSL && (
            <ConfigHSL onChange={setHSLConfig} config={hslConfig} />
          )}
          {!globalConfig.useHSL && (
            <ConfigLAB onChange={setLABConfig} config={labConfig} />
          )}
          <h2>Autres paramètres</h2>
          <GlobalConfig
            config={globalConfig}
            onChange={setGlobalConfig}
            onSort={sort}
            onShuffle={onShuffle}
            reset={reset}
          />
        </Stack>
        <h2>Score</h2>
        {score}
      </Container>
    </ThemeProvider>
  );
}
