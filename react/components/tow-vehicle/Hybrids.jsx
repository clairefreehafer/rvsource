import React from 'react';

import { Heading, Section, Table, TableHeader, TableRow } from 'grommet';

import { getTowVehicles } from '../../utils';

export default class Hybrids extends React.Component {
  constructor (props) {
    super();

    this.state = {
      sortIndex: 0,
      sortAscending: true,
      towVehicles: []
    }

    // this.tableOnSort = this.tableOnSort.bind(this);
  }

  // componentWillMount () {
  //   getTowVehicles()
  //   .then(res => {
  //     this.setState({
  //       towVehicles: res.data
  //     })
  //   })
  //   .catch(console.error);
  // }

  // tableOnSort (sortIndex, sortAscending) {
  //   let columnToSortBy = tableLabels[sortIndex],
  //   sortedTowVehicles = this.state.towVehicles.sort((a, b) => {
  //     if (a. < b.last_nom)
  //       return -1;
  //     if (a.last_nom > b.last_nom)
  //       return 1;
  //     return 0;
  //   })

  //   this.setState({
  //     sortIndex: sortIndex,
  //     sortAscending: sortAscending
  //   });
  // }

  render () {
    var tableLabels = ['Type', 'Make', 'Model', 'Max. Tow Rating', 'Starting MSRP', 'Fuel Economy (city/hwy)', 'Length', 'Wheelbase'];

    console.log(this.state)
    return (
      <Section>
        <Heading>Tow Vehicles</Heading>
        <Table>
          <TableHeader labels={tableLabels}
            sortIndex={this.state.sortIndex}
            sortAscending={this.state.sortAscending}
            onSort={this.tableOnSort}
          />
          <tbody>
            {this.state.towVehicles.map(towVehicle => {
              return (
                <TableRow key={towVehicle.model}>
                  <td>{towVehicle.type}</td>
                  <td>{towVehicle.make}</td>
                  <td>{towVehicle.model}</td>
                  <td>{towVehicle.towRating} lbs.</td>
                  <td>${towVehicle.msrp}</td>
                  {towVehicle.fuelEconomy ?
                    <td>{towVehicle.fuelEconomy[0]} / {towVehicle.fuelEconomy[1]} mpg</td>
                  : <td>?? / ?? mpg</td>}
                  {towVehicle.length.length > 1 ?
                    <td>{towVehicle.length[0]}" to {towVehicle.length[1]}"</td>
                  : <td>{towVehicle.length[0]}"</td>}
                  {towVehicle.wheelbase.length > 1 ?
                    <td>{towVehicle.wheelbase[0]}" or {towVehicle.wheelbase[1]}"</td>
                  : <td>{towVehicle.wheelbase[0]}"</td>}
                </TableRow>
              )
            })}
          </tbody>
        </Table>
      </Section>
    )
  }
}
