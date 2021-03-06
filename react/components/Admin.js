import React, { Component } from 'react';

import { Box,Button, Footer, Form, FormField, Header, Heading, Select, TextInput } from 'grommet';

import { getAllLinks } from '../utils';

export default class Admin extends Component {
  constructor (props) {
    super();

    this.state = {
      authorSuggestions: [],
      categorySuggestions: ['Apps', 'Boondocking', 'Cold Weather', 'Internet', 'Mail', 'Maintenance', 'Renovating & Deco'],
      links: [],
      newLink: {
        title: null,
        author: null,
        url: null,
        category: null,
        types: []
      },
      password: null
    };
  }

  componentWillMount () {
    getAllLinks()
      .then(links => this.setState({ 'links': links.data }))
      .catch(console.error);
  }

  handleAddingLink () {

  }

  render () {
    const typeOptions = ['BlogPost', 'Book', 'Video', 'PayWall'];

    let allLinks = this.state.links.map(link => `${link.title} by ${link.author}`)

    return (
      <Box>
        <Form>
          <Header>
            <Heading tag="h2">add article</Heading>
          </Header>

          <FormField label="article title">
            <TextInput />
          </FormField>

          <FormField label="author">
            <TextInput />
          </FormField>

          <FormField label="url">
            <TextInput defaultValue="https://" />
          </FormField>

          <FormField label="category">
            <TextInput />
          </FormField>

          <FormField label="types">
            {/* <Select inline={true} multiple={true} options={typeOptions} /> */}
            <TextInput />
          </FormField>

          <FormField label="password">
            <TextInput />
          </FormField>

          <Footer margin={{'vertical': 'small'}}>
            <Button label='Submit' type='submit' />
          </Footer>

        </Form>

        <Form>
        <Header margin={{'top': 'large'}} separator="top">
          <Heading tag="h2">delete article</Heading>
        </Header>

        <FormField label="select article(s)">
          <Select inline={true} multiple={true} options={allLinks} />
        </FormField>

        <FormField label="password">
          <TextInput />
        </FormField>

        <Footer margin={{'vertical': 'small'}}>
          <Button label='Submit' type='submit' />
        </Footer>

      </Form>
      </Box>

    )
  }
}
