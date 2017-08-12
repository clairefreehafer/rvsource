import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'grommet/scss/vanilla/index';
import '../public/style';

import { App, Box, Split } from 'grommet';
import SidebarMenu from './components/SidebarMenu';
import Landing from './components/Landing';
import Admin from './components/Admin';
import TowVehicle from './components/tow-vehicle/TowVehicle';
import ToyotaLandCruiser from './components/tow-vehicle/ToyotaLandCruiser';
import NissanArmada from './components/tow-vehicle/NissanArmada';

import Template from './components/resources/Template';

render (
  <BrowserRouter>
    <App centered={false}>
      <Split flex="right" showOnResponsive="both">
        <SidebarMenu />
        <Box pad="large">
          <Route exact path="/" component={Landing} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/rvsource/:category" component={Template} />
          <Route exact path="/tow-vehicle" component={TowVehicle} />
          <Route path="/tow-vehicle/toyota-land-cruiser" component={ToyotaLandCruiser} />
          <Route path="/tow-vehicle/nissan-armada" component={NissanArmada} />
        </Box>
      </Split>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

