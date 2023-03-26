import styled from '@emotion/styled';
import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

theme = responsiveFontSizes(theme);

const AppContainer = styled('div')(({ theme }) => ({
  display: 'block',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1000px',
  margin: 'auto',
  padding: theme.spacing(2),
}));


export { theme, AppContainer}
