import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'grommet/scss/hpinc/index';
// aruba, grommet-core

import { App, Box, Split } from 'grommet';
import SidebarMenu from './components/SidebarMenu';
import Landing from './components/Landing';
import Admin from './components/Admin';

import Template from './components/resources/Template';

render(
  <BrowserRouter>
    <App centered={false}>
      <Split flex="right">
        <SidebarMenu />
        <Box pad="large">
          <Route exact path="/" component={Landing} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/resources/:category" component={Template} />
        </Box>
      </Split>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

