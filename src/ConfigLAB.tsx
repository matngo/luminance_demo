import * as React from "react";
import { Typography, Box, Slider, Grid2 as Grid } from "@mui/material";

export type LABConfig = {
  lRange: number[];
  aRange: number[];
  bRange: number[];
};

type Props = {
  config: LABConfig;
  onChange: (config: LABConfig) => void;
};
const marks = [-127, 0, 128].map((v) => ({ value: v, label: v }));
export function ConfigLAB({ config, onChange }: Props) {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid size={4}>
          <Typography id="l-range-slider" gutterBottom>
            Luminosity Range
          </Typography>
          <Slider
            value={config.lRange}
            onChange={(_, value) =>
              onChange({ ...config, lRange: value as number[] })
            }
            min={0}
            max={100}
          />
        </Grid>
        <Grid size={4}>
          <Typography id="a-range-slider" gutterBottom>
            Green-red Range
          </Typography>
          <Slider
            value={config.aRange}
            onChange={(_, value) =>
              onChange({ ...config, aRange: value as number[] })
            }
            min={-127}
            max={128}
            marks={marks}
          />
        </Grid>
        <Grid size={4}>
          <Typography id="b-range-slider" gutterBottom>
            Blue-Yellow Range
          </Typography>
          <Slider
            value={config.bRange}
            onChange={(_, value) =>
              onChange({ ...config, bRange: value as number[] })
            }
            min={-127}
            max={128}
            marks={marks}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
