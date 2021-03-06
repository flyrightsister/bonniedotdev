import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import theme from 'Theme';

import AlertBox from './Alert/AlertBox';
import LoadingSpinner from './Loading/LoadingSpinner';
import Nav from './Nav/Nav';
import Routes from './Routes';

export default function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Bonnie Schulkin | Teacher | Coder</title>
        <meta name="description" content="Bonnie Schulkin's Internet Home" />
      </Helmet>
      <AlertBox />
      <Toolbar>
        <Nav />
      </Toolbar>
      <Box m={5}>
        <LoadingSpinner />
        <Routes />
      </Box>
    </ThemeProvider>
  );
}
