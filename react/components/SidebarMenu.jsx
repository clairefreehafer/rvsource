import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Header, Label, Menu, Sidebar, Title } from 'grommet';

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
        <Anchor path="/av-systems">AV Systems</Anchor> {/* electrical */}
        {/* <Anchor path="/electricity">Electrical</Anchor> */}
        <Anchor path="/camping">Camping</Anchor>
        <Anchor path="/internet">Internet</Anchor>
        {/* <Anchor path="/advice">General Advice</Anchor> */}
        <Anchor path="/logistics">Logistics</Anchor>
        <Anchor path="/maintenance">Maintenance</Anchor>
        <Anchor path="/miscellaneous-gear">Miscellaneous Gear</Anchor>
        <Anchor path="/organization">Organization</Anchor>
        {/* <Anchor path="/outdoors">Outdoors</Anchor> */}
        <Anchor path="/pets">Pets</Anchor>
        <Anchor path="/reno-deco">Renovating & Decorating</Anchor>
        <Anchor path="/solar">Solar</Anchor> {/* electrical */}
        <Anchor path="/towing">Towing</Anchor>
        <Anchor path="/water">Water</Anchor>
        <Anchor path="/weather">Weather</Anchor>
      </Menu>
    </Sidebar>
  )
}
