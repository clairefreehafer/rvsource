import React from 'react';

import { Anchor, Box, Heading, Menu, Section, Paragraph, Tile, Tiles } from 'grommet';
import Book from 'grommet/components/icons/base/Book';
import BlogPost from 'grommet/components/icons/base/TextWrap';
import Video from 'grommet/components/icons/base/Video';
import PayWall from 'grommet/components/icons/base/Currency';

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

      <Section separator="top">
        <Heading tag="h3" margin="none">Symbols key</Heading>
          <Tiles flush={false} size="medium">
            <Tile><Book /> Book</Tile>
            <Tile><BlogPost /> Blog Post</Tile>
            <Tile><Video /> Video</Tile>
            <Tile><PayWall /> Not Free</Tile>
          </Tiles>
      </Section>

      <Section separator="top">
        <Heading tag="h3">Websites featured</Heading>
        <Menu inline={true} primary={true} size="small" pad="none">
            <Anchor href="http://www.dreamstreamr.com/">Dreamstreamr</Anchor>
            <Anchor href="http://www.livingintin.com/">Living in Tin</Anchor>
            <Anchor href="http://www.malimish.com/">Mali Mish</Anchor>
            <Anchor href="http://www.technomadia.com/">Technomadia</Anchor>
            <Anchor href="http://www.weaselmouth.com/">WeaselMouth</Anchor>
        </Menu>
      </Section>

    </Box>
  )
}
