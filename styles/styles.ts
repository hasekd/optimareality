import { extendTheme } from "@chakra-ui/react";

const color = {
  primary: {
    yellow: "#FFD500",
    white: "#ffffff",
    black: "#000000",
  },
  secondary: {
    red: "#CA242C",
  },
  other: {
    black: "#222222",
  },
  hover: {
    blue: "#2491a3",
  },
};

const shadow = {
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
};

export const theme = {
  color,
  shadow,
};

export type Theme = typeof theme;

const globalStylesTheme = {
  styles: {
    global: {
      body: {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: { fontSize: "62.5%" },
    },
  },
};

const chakraTheme = extendTheme({
  ...globalStylesTheme,
});

export default chakraTheme;
