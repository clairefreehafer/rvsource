import React, { Component } from 'react';

import { Box, Header, Heading, Paragraph, Section, Tiles, Tile } from 'grommet';
import BlogPost from 'grommet/components/icons/base/TextWrap';
import Book from 'grommet/components/icons/base/Book';
import PayWall from 'grommet/components/icons/base/Currency';
import Video from 'grommet/components/icons/base/Video';

import { getLinks, getTitle } from '../../utils';

const iconStyle = {
  marginLeft: '10px',
  paddingTop: '10px'
};

export default class Category extends Component {
  constructor (props) {
    super();

    this.state = {
      category: props.location.pathname.slice(10),
      links: []
    };
  }

  componentWillMount () {
    getLinks(this.state.category)
      .then(links => (this.setState({ links: links.data })))
      .catch(console.error);
  }

  componentWillReceiveProps (newProp) {
    getLinks(newProp.location.pathname.slice(10))
      .then(links => (this.setState({
        category: newProp.location.pathname.slice(10),
        links: links.data
      })))
      .catch(console.error);
  }

  getTypeIcons (typesArr) {
    const iconComponents = [BlogPost, Book, PayWall, Video];
    const iconTypes = ['BlogPost', 'Book', 'PayWall', 'Video'];

    return typesArr.map(type => {
      let compIndex = iconTypes.indexOf(type)
      let Icon = iconComponents[compIndex];
      return (<div style={iconStyle}><Icon key={type} /></div>);
    });
  }

  render () {
    let pageTitle = document.getElementsByClassName('grommetux-anchor--active')[0];

      console.log(this.state)
    return (
      <Section>
        <Heading tag="h2">{pageTitle ? pageTitle.innerText : null}</Heading>
        <Tiles fill={true}>

          {this.state.links.map(link => {
            let Butt = link.types[0]

            return (
              <Tile separator="top" align="start" wide={true} key={link.id}>
                <Header size="small" pad="small">
                  <Heading tag="h3" strong={true} margin="none">
                    <a href={link.url}>
                      {link.title}
                    </a>
                  </Heading>
                  {this.getTypeIcons(link.types)}
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
