"use client";

import Masonry from "@mui/lab/Masonry";
import {
  Theme,
  ThemeOptions,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { ReactNode } from "react";

const breakpointsOverrides = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const getCustomTheme = (theme: Theme | ThemeOptions | undefined) =>
  createTheme({
    ...theme,
    breakpoints: { values: { ...breakpointsOverrides } },
  });

type MasonryWrapperProps = {
  children: ReactNode;
};

export default function MasonryWrapper({ children }: MasonryWrapperProps) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={getCustomTheme(theme)}>
      <Masonry
        columns={{ xs: 1, lg: 2 }}
        spacing={{ xs: 0, lg: 10 }}
        defaultHeight={1200}
        defaultSpacing={10}
        // columnSpacing={{xs: 20}}
        // defaultColumns={2}
        sx={{
          "& > *": {
            mb: { xs: 8, sm: 8 },
          },
          width: "auto",
          pt: 6,
        }}
      >
        {children || <div />}
      </Masonry>
    </ThemeProvider>
  );
}
