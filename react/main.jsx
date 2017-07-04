import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'grommet/scss/vanilla/index';

import { App, Box, Split } from 'grommet';
import SidebarMenu from './components/SidebarMenu';

render(
    <App>
      <Split>
        <SidebarMenu />
        <Box>
          poopy

        </Box>
      </Split>
    </App>,
  document.getElementById('root')
);

