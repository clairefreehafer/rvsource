import React, { Component } from 'react';

import { Box,Button, Footer, Form, FormField, Header, Heading, Select, TextInput } from 'grommet';

import { getAllLinks } from '../utils';

export default class Admin extends Component {
  constructor (props) {
    super();

    this.state = {
      authorSuggestions: [],
      categorySuggestions: ['Apps', 'Boondocking', 'Cold Weather', 'Internet', 'Mail', 'Maintenance', 'Renovating & Deco'],
      links: []
    };
  }

  componentWillMount () {
    getAllLinks()
      .then(links => this.setState({ 'links': links }))
      .then(console.log(this.state.links))
      .catch(console.error);
  }

  render () {
    const typeOptions = ['BlogPost', 'Book', 'Video', 'PayWall'];

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
            <TextInput suggestions={this.state.authorSuggestions} />
          </FormField>

          <FormField label="url">
            <TextInput defaultValue="https://" />
          </FormField>

          <FormField label="category">
            <TextInput suggestions={this.state.categorySuggestions} />
          </FormField>

          <FormField label="types">
            <Select inline={true} multiple={true} options={typeOptions} />
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
          <Select inline={true} multiple={true} options={['option']} />
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
