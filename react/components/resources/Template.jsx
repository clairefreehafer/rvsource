import React, { Component } from 'react';

import { Box, Header, Heading, Paragraph, Section, Tiles, Tile } from 'grommet';
import BlogPost from 'grommet/components/icons/base/TextWrap';
import Book from 'grommet/components/icons/base/Book';
import Forum from 'grommet/components/icons/base/Database';
import PayWall from 'grommet/components/icons/base/Currency';
import Video from 'grommet/components/icons/base/Video';

import { getLinks, getTitle } from '../../utils';

export default class Category extends Component {
  constructor (props) {
    super();

    this.state = {
      category: props.location.pathname,
      links: []
    };
  }

  /**
   * use the current url pathname to fetch the appropriate links
   * from the database. then put them on the state.
  */
  componentDidMount () {
    getLinks(this.props.location.pathname)
      .then(links => (this.setState({ links: links.data })))
      .catch(console.error);
  }

  /**
   * every time the url path changes (user clicks to a different page),
   * fetch the new appropriate links and put them on the state
   *
   * @param {Object} newProps - updated props
   */
  componentWillReceiveProps (newProp) {
    getLinks(newProp.location.pathname)
      .then(links => (this.setState({
        category: newProp.location.pathname,
        links: links.data
      })))
      .catch(console.error);
  }

  /**
   * each database entry includes a 'types' field which corresponds to what
   * icons will be displayed. this array is passed into the function and mapped
   * over to display each function. the iconComponents array is an array of
   * the actual components imported from grommet; this is necessary for the
   * components to render properly, and cannot simply be a string title like
   * in the iconTypes array. iconTypes is used to match the array returned
   * from the database with each component
   *
   * @param {Array} typesArr - the array of types retrieved from the database
   * for that item
   * @return JSX elements for the type icons
   */
  getTypeIcons (typesArr) {
    const iconComponents = [BlogPost, Book, Forum, PayWall, Video];
    const iconTypes = ['BlogPost', 'Book', 'Forum', 'PayWall', 'Video'];

    return typesArr.map(type => {
      let compIndex = iconTypes.indexOf(type);
      let Icon = iconComponents[compIndex];
      return (<div className="types-icon" key={type}><Icon /></div>);
    });
  }

  render () {
    /**
     * the title of the current page, retrieved from whichever menu link is active
     */
    let pageTitle = document.getElementsByClassName('grommetux-anchor--active')[0];

    return (
      <Section>
        {/**
         * if the pageTitle dom element has been retrieved, take its innerText to
         * render the page title. if statement for async issues.
         */}
        <Heading tag="h2">{pageTitle ? pageTitle.innerText : null}</Heading>
        <Tiles fill={true}>

          {/**
           * map over the links retrieved from the database
           */}
          {this.state.links.map(link => {
            return (
              <Tile separator="top" align="start" wide={true} key={link.id}>
                <Header size="small" pad="small">
                  <Heading tag="h3" strong={true} margin="none">
                    <a href={link.url}>
                      {link.title}
                    </a>
                  </Heading>

                  {/**
                   * render the type icons for each link
                   */}
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
