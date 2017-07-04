import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'grommet/scss/hpinc/index';
// aruba, grommet-core

import { App, Box, Split } from 'grommet';
import SidebarMenu from './components/SidebarMenu';
import Landing from './components/Landing';

import Apps from './components/resources/Apps';
import Boondocking from './components/resources/Boondocking';
import ColdWeather from './components/resources/ColdWeather';
import Maintenance from './components/resources/Maintenance';

render(
  <BrowserRouter>
    <App centered={false}>
      <Split flex={'right'}>
        <SidebarMenu />
        <Box pad={'large'}>
          <Route exact path="/" component={Landing}/>
          <Route path="/apps" component={Apps}/>
          <Route path="/boondocking" component={Boondocking}/>
          <Route path="/cold-weather" component={ColdWeather}/>
          <Route path="/maintenance" component={Maintenance}/>
        </Box>
      </Split>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

