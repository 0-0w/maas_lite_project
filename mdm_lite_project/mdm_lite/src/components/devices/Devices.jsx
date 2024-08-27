import {
  SelectableTile,
  Checkbox,
  CheckboxGroup,
  Section,
} from "@carbon/react";

import { Grid, Column } from "@carbon/react";
import { Heading } from "@carbon/react";

import React, { useState, useContext } from "react";
import { DeviceContext } from "../../store/device-selection-context";


import "./devices.scss";

function Devices() {
  const DeviceObj = useContext(DeviceContext);
  const [isCheckedSecurity, setIsCheckedSecurity] = useState(false);
  const [isCheckedApps, setIsCheckedApps] = useState(false);
  const [isCheckedSetup, setIsCheckedSetup] = useState(false);
  // function AndriodDevice() {
  //   DeviceObj.Andriod = !DeviceObj.Andriod;
  //   console.log(DeviceObj);
  // }

  return (
    <DeviceContext.Provider value={DeviceObj}>
      <Grid fullWidth>
        <Column sm={4} md={8} lg={16}>
          <Grid>
            <Column sm={3} md={8} lg={8}>
              <Section level={4} className="DeviceHeading">
                <Heading>Let's personalize your portal</Heading>
                <Heading>Type of devices do you own?</Heading>
              </Section>
            </Column>
          </Grid>
        </Column>

        <Column sm={2} md={8} lg={16}>
          <Grid className="device-container" fullWidth>
            <Column sm={2} md={3} lg={3}>
              <SelectableTile
                className={`device-Apple`}
                onClick={() => (DeviceObj.Apple = !DeviceObj.Apple)}
                style={{ marginTop: "1em", border: "1px solid black" }}
              >
                Apple
              </SelectableTile>
            </Column>
            <Column sm={2} md={3} lg={3}>
              <SelectableTile
                className={`device-Andriod`}
                onClick={() => (DeviceObj.Andriod = !DeviceObj.Andriod)}
                style={{ marginTop: "1em", border: "1px solid black" }}
              >
                Andriod
              </SelectableTile>
            </Column>
          </Grid>
        </Column>

        <Column sm={4} md={8} lg={16}>
          <Grid>
            <Column sm={4} md={5} lg={10}>
              <Section level={4} className="additional-options-heading">
                <Heading>What are you looking for?</Heading>
              </Section>
            </Column>
            <Column sm={1} md={8} lg={10}>
              <CheckboxGroup
                orientation="horizontal"
                className="checkbox-container"
              >
                <Checkbox
                  labelText="Provide security"
                  className={`securityBox${
                    isCheckedSecurity ? 'Checked' : ''
                  }`}
                  id="sec1"
                  onClick={() => (DeviceObj.Security = !DeviceObj.Security)}
                  onChange={() => setIsCheckedSecurity(!isCheckedSecurity)}
                />
                <Checkbox
                  labelText="Manage apps"
                  className={`appBox${isCheckedApps ? 'Checked' : '' }`}
                  id="sec2"
                  onClick={() => (DeviceObj.ManageApps = !DeviceObj.ManageApps)}
                  onChange={() => setIsCheckedApps(!isCheckedApps)}
                />
                <Checkbox
                  labelText="Set up kiosk"
                  className={`setUpbox${isCheckedSetup ? 'Checked' : '' }`}
                  id="sec3"
                  onClick={() => (DeviceObj.SetUpkiosk = !DeviceObj.SetUpkiosk)}
                  onChange={() => setIsCheckedSetup(!isCheckedSetup)}
                />
              </CheckboxGroup>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </DeviceContext.Provider>
  );
}

export default Devices;
