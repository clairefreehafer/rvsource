import React from 'react';
import { Anchor, Header, Label, Menu, Sidebar, Title } from 'grommet';
// import { Anchor, Header, Label, Menu, Sidebar, Title } from 'grommet';

export default function SidebarMenu (props) {
  return (
    <Sidebar
      colorIndex={'brand'}
      size={'small'}
      margin={'none'}
    >
      <Header pad={'medium'}>
        <Title>clairstream</Title>
      </Header>

      <Menu
        inline={true}
        primary={true}
        size={'small'}
      >
        <Label align={'center'}>resources</Label>

        <Anchor path="/apps">Apps</Anchor>
        <Anchor path="/boondocking">Boondocking</Anchor>
        <Anchor path="/cold-weather">Cold Weather</Anchor>
        <Anchor path="/maintenance">Maintenance</Anchor>
        <Anchor path="/boondocking">inactive</Anchor>
        <Anchor path="/boondocking">inactive</Anchor>
      </Menu>
    </Sidebar>
  )
}
