const breakPointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};
const boxShadows = [
  'none',
  '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
];
const theme = {
  palette: {
    primary: {
      lighter: '#272727',
      light: '#3A3A3A', // A50
      main: '#1C1C1C', // Primary
      dark: '#0d0d0d', // A700
    },
    secondary: {
      light: '#FFCF5F', // A50
      main: '#F6B519', // Secondary
      dark: '#BE8600', // A500
    },
    error: {
      main: '#FF6B2C',
      background: 'rgba(255, 107, 44, 0.20)',
    },
    success: {
      main: '#81A85A',
      background: 'rgb(129, 168, 90, 0.20)',
    },
    warning: {
      main: '#FFCF5F',
    },
    info: {
      main: '#DDDCDA',
    },
    background: {
      default: '#1b1b1b',
      light: '#FFFFFF',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    grey: {
      lightest: '#BABABA',
      lighter: '#A8A8A8',
      light: '#979797',
      main: '#808080',
      dark: '#5b5b5b',
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: breakPointValues,
    up: (key) => `@media (min-width:${breakPointValues[key]}px)`,
    down: (key) => `@media (max-width:${breakPointValues[key]}px)`,
    between: (start, end) => `@media (max-width:${breakPointValues[start]}px) and (max-width:${breakPointValues[end]}px)`,
    only: (key) => `@media only screen and (max-width:${breakPointValues[key]}px)`,
  },
  shadows: boxShadows,
  border: (factor) => `${4 * factor}px`,
  spacing: (factor) => `${8 * factor}px`,
  typography: {
    fontFamily: 'canada-type-gibson, sans-serif',
    fontWeightRegular: '300',
    fontWeightMedium: '400',
    h1: {
      fontFamily: 'Veneer, sans-serif',
      fontWeight: '500',
    },
    h2: {
      fontFamily: 'Veneer, sans-serif',
      fontWeight: '500',
    },
    h3: {
      fontFamily: 'Veneer, sans-serif',
      fontWeight: '500',
    },
    h4: {
      fontFamily: 'Veneer, sans-serif',
      fontWeight: '500',
    },
    h5: {
      fontFamily: 'rift, sans-serif;',
      fontWeight: '700',
    },
    h6: {
      fontFamily: 'rift, sans-serif;',
      fontWeight: '700',
    },
    subtitle1: {
      fontFamily: 'canada-type-gibson, sans-serif',
      fontWeight: '100',
    },
    subtitle2: {
      fontFamily: 'canada-type-gibson, sans-serif',
      fontWeight: '100',
    },
    body1: {
      fontFamily: 'canada-type-gibson, sans-serif',
      fontWeight: '100',
    },
    body2: {
      fontFamily: 'rift, sans-serif;',
      fontWeight: '500',
    },
    button: {
      fontFamily: 'rift, sans-serif;',
      fontWeight: '700',
    },
  },
};

export default theme;
