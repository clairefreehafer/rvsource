import React from 'react';

import { Heading, Section, Table, TableHeader, TableRow } from 'grommet';

import { getTowVehicles } from '../../utils';

export default class TowVehicle extends React.Component {
  constructor (props) {
    super();

    this.state = {
      sortIndex: 0,
      sortAscending: true,
      towVehicles: []
    }

    this.tableOnSort = this.tableOnSort.bind(this);
  }

  componentWillMount () {
    getTowVehicles()
    .then(res => {
      this.setState({
        towVehicles: res.data
      })
    })
    .catch(console.error);
  }

  tableOnSort (sortIndex, sortAscending) {
    this.setState({
      sortIndex: sortIndex,
      sortAscending: sortAscending
    });
  }

  render () {
    console.log(this.state)
    return (
      <Section>
        <Heading>Tow Vehicles</Heading>
        <Table scrollable={true}>
          <TableHeader labels={['Type', 'Make', 'Model', 'Max. Tow Rating', 'Starting MSRP', 'Fuel Economy (city/hwy)', 'Size (LxWxH)', 'Wheelbase']}
            sortIndex={this.state.sortIndex}
            sortAscending={this.state.sortAscending}
            onSort={this.tableOnSort}
          />
          <tbody>
            <TableRow>
              <td>Cargo Van</td>
              <td>Chrevrolet</td><td>Express</td>
              <td>10,000 lbs.</td>
              <td>$30,745</td>
              <td>11 / 17 mpg</td>
              <td>224-244" x 79" x 83-85"</td>
              <td>135" or 155"</td>
            </TableRow>
            <TableRow>
              <td>Cargo Van</td>
              <td>GMC</td><td>Savana</td>
              <td>10,000 lbs.</td>
              <td>$30,745</td>
              <td>11 / 17 mpg</td>
              <td>224-244" x 79" x 83-85"</td>
              <td>135" or 155"</td>
            </TableRow>
            <TableRow>
              <td>Cargo Van</td>
              <td>Nissan</td><td>NV</td>
              <td>9,400 lbs.</td>
              <td>$28,730</td>
              <td>?? / ?? mpg</td>
              <td>240" x 69" x 84"-105"</td>
              <td>146"</td>
            </TableRow>

            <TableRow>
              <td>SUV</td>
              <td>Chrevrolet</td><td>Tahoe</td>
              <td>8,400 lbs.</td>
              <td>$47,215</td>
              <td>16 / 23 mpg</td>
              <td>204" x 81" x 74"</td>
              <td>116"</td>
            </TableRow>
            <TableRow>
              <td>SUV</td>
              <td>Ford</td><td>Expedition</td>
              <td>9,300 lbs.</td>
              <td>$47,125</td>
              <td>15 / 21 mpg</td>
              <td>207" x 79" x 77"</td>
              <td>119" or 131"</td>
            </TableRow>
            <TableRow>
              <td>SUV</td>
              <td>GMC</td><td>Yukon</td>
              <td>8,500 lbs.</td>
              <td>$48,530</td>
              <td>16 / 23 mpg</td>
              <td>204" x 81" x 74"</td>
              <td>116"</td>
            </TableRow>
            <TableRow>
              <td>SUV</td>
              <td>Infiniti</td><td>QX80</td>
              <td>8,500 lbs.</td>
              <td>$63,850</td>
              <td>14 / 20 mpg</td>
              <td>210" x 80" x 76"</td>
              <td>121"</td>
            </TableRow>
            <TableRow>
              <td>SUV</td>
              <td>Lincoln</td><td>Navigator</td>
              <td>9,000 lbs.</td>
              <td>$63,515</td>
              <td>15 / 21 mpg</td>
              <td>207" x 79" x 78"</td>
              <td>119" or 131"</td>
            </TableRow>
            <TableRow>
              <td>SUV</td>
              <td>Nissan</td><td>Armada</td>
              <td>8,500 lbs.</td>
              <td>$44,900</td>
              <td>14 / 19 mpg</td>
              <td>209" x 80" x 76"</td>
              <td>121.1"</td>
            </TableRow>
            <TableRow>
              <td>SUV</td>
              <td>Toyota</td><td>Land Cruiser</td>
              <td>8,100 lbs.</td>
              <td>$84,775</td>
              <td>13 / 18 mpg</td>
              <td>195" x 78" x 74"</td>
              <td>112"</td>
            </TableRow>
          </tbody>
        </Table>
      </Section>
    )
  }
}
