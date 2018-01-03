import React from 'react';

import { Anchor, Box, Footer, Heading, Menu, Section, Paragraph, Tile, Tiles } from 'grommet';
import GitHub from 'grommet/components/icons/base/SocialGithub';

import Symbols from './Symbols';
import ContentCreators from './ContentCreators';

export default function Landing (props) {
  return (
    <Box>
      <Section>
        <Heading>Welcome to rvsource</Heading>
        <Paragraph>
          RVing is rapidly gaining in popularity as a relatively cheap and easy way to get out and see the world. Many of these travellers have started blogs or YouTube channels in order to share their adventures and inspire others to hit the road. In the past several years there has been an explosion of online content related to all aspects of RVing, which is wonderful for future RVers like myself. I aim to collect as many of these different resources as possible and organize them in a way that is less intimidating to sift through than a simple Google or YouTube search.
        </Paragraph>

        <Paragraph>
          Because of my own personal interests, the content of this site might lean towards full-timing and Airstreams.
          ¯\_(ツ)_/¯
        </Paragraph>

        <Paragraph>
          None of this information is my own, and I am nowhere near an expert on any of these subjects (yet 😉 ).
          Use it as you will.
        </Paragraph>
      </Section>

      {/**
       * key for symbols used with each link
      */}
      <Symbols />

      <ContentCreators />

    </Box>
  )
}
