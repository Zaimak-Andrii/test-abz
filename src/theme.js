import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1170,
    },
  },
  palette: {
    primary: {
      main: '#F4E041',
    },
    secondary: {
      main: '#00BDD3',
    },
    background: {
      default: '#F8F8F8',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Nunito, sans-serif',
    fontSize: 16,
    fontWeight: 400,
    h1: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: 1,
      textAlign: 'center',
    },
    body1: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.625,
    },
    error: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.17,
      color: '#cb3d40',
    },
    button: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.625,
      textTransform: 'none',
    },
  },
});
