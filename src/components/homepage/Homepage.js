import { ThemeProvider, CssBaseline, Grid } from '@mui/material';

// Theme
import {AppContainer, theme} from '../../Theme'

// Components
import Intro from './IntroBanner';
import WhoAmI from './cards/WhoAmI';
import LearningResources from './cards/LearningResources';
import BlogPosts from './cards/BlogPosts';
import Homelab from './cards/Homelab';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        {/* <Menu /> */}
        <Intro />
         <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <WhoAmI />
          </Grid>
          <Grid item xs={12} sm={6}>
              <LearningResources />
          </Grid>

          <Grid item xs={12} sm={6}>
              <Homelab />
          </Grid>

          <Grid item xs={12} sm={6}>
              <BlogPosts />
          </Grid>
        </Grid>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

