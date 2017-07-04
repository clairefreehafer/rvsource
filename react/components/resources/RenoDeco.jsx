import React from 'react';

import { Box, Header, Heading, Paragraph, Section, Tiles, Tile } from 'grommet';
import Book from 'grommet/components/icons/base/Book';
import BlogPost from 'grommet/components/icons/base/TextWrap';
import Video from 'grommet/components/icons/base/Video';
import PayWall from 'grommet/components/icons/base/Currency';

export default function Internet (props) {
  return (
    <Section>
      <Heading tag="h2">Renovating & Decorating</Heading>
      <Tiles fill={true}>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad="small">
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://www.weaselmouth.com/2011/04/12/airstream-fabric-mania/">
                Airstream and RV Fabrics
              </a> <BlogPost />
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by WeaselMouth
            </Paragraph>
          </Box>
        </Tile>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad="small">
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://www.weaselmouth.com/2011/08/25/accordion-room-dividers-be-gone/">
                How to replace Airstream accordian room dividers with curtains
              </a> <BlogPost />
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by WeaselMouth
            </Paragraph>
          </Box>
        </Tile>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad="small">
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://www.weaselmouth.com/2012/11/06/integrated-kitchen-lighting-for-the-airstream/">
                Integrated Kitchen Lighting for the Airstream
              </a> <BlogPost />
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by WeaselMouth
            </Paragraph>
          </Box>
        </Tile>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad="small">
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://www.weaselmouth.com/2012/02/22/odds-and-ends-coat-hooks-and-upholstery/">
                Odds and Ends: Coat Hooks and Upholstery
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
