import React from 'react';

import { Anchor, Section, Heading, Menu } from 'grommet';

export default function Symbols (props) {
  return (
    <Section separator="top">
      <Heading tag="h3">Content Creators <i className="material-icons">open_in_new</i></Heading>
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
  )
}
