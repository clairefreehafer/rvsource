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

    this.state = {
      links: []
    };
  }

  componentDidMount () {
    getLinks(this.props.location.pathname)
      .then(links => (this.setState({ links: links.data })))
      .catch(console.error);
  }

  render () {
    return (
      <Section>
        <Heading tag="h2">{getTitle(this.props.location.pathname)}</Heading>
        <Tiles fill={true}>

          {this.state.links.map(link => {
            return (
              <Tile separator="top" align="start" wide={true} key={link.id}>
                <Header size="small" pad="small">
                  <Heading tag="h3" strong={true} margin="none">
                    <a href={link.url}>
                      {link.title}
                    </a> {link.types}
                  </Heading>
                </Header>
                <Box pad="small">
                  <Paragraph margin="none">
                    by {link.author}
                  </Paragraph>
                </Box>
              </Tile>
            )
          })}

        </Tiles>
      </Section>
    )
  }
}

          // {/***** tile *****/}
          // <Tile separator="top" align="start" wide={true}>
          //   <Header size="small" pad="small">
          //     <Heading tag="h3" strong={true} margin="none">
          //       <a href={'{url}'}>
          //         {'{title}'}
          //       </a> {'{type}'}
          //     </Heading>
          //   </Header>
          //   <Box pad="small">
          //     <Paragraph margin="none">
          //       by {'{author}'}
          //     </Paragraph>
          //   </Box>
          // </Tile>
