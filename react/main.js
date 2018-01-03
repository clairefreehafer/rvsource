import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'grommet/scss/hpinc/index'; // aruba, grommet-core, hpe, hpinc, vanilla
import '../public/style';

import { App, Box, Split } from 'grommet';
import SidebarMenu from './components/SidebarMenu';
import Landing from './components/landing/Landing';
import Admin from './components/Admin';
import About from './components/About';

import Template from './components/resources/Template';
import SiteFooter from './components/SiteFooter';

render (
  <BrowserRouter>
    <App centered={false}>
      <Split flex="right" showOnResponsive="both">
        <SidebarMenu />
        <Box pad="large">
          <Route exact path="/" component={Landing} />
          {/*<Route exact path="/admin" component={Admin} />*/}
          <Route path="/:category" component={Template} />
          <Route exact path="/about" component={About} />
        </Box>
      </Split>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

