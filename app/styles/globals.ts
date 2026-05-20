import { globalCss } from ".";

export const GlobalStyles = globalCss( {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "var(--font-roboto), sans-serif",
  },
  body: {
    backgroundColor: '$gray900',
    color: '$white',
    '-webkit-font-smoothing': 'antialiased',
  },
   
  'body, input, textarea, button': {
    fontFamily: "var(--font-roboto), sans-serif",
    fontWeight: 400,
  },
});