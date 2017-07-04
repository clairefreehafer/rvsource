import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'grommet/scss/vanilla/index';

import { App, Box, Split } from 'grommet';
import SidebarMenu from './components/SidebarMenu';

render(
    <App centered={false}>
      <Split flex={'right'}>
        <SidebarMenu />
        <Box pad={'large'}>
          poopy

        </Box>
      </Split>
    </App>,
  document.getElementById('root')
);

