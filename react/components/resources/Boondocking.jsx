import React from 'react';

import { Box, Header, Heading, Paragraph, Section, Tiles, Tile } from 'grommet';

export default function Boondocking (props) {
  return (
    <Section>
      <Heading tag="h2">boondocking</Heading>
      <Tiles fill={true}>

      {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad={{"horizontal": "small"}}>
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://malimish.com/blog/boondocking/">
                An Introductory Guide to Boondocking
              </a>
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by Mali Mish
            </Paragraph>
          </Box>
        </Tile>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad="small">
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://livingintin.com/boondocking-101-for-rvers/">
                Boondocking 101 for RV'ers
              </a>
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by Living in Tin
            </Paragraph>
          </Box>
        </Tile>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad="small">
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://www.technomadia.com/boondocking/">
                RV Boondocking Guide – Getting Off Grid and into Wild Camping
              </a>
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by Technomadia
            </Paragraph>
          </Box>
        </Tile>

      </Tiles>
    </Section>
  )
}
