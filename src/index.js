import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// Pages
import Homepage from './components/homepage/Homepage';

// Theme
import {AppContainer, theme} from './Theme'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Homepage />
      </ AppContainer>
    </ThemeProvider>
);
