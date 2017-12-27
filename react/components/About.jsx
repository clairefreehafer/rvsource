import React from 'react';

import { Anchor, Box, Footer, Heading, Menu, Section, Paragraph, Tile, Tiles } from 'grommet';
import GitHub from 'grommet/components/icons/base/SocialGithub';

import SearchBar from './SearchBar';

import CloudIcon from 'grommet/components/icons/base/Cloud';

export default function About (props) {
  return (
    <Box>
      <Heading>About</Heading>
      <Section>
        <Heading tag="h3" margin="none">...the creator</Heading>
        <Paragraph>
          My name is Claire and I'm a software engineer currently residing in Upstate New York. You can contact me through <a href="https://www.instagram.com/freehafer" target="_blank">Instagram</a>, <a href="https://m.me/clairefreehafer" target="_blank">Messenger</a>, or by email at claire (dot) freehafer (at) gmail. Check out my <a href="https://clairefreehafer.github.io" target="_blank">website</a> for a little more about me.
        </Paragraph>
      </Section>

      <Section>
        <Heading tag="h3" margin="none">...this website</Heading>
        <Paragraph>

        </Paragraph>
      </Section>
    </Box>
  )
}
