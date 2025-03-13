import * as React from "react";
import {
  Typography,
  Box,
  Grid2 as Grid,
  Switch,
  Slider,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
} from "@mui/material";

export type GlobalConfig = {
  useHSL: boolean;
  displayBW: boolean;
  nItems: number;
};

type Props = {
  config: GlobalConfig;
  onChange: (config: GlobalConfig) => void;
  onShuffle: () => void;
  onSort: () => void;
  reset: () => void;
};

export function GlobalConfig({
  config,
  onChange,
  onShuffle,
  onSort,
  reset,
}: Props) {
  const bwSwitch = (
    <Switch
      checked={config.displayBW}
      onChange={() => onChange({ ...config, displayBW: !config.displayBW })}
    />
  );
  const hslSwitch = (
    <Switch
      checked={config.useHSL}
      onChange={() => onChange({ ...config, useHSL: !config.useHSL })}
      label={config.useHSL ? "Use HSL Colorspace" : "Use LAB Colorspace"}
    />
  );
  const nItemsSlider = (
    <Slider
      value={config.nItems}
      onChange={(_, value) => onChange({ ...config, nItems: value as number })}
      min={5}
      max={30}
      valueLabelDisplay="on"
    />
  );

  return (
    <Box>
      <Stack>
        <Grid container spacing={4}>
          <Grid size={4}>
            <FormGroup>
              <FormControlLabel
                control={bwSwitch}
                label={config.displayBW ? "Switch to color" : "Switch to BW"}
              />
              <FormControlLabel
                control={hslSwitch}
                label={
                  config.useHSL
                    ? "Switch to LAB Colorspace"
                    : "Switch to HSL Colorspace"
                }
              />
            </FormGroup>
          </Grid>
          <Grid size={8}>
            <Typography gutterBottom>Number of color swatches</Typography>
            {nItemsSlider}
          </Grid>
        </Grid>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onSort}>
            Reorder
          </Button>
          <Button variant="contained" onClick={onShuffle}>
            Shuffle
          </Button>
          <Button variant="contained" onClick={reset}>
            Reset
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
