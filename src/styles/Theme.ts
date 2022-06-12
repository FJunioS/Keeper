const colors = {
  text: "#000",
  background: "#eee",
  primary: "#ff9800",
} as const;

const fonts = {
  source: '"Source Sans Pro", sans-serif',
  karla: '"Karla", sans-serif',
} as const;

const fontWeights = {
  regular: 400,
  bold: 700,
  xbold: 800,
} as const;

export { colors, fonts, fontWeights };
