import React from 'react';

import { Anchor, Box, Footer, Heading, List, ListItem, Section, Paragraph, Tile, Tiles } from 'grommet';
import GitHub from 'grommet/components/icons/base/SocialGithub';

import SearchBar from './SearchBar';

import CloudIcon from 'grommet/components/icons/base/Cloud';

export default function About (props) {
  return (
    <Box>
      <Section>
        <Heading tag="h3" margin="none">...the creator</Heading>
        <Paragraph>
          My name is Claire and I'm a software engineer currently residing in Upstate New York. You can contact me through <a href="https://www.instagram.com/freehafer" target="_blank">Instagram</a>, <a href="https://m.me/clairefreehafer" target="_blank">Messenger</a>, or by email at claire (dot) freehafer (at) gmail. Check out my <a href="https://clairefreehafer.github.io" target="_blank">website</a> for a little more about me.
        </Paragraph>
      </Section>

      <Section separator="top">
        <Heading tag="h3" margin="none">...this website</Heading>
        <Paragraph>
          If you're so inclined, you can view the guts of this website on <a href="https://www.github.com/clairefreehafer/rvsource">Github</a>.
        </Paragraph>
      </Section>

      <Section separator="top">
        <Heading tag="h3" margin="none">...future plans</Heading>
        <Paragraph>
          Some upcoming features for this site:
        </Paragraph>
          <ul>
            <li>search functionality</li>
            <li>filter by author</li>
            <li>sorting options</li>
            <li>more visually interesting lists, somehow</li>
            <li>???</li>
          </ul>
      </Section>
    </Box>
  )
}
