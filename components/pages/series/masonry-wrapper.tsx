"use client";

import Masonry, { MasonryProps } from "@mui/lab/Masonry";
import {
  Theme,
  ThemeOptions,
  useTheme,
  createTheme,
  ThemeProvider,
  SxProps,
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
  columns?: MasonryProps["columns"];
  spacing?: MasonryProps["spacing"];
  sx?: SxProps<Theme>;
};

export default function MasonryWrapper({
  children,
  columns,
  spacing,
  sx,
}: MasonryWrapperProps) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={getCustomTheme(theme)}>
      <Masonry
        columns={columns}
        spacing={spacing}
        defaultHeight={1200}
        defaultSpacing={10}
        // columnSpacing={{xs: 20}}
        // defaultColumns={2}
        sx={sx}
      >
        {children || <div />}
      </Masonry>
    </ThemeProvider>
  );
}
