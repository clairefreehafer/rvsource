import React from 'react';

import { Anchor, Box, Footer, Heading, Menu, Section, Paragraph, Tile, Tiles } from 'grommet';
import GitHub from 'grommet/components/icons/base/SocialGithub';

import SearchBar from './SearchBar';

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
      <Section separator="top">
        <Heading tag="h3" margin="none">Symbols key</Heading>
          <Tiles flush={false} size="medium">
            <Tile><i className="material-icons md-36">book</i> Book</Tile>
            <Tile><i className="material-icons md-36">create</i> Blog Post</Tile>
            <Tile><i className="material-icons md-36">dns</i> Forum</Tile>
            <Tile><i className="material-icons md-36">videocam</i> Video</Tile>
            <Tile><i className="material-icons md-36">attach_money</i> Not Free</Tile>
          </Tiles>
      </Section>

      <Section separator="top">
        <Heading tag="h3">Websites featured <i className="material-icons">open_in_new</i></Heading>
        <Menu inline={true} primary={true} size="small" pad="none">
          <Anchor href="http://www.airforums.com/" target="_blank">Air Forums</Anchor>
          <Anchor href="http://www.campaddict.com/" target="_blank">Camp Addict</Anchor>
          <Anchor href="http://www.dreamstreamr.com/" target="_blank">Dreamstreamr</Anchor>
          <Anchor href="http://www.gonewiththewynns.com/" target="_blank">Gone with the Wynns</Anchor>
          <Anchor href="http://www.livingintin.com/" target="_blank">Living in Tin</Anchor>
          <Anchor href="http://www.malimish.com/" target="_blank">Mali Mish</Anchor>
          <Anchor href="http://www.technomadia.com/" target="_blank">Technomadia</Anchor>
          <Anchor href="http://www.weaselmouth.com/" target="_blank">WeaselMouth</Anchor>
          <Anchor href="http://wheelingit.us" target="_blank">Wheeling It</Anchor>
        </Menu>
      </Section>

    </Box>
  )
}
