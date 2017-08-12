import React from 'react';

import { Anchor, Box, Columns, Header, Heading, Hero, Image, Paragraph, Section, Tiles, Tile } from 'grommet';

export default function ToyotaLandCruiser (props) {
  return (
    <Section>
      <Hero
        background={<Image src="https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2017/landcruiser/8P8/1.png" fit="cover" full={true} />}
        backgroundColorIndex="dark"
        size="small"
      >
        <Box direction="row"
          justify="center"
          align="center"
        >
          <Heading margin="none">Toyota Land Cruiser</Heading>
        </Box>
      </Hero>
      <Box margin="small">
        <Heading tag="h3" margin="small">Basic Info</Heading>
        <Paragraph margin="none">
          <Anchor to="https://www.toyota.com/landcruiser/">2017 official website</Anchor><br />
          <strong>Starting MSRP:</strong> $84,775
        </Paragraph>
      </Box>

      {/* dimensions */}
      <Box margin="small">
        <Heading tag="h3" margin="small">Dimensions</Heading>
        <Paragraph margin="none">
          <strong>74.0" tall, 77.95" wide, 194.9" long</strong><br />
          <strong>112.2" wheelbase</strong><br />
          <strong>8.9" ground clearance</strong><br />
          3.307 rear axle ratio
        </Paragraph>
      </Box>

      {/* weights/capacities */}
      <Box margin="small">
        <Heading tag="h3" margin="small">Weights/Capacities</Heading>
        <Paragraph margin="none">
          <strong>5,815 lb. curb weight</strong><br />
          <strong>7,385 lb. GVWR</strong><br />
          <strong>24.6 gal. fuel tank</strong><br />
          Integrated towing hitch receiver and wiring harness with 4-/7-pin connectors<br />
          <strong>8,100 lb. towing capacity</strong>
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Engine</Heading>
        <Paragraph margin="none">
          <strong>5.7 L</strong><br />
          DOHC 32-Valve<br />
          <strong>V8</strong><br />
          with Dual Independent Variable Valve Timing with intelligence (VVT-i)<br />
          <strong>381 hp</strong> at 5600 rpm<br />
          <strong>401 lb-ft. torque</strong> at 3600 rpm
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">EPA</Heading>
        <Paragraph margin="none">
          <strong>13 mpg city / 18 mpg highway / 15 mpg combined</strong><br />
          Ultra Low Emission Vehicle II (ULEV-II)
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Transmission</Heading>
        <Paragraph margin="none">
          8-speed Electronically Controlled automatic Transmission with intelligence (ECT-i)<br />
          sequential shift mode and uphill/downhill shift logic
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Drivetrain</Heading>
        <Paragraph margin="none">
          Full-time <strong>4WD</strong> system<br />
          Active Traction Control (A-TRAC)<br />
          Torsen 45 limited-slip center differential with locking feature
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Body</Heading>
        <Paragraph margin="none">
          Unitized steel body on 10-member high-tensile steel ladder frame
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Suspension</Heading>
        <Paragraph margin="none">
          Independent double-wishbone front suspension with coil springs and stabilizer bar<br />
          4-link rear suspension with coil springs, stabilizer bar and semi-floating axle<br />
          Kinetic Dynamic Suspension System (KDSS)
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Steering</Heading>
        <Paragraph margin="none">
          Vehicle speed-sensing<br />
          variable gear ratio<br />
          power-assisted rack-and-pinion<br />
          <strong>38.7 ft.</strong> turning diameter, curb to curb
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Brakes</Heading>
        <Paragraph margin="none">
          Power-assisted 4-piston front/2-piston rear ventilated disc brakes with hydraulic brake booster and Star Safety System<br />
          13.97 in. front disc brake rotor diameter<br />
          13.58 in. rear disc brake rotor diameter
        </Paragraph>
      </Box>
    </Section>
  )
}
