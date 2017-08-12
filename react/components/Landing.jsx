import React from 'react';

import { Anchor, Box, Footer, Heading, Menu, Section, Paragraph, Tile, Tiles } from 'grommet';
import Book from 'grommet/components/icons/base/Book';
import BlogPost from 'grommet/components/icons/base/TextWrap';
import Forum from 'grommet/components/icons/base/Database';
import Video from 'grommet/components/icons/base/Video';
import PayWall from 'grommet/components/icons/base/Currency';
import GitHub from 'grommet/components/icons/base/SocialGithub';

export default function Landing (props) {
  return (
    <Box>

      <Section>
        <Heading>Welcome to rvsource</Heading>
        <Paragraph>
          This website is a collection of resources from around the web on various topics related to RVing.
          Because of my own personal interests, the content is more geared towards full-timing and Airstreams.
        </Paragraph>
        <Paragraph>
          None of this information is my own, and I am nowhere near an expert on any of these subjects (yet 😉 ).
          Use it as you will.
        </Paragraph>
      </Section>

      {/**
       * key for symbols used with each link
       */}
      <Section separator="top">
        <Heading tag="h3" margin="none">Symbols key</Heading>
          <Tiles flush={false} size="medium">
            <Tile><Book /> Book</Tile>
            <Tile><BlogPost /> Blog Post</Tile>
            <Tile><Forum /> Forum</Tile>
            <Tile><Video /> Video</Tile>
            <Tile><PayWall /> Not Free</Tile>
          </Tiles>
      </Section>

      <Section separator="top">
        <Heading tag="h3">Websites featured</Heading>
        <Menu inline={true} primary={true} size="small" pad="none">
          <Anchor href="http://www.airforums.com/" target="_blank">Air Forums</Anchor>
          <Anchor href="http://www.dreamstreamr.com/" target="_blank">Dreamstreamr</Anchor>
          <Anchor href="http://www.gonewiththewynns.com/" target="_blank">Gone with the Wynns</Anchor>
          <Anchor href="http://www.livingintin.com/" target="_blank">Living in Tin</Anchor>
          <Anchor href="http://www.malimish.com/" target="_blank">Mali Mish</Anchor>
          <Anchor href="http://www.technomadia.com/" target="_blank">Technomadia</Anchor>
          <Anchor href="http://www.weaselmouth.com/" target="_blank">WeaselMouth</Anchor>
          <Anchor href="http://wheelingit.us" target="_blank">Wheeling It</Anchor>
        </Menu>
      </Section>

      <Footer justify="end">
        <Anchor href="https://www.github.com/clairefreehafer/rvsource" target="_blank">
          View my guts on GitHub
        </Anchor>
        &nbsp;<GitHub />
      </Footer>

    </Box>
  )
}
