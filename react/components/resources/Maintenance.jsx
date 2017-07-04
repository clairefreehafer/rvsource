import React from 'react';

import { Box, Header, Heading, Paragraph, Section, Tiles, Tile } from 'grommet';
import BookIcon from 'grommet/components/icons/base/Book';
import TextWrap from 'grommet/components/icons/base/TextWrap';
import Video from 'grommet/components/icons/base/Video';
import Currency from 'grommet/components/icons/base/Currency';

export default function Maintenance (props) {
  return (
    <Section>
      <Heading tag="h2">Maintenance</Heading>
      <Tiles fill={true}>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad="small">
            <Heading tag="h3" strong={true} margin="none">
              <a href="https://www.amazon.com/gp/product/098334583X/">
                Airstream Life's (Nearly) Complete Guide To Airstream Maintenance
              </a> <BookIcon /> <Currency />
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by Rich Luhr
            </Paragraph>
          </Box>
        </Tile>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad={{"horizontal": "small"}}>
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://malimish.com/blog/airstream-maintenance-how-to-repack-your-axle-bearings/">
                Airstream Maintenance: How to Repack Your Axle Bearings
              </a> <TextWrap />
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
          <Header size="small" pad={{"horizontal": "small"}}>
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://www.weaselmouth.com/2013/05/21/fixing-a-broken-airstream-cabinet/">
                Fixing a broken Airstream cabinet
              </a> <TextWrap />
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
              <a href="http://www.weaselmouth.com/2012/01/03/how-to-recalibrate-rv-tank-monitor/">
                How to Recalibrate RV Tank Monitor
              </a> <TextWrap />
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
              <a href="http://www.weaselmouth.com/2012/05/18/new-mattress-for-the-airstream/">
                How to Replace an Airstream Mattress
              </a> <TextWrap />
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
              <a href="http://malimish.com/blog/2012/07/16/upgrade-your-airstream-with-bright-efficient-and-durable-leds/">
                Upgrade Your Airstream with Bright, Efficient and Durable LEDs
              </a> <TextWrap /> <Video />
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by Mali Mish
            </Paragraph>
          </Box>
        </Tile>

      </Tiles>
    </Section>
  )
}
