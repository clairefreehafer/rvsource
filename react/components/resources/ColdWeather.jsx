import React from 'react';

import { Box, Header, Heading, Paragraph, Section, Tiles, Tile } from 'grommet';

export default function ColdWeather (props) {
  return (
    <Section>
      <Heading tag="h2">Cold Weather</Heading>
      <Tiles fill={true}>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad="small">
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://www.weaselmouth.com/2012/03/24/i-need-to-be-warm/">
                I don't need a lot in the Airstream, but I need to be warm.
              </a>
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
          <Header size="small" pad={{"horizontal": "small"}}>
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://livingintin.com/over-winter-in-your-rv/">
                Over winter in your RV
              </a>
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by Living in Tin
            </Paragraph>
          </Box>
        </Tile>

      </Tiles>
    </Section>
  )
}
