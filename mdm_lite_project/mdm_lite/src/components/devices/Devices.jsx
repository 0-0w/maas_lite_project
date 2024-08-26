import {
  SelectableTile,
  Checkbox,
  CheckboxGroup,
  Section,
} from "@carbon/react";

import { Grid, Column } from "@carbon/react";
import { Heading } from "@carbon/react";
import { Button, ButtonSet } from "@carbon/react";

import React, { useState, useContext } from "react";
import { DeviceContext } from "../../store/device-selection-context";
// import Footer  from "../common/footer/Footer";

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
      {/* <div style={{ marginTop: "6rem" }}>
        <p>Let's personalize your portal</p>
        <p>Type of devices do you own?</p>
        </div> */}
      <Grid condensed fullWidth>
        <Column sm={4} md={8} lg={16}>
          <Grid>
            <Column sm={3} md={8} lg={8}>
              <Section level={5}>
                <Heading>Let's personalize your portal</Heading>
                <Heading>Type of devices do you own?</Heading>
              </Section>
            </Column>
          </Grid>
        </Column>

        <Column sm={4} md={4} lg={8}>
          <Grid className="device-container">
            <Column sm={2} md={2} lg={3}>
              <SelectableTile
                className={`device-Apple`}
                onClick={() => (DeviceObj.Apple = !DeviceObj.Apple)}
                style={{ marginTop: "1em" , border: "1px solid black"}}
              >
                Apple
              </SelectableTile>
            </Column>
            <Column sm={3} md={2} lg={4}>
              <SelectableTile
                className={`device-Andriod`}
                onClick={() => (DeviceObj.Andriod = !DeviceObj.Andriod)}
                style={{ marginTop: "1em" ,border: "1px solid black"}}
              >
                Andriod
              </SelectableTile>
            </Column>
          </Grid>
        </Column>

        <Column sm={4} md={8} lg={16}>
          <Section level={6} style={{ marginTop: "5em", marginLeft: "2.5em" }}>
            <Heading>What are you looking for?</Heading>
          </Section>
        </Column>
      </Grid>

      <Grid>
        <Column sm={2} md={8} lg={16}>
          <CheckboxGroup
            orientation="horizontal"
            className="checkbox-container"
          >
            <Checkbox
              labelText="Provide security"
              className={`securityBox ${isCheckedSecurity ? "checked" : ""}`}
              id="sec1"
              onClick={() => (DeviceObj.Security = !DeviceObj.Security)}
              onChange={() => setIsCheckedSecurity(!isCheckedSecurity)}
            />
            <Checkbox
              labelText="Manage apps"
              className={`appBox ${isCheckedApps ? "checked" : ""}`}
              id="sec2"
              onClick={() => (DeviceObj.ManageApps = !DeviceObj.ManageApps)}
              onChange={() => setIsCheckedApps(!isCheckedApps)}
            />
            <Checkbox
              labelText="Set up kiosk"
              className={`setUpbox ${isCheckedSetup ? "checked" : ""}`}
              id="sec3"
              onClick={() => (DeviceObj.SetUpkiosk = !DeviceObj.SetUpkiosk)}
              onChange={() => setIsCheckedSetup(!isCheckedSetup)}
            />
          </CheckboxGroup>
        </Column>

      </Grid>

      {/* <div className="device-container"> */}
      {/* </div> */}

      {/* <div style={{ margin: "5em 2em 0.6em" }}> */}
      {/* // </div> */}

      {/* <Button kind="ghost" style={{border: "1px solid black"}}>Skip</Button>
        <Button kind="secondary">Back</Button>
        <Button kind="primary">Get started</Button> */}
    </DeviceContext.Provider>
  );
}

export default Devices;
