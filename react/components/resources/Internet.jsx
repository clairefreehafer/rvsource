import React from 'react';

import { Box, Header, Heading, Paragraph, Section, Tiles, Tile } from 'grommet';
import Book from 'grommet/components/icons/base/Book';
import BlogPost from 'grommet/components/icons/base/TextWrap';
import Video from 'grommet/components/icons/base/Video';
import PayWall from 'grommet/components/icons/base/Currency';

export default function Internet (props) {
  return (
    <Section>
      <Heading tag="h2">Internet</Heading>
      <Tiles fill={true}>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad="small">
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://malimish.com/blog/2008/11/17/the-rv-web-chapter-1-extending-your-wifi-range/">
                Extending Your WiFi Range
              </a> <BlogPost />
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
              <a href="http://malimish.com/blog/2008/12/17/my-secret-wifi-hot-spot-weapon/">
                My Secret WiFi Hot Spot Weapon
              </a> <BlogPost />
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
              <a href="https://www.rvmobileinternet.com/">
                RV Mobile Internet Resource Center
              </a> <Book /> <Video /> <BlogPost /> <PayWall />
            </Heading>
          </Header>
          <Box pad="small">
            <Paragraph margin="none">
              by Technomadia
            </Paragraph>
          </Box>
        </Tile>

        {/***** tile *****/}
        <Tile separator="top" align="start" wide={true}>
          <Header size="small" pad={{"horizontal": "small"}}>
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://www.weaselmouth.com/2014/04/06/wifi-in-an-airstream-problems/">
                WiFi in an Airstream: The Problems
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
          <Header size="small" pad={{"horizontal": "small"}}>
            <Heading tag="h3" strong={true} margin="none">
              <a href="http://malimish.com/blog/2008/12/24/the-rv-web-chapter-2-wireless-broadband/">
                Wireless Broadband
              </a> <BlogPost />
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
