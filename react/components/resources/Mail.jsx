import React from 'react';

import { Box, Header, Heading, Paragraph, Section, Tiles, Tile } from 'grommet';
import Book from 'grommet/components/icons/base/Book';
import BlogPost from 'grommet/components/icons/base/TextWrap';
import Video from 'grommet/components/icons/base/Video';
import PayWall from 'grommet/components/icons/base/Currency';

export default function Internet (props) {
  return (
    <Section>
      <Heading tag="h2">Mail</Heading>
      <Tiles fill={true}>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad="small">
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://www.weaselmouth.com/2011/01/20/reduce-your-mail-and-stop-getting-junk-mail/">
                Stop Getting Junk Mail and Go Paperless
              </a> <BlogPost />
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by WeaselMouth
            </Paragraph>
          </Box>
        </Tile>

      </Tiles>
    </Section>
  )
}
