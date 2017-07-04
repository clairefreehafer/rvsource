import React from 'react';

import { Box, Header, Heading, Paragraph, Section, Tiles, Tile } from 'grommet';

export default function Apps (props) {
  console.log(props)
  return (
    <Section>
      <Heading tag="h2">Apps</Heading>

      <Tiles fill={true}>
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad={{"horizontal": "small"}}>
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://livingintin.com/great-apps-for-the-road/">
                Great apps for the road
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
