import React from 'react';

import { Section, Heading, Tiles, Tile } from 'grommet';

export default function Symbols (props) {
  return (
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
  )
}
