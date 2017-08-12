import React from 'react';

import { Anchor, Box, Columns, Header, Heading, Hero, Image, Paragraph, Section, Tiles, Tile } from 'grommet';

export default function ToyotaLandCruiser (props) {
  return (
    <Section>
      <Hero
        background={<Image src="https://www.nissanusa.com/dam/nissan/vehicles/suvs/armada/2017/overview/key-features/2017-nissan-armada-full-size-suv-large.jpg" fit="cover" full={true} />}
        backgroundColorIndex="dark"
        size="small"
      >
        <Box direction="row"
          justify="center"
          align="center"
        >
          <Heading margin="none">Nissan Armada</Heading>
        </Box>
      </Hero>
      <Box margin="small">
        <Heading tag="h3" margin="small">Basic Info</Heading>
        <Paragraph margin="none">
          <Anchor to="https://www.nissanusa.com/suvs/armada">2017 official website</Anchor><br />
          <strong>Starting MSRP:</strong> $44,900
        </Paragraph>
      </Box>

      {/* dimensions */}
      <Box margin="small">
        <Heading tag="h3" margin="small">Dimensions</Heading>
        <Paragraph margin="none">
          <strong>75.8" tall, 79.9" wide, 208.9" long</strong><br />
          <strong>121.1" wheelbase</strong><br />
          <strong>9.1" or 9.2" ground clearance</strong><br />
        </Paragraph>
      </Box>

      {/* weights/capacities */}
      <Box margin="small">
        <Heading tag="h3" margin="small">Weights/Capacities</Heading>
        <Paragraph margin="none">
          <strong>5,576 - 5,963 lb. curb weight depending on trim and drivetrain</strong><br />
          <strong>26 gal. fuel tank</strong><br />
          <strong>8,500 lb. towing capacity</strong><br />
          <strong>850 lb. tongue weight capacity</strong><br />
          <strong>1,537 - 1,724 lbs. maximum payload depending on trim and drivetrain</strong>
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Engine</Heading>
        <Paragraph margin="none">
          Endurance <strong>5.6 L</strong><br />
          DOHC 32-valve<br />
          <strong>V8</strong><br />
          <strong>390 hp</strong> at 5800 rpm<br />
          <strong>398 ft.-lb. torque</strong> at 4000 rpm<br />
          Variable Valve Event and Lift (VVEL) technology<br />
          Nissan Direct Ignition System<br />
          Electronic drive-by-wire throttle
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">EPA</Heading>
        <Paragraph margin="none">
          <strong>14 mpg city / 19 mpg highway</strong> 4x2<br />
          <strong>13 mpg city / 18 mpg highway</strong> AWD<br />
          Tier 2-Bin 5 (Fed)<br />
          LEV2-ULEV (CA)
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Transmission</Heading>
        <Paragraph margin="none">
          7-speed automatic transmission with <strong>Tow/Haul Mode</strong><br />
          Lower final drive ratio (2.937:1)
        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Drivetrain</Heading>
        <Paragraph margin="none">
          Optional All-Mode <strong>4WD</strong> with 2-speed transfer case<br />
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
          Independent double-wishbone front suspension<br />
          Independent double-wishbone rear suspension<br />
          Auto-leveling rear suspension<br />
          Front and rear stabilizer bars<br />

        </Paragraph>
      </Box>

      <Box margin="small">
        <Heading tag="h3" margin="small">Steering</Heading>
        <Paragraph margin="none">
          Engine-speed-sensitive power steering
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
