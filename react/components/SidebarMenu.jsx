import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Header, Label, Menu, Sidebar, Title } from 'grommet';
// import { Anchor, Header, Label, Menu, Sidebar, Title } from 'grommet';



export default function SidebarMenu (props) {
  return (
    <Sidebar
      colorIndex="brand"
      size="small"
      margin="none"
    >
      <Header pad="medium">
        <Title><Link to="">rvsource</Link></Title>
      </Header>

      <Menu inline={true} primary={true} size="small">
        <Label align="center" margin="small">resources</Label>

        <Anchor path="/apps">Apps</Anchor>
        <Anchor path="/boondocking">Boondocking</Anchor>
        <Anchor path="/cold-weather">Cold Weather</Anchor>
        <Anchor path="/mail">Mail</Anchor>
        <Anchor path="/maintenance">Maintenance</Anchor>
        <Anchor path="/internet">Internet</Anchor>
        <Anchor path="/reno-deco">Renovating & Decorating</Anchor>
      </Menu>
    </Sidebar>
  )
}
