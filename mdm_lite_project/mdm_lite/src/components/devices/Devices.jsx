import {
  SelectableTile,
  Checkbox,
  CheckboxGroup,
  Section,
} from "@carbon/react";

import { FlexGrid, Row, Column } from "@carbon/react";
import { Heading } from "@carbon/react";
import { Button, ButtonSet } from "@carbon/react";

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
      {/* <div style={{ marginTop: "6rem" }}>
        <p>Let's personalize your portal</p>
        <p>Type of devices do you own?</p>
        </div> */}

      <FlexGrid>
        <Row>
          <Column sm={1} md={2}>
            <Section level={5}>
              <Heading>Let's personalize your portal</Heading>
            </Section>
          </Column>
          <Column sm={1} md={2}>
            <Section level={5}>
              <Heading>Type of devices do you own?</Heading>
            </Section>
          </Column>
        </Row>
        {/* <div className="device-container"> */}
        <Row>
          <Column sm={1} md={2}>
            <SelectableTile
              className={`device-Apple`}
              onClick={() => (DeviceObj.Apple = !DeviceObj.Apple)}
              style={{ marginTop: "2em" }}
            >
              Apple
            </SelectableTile>
            </Column>

          <Column sm={1} md={2}> 
            <SelectableTile
              className={`device-Andriod`}
              onClick={() => (DeviceObj.Andriod = !DeviceObj.Andriod)}
              style={{ marginTop: "2em" }}
            >
              Andriod
            </SelectableTile>
          </Column>
        </Row>
        {/* </div> */}
        <Row>
          <Column sm={{ span: 1, offset: 0 }} md={1}>
            {/* <div style={{ margin: "5em 2em 0.6em" }}> */}
            {/* // </div> */}
            <Section
              level={6}
              style={{ marginTop: "5em", marginLeft: "2.5em" }}
            >
              <Heading>What are you looking for?</Heading>
            </Section>
          </Column>
        </Row>
        <Row>
          <Column sm={{ span: 0, offset: 2 }} md={3}>
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
        </Row>

        <Row>
          <Column>
            <ButtonSet style={{marginTop:"9em"}}>
              <Button kind="ghost" style={{border: "1px solid black"}}>Skip</Button>
              <Button kind="secondary">Back</Button>
              <Button kind="primary">Get started</Button>
            </ButtonSet>
          </Column>
        </Row>
      </FlexGrid>
    </DeviceContext.Provider>
  );
}

export default Devices;
