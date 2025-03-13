import * as React from "react";
import { Typography, Box, Slider, Grid2 as Grid } from "@mui/material";

export type HSLConfig = {
  hRange: number[];
  sRange: number[];
  lRange: number[];
};

type Props = {
  config: HSLConfig;
  onChange: (hslConfig: HSLConfig) => void;
};
export function ConfigHSL({ config, onChange }: Props) {
  const marks = [0, 50, 100].map((v) => ({ label: v, value: v }));
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid size={4}>
          <Typography id="h-range-slider" gutterBottom>
            Etendue de luminance
          </Typography>
          <Slider
            value={config.lRange}
            onChange={(_, value) =>
              onChange({ ...config, lRange: value as number[] })
            }
            min={0}
            max={100}
            marks={marks}
          />
        </Grid>
        <Grid size={4}>
          <Typography id="h-range-slider" gutterBottom>
            Etendue des teintes
          </Typography>
          <Slider
            value={config.hRange}
            onChange={(_, value) =>
              onChange({ ...config, hRange: value as number[] })
            }
            min={0}
            max={100}
            marks={marks}
          />
        </Grid>
        <Grid size={4}>
          <Typography id="h-range-slider" gutterBottom>
            Etendue de saturation
          </Typography>
          <Slider
            value={config.sRange}
            onChange={(_, value) =>
              onChange({ ...config, sRange: value as number[] })
            }
            min={0}
            max={100}
            marks={marks}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
