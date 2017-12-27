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

        <Anchor path="/rvsource/apps">Apps</Anchor>
        {/* <Anchor path="/electricity">Electrical</Anchor> */}
        <Anchor path="/rvsource/camping">Camping</Anchor>
        <Anchor path="/rvsource/electronics">Electronics</Anchor> {/* electrical */}
        <Anchor path="/rvsource/internet">Internet</Anchor>
        {/* <Anchor path="/advice">General Advice</Anchor> */}
        <Anchor path="/rvsource/logistics">Logistics</Anchor>
        <Anchor path="/rvsource/maintenance">Maintenance</Anchor>
        <Anchor path="/rvsource/miscellaneous-gear">Miscellaneous Gear</Anchor>
        <Anchor path="/rvsource/organization">Organization</Anchor>
        {/* <Anchor path="/outdoors">Outdoors</Anchor> */}
        <Anchor path="/rvsource/pets">Pets</Anchor>
        <Anchor path="/rvsource/reno-deco">Renovating & Decorating</Anchor>
        <Anchor path="/rvsource/solar">Solar</Anchor> {/* electrical */}
        <Anchor path="/rvsource/towing">Towing</Anchor>
        <Anchor path="/rvsource/water">Water</Anchor>
        <Anchor path="/rvsource/weather">Weather</Anchor>

      {/*
        <Label align="center" margin="small">Tow Vehicles</Label>
        <Anchor path="/tow-vehicles/suvs">SUVs</Anchor>
        <Anchor path="/tow-vehicles/hybrids">Hybrids</Anchor>
        <Anchor path="/tow-vehicles/vans">Vans</Anchor>
      */}
      </Menu>
    </Sidebar>
  )
}
