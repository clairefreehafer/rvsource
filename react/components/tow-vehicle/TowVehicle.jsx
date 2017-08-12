import React from 'react';

import { Anchor, Box, Columns, Heading, Hero, Image, Paragraph, Section, Table, TableHeader, TableRow } from 'grommet';

export default class TowVehicle extends React.Component {
  constructor (props) {
    super();

    this.state = {
      sortIndex: 0,
      sortAscending: true
    }

    this.tableOnSort = this.tableOnSort.bind(this);
  }

  tableOnSort (sortIndex) {
    this.setState({
      sortIndex: sortIndex,
      sortAscending: !this.state.sortAscending
    });
  }

  render () {
    return (
      <Section>
        <Heading>Tow Vehicles</Heading>
        <Table>
          <TableHeader labels={['Type', 'Make', 'Model']}
            sortIndex={this.state.sortIndex}
            sortAscending={this.state.sortAscending}
            onSort={this.tableOnSort}
          />
          <tbody>
            <TableRow>
              <td>Cargo Van</td>
              <td>Chrevrolet</td>
              <td>Express</td>
            </TableRow>
          </tbody>
        </Table>
      </Section>
    )
  }
}
