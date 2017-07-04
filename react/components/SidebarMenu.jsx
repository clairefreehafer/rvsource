import React from 'react';
import { Anchor, Header, Menu, Sidebar, Title } from 'grommet';

export default function SidebarMenu (props) {
  return (
    <Sidebar
      colorIndex={'brand'}
      size={'small'}
      margin={'none'}
    >
      <Header pad={'medium'}>
        <Title>rvsource</Title>
      </Header>

      <Menu
        inline={true}
        primary={true}
        size={'small'}
      >
        <Anchor href="#"
          className="active"
        >
          test
        </Anchor>
        <Anchor href="#"
        >
          inactive
        </Anchor>
      </Menu>
    </Sidebar>
  )
}
