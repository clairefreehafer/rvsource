import React from 'react';

import { Anchor, Box, Footer, Heading, Menu, Section, Paragraph, Tile, Tiles } from 'grommet';
import GitHub from 'grommet/components/icons/base/SocialGithub';

import SearchBar from './SearchBar';

export default function SiteFooter (props) {
  return (
    <Footer justify="between">
      <SearchBar />
      <Box direction="row">
        <Anchor href="/about" target="_blank">
          About
        </Anchor>
      </Box>
    </Footer>
  )
}
