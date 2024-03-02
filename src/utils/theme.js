import { extendTheme } from '@chakra-ui/react';




export const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    warmblack: '#454544',
    white: '#fff',
    warmwhite: {
      200: '#F9F8F1',
      400: '#efebd8',
      600: '#E7E1C5',
    },
    orange: '#F2A359',
    yellow: '#F2DC5D',
    green: '#93C89F',
  },
  fonts: {
    heading: 'Libre Baskerville, serif',
    body: 'Raleway, sans-serfif',
  },

  headings: {
    color: 'warmblack',
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': 'clamp(1.6em, 2vw, 1.8em)',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': 'clamp(2.7em, 3vw, 4em)',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
});
