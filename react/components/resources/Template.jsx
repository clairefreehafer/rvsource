import React, { Component } from 'react';

import { Box, Header, Heading, Paragraph, Section, Tiles, Tile } from 'grommet';
import Book from 'grommet/components/icons/base/Book';
import BlogPost from 'grommet/components/icons/base/TextWrap';
import Video from 'grommet/components/icons/base/Video';
import PayWall from 'grommet/components/icons/base/Currency';

import { getLinks, getTitle } from '../../utils';

export default class category extends Component {
  constructor (props) {
    super();
  }

  componentDidMount () {
    getLinks(this.props.location.pathname);
  }

  render () {
    return (
      <Section>
        <Heading tag="h2">{getTitle(this.props.location.pathname)}</Heading>
        <Tiles fill={true}>

          {/***** tile *****/}
          <Tile separator="top" align="start" wide={true}>
            <Header size="small" pad="small">
              <Heading tag="h3" strong={true} margin="none">
                <a href={'{url}'}>
                  {'{title}'}
                </a> {'{type}'}
              </Heading>
            </Header>
            <Box pad="small">
              <Paragraph margin="none">
                by {'{author}'}
              </Paragraph>
            </Box>
          </Tile>

        </Tiles>
      </Section>
    )
  }
}
