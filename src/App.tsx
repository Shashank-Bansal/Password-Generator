import MainBody from './Components/MainBody'
import { Grid, ThemeProvider } from '@mui/material'
import { theme } from './Themes';
import { Provider } from 'react-redux';
import stateStore from './Components/ReduxToolkit/store';
// import AppProvider from './Components/ContextApi/Context';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={stateStore}>
        {/* <AppProvider> */}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '100vh', width: '100vw' }}
        >
          <MainBody />
        </Grid>
        {/* </AppProvider> */}
      </Provider>
    </ThemeProvider>
  );
}

export default App;
