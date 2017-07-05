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
        <Title><Link to="">clairstream</Link></Title>
      </Header>

      <Menu inline={true} primary={true} size="small">
        <Label align="center" margin="small">rvsource</Label>

        <Anchor path="/apps">Apps</Anchor>
        <Anchor path="/av-systems">AV Systems</Anchor>
        <Anchor path="/boondocking">Boondocking</Anchor>
        <Anchor path="/cold-weather">Cold Weather</Anchor>
        <Anchor path="/mail">Mail</Anchor>
        <Anchor path="/maintenance">Maintenance</Anchor>
        <Anchor path="/miscellaneous-gear">Miscellaneous Gear</Anchor>
        <Anchor path="/internet">Internet</Anchor>
        <Anchor path="/reno-deco">Renovating & Decorating</Anchor>
        <Anchor path="/solar">Solar</Anchor>
        <Anchor path="/water">Water</Anchor>
      </Menu>
    </Sidebar>
  )
}
