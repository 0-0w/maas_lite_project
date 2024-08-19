import { Apple } from "@carbon/icons-react";
import {
  SelectableTile,
  Heading,
  Section,
  Checkbox,
  CheckboxGroup,
} from "@carbon/react";
import React, { useState, useContext } from "react";
import { DeviceContext } from "../../store/device-selection-context";

import "./devices.scss";

function Devices() {
  const DeviceObj = useContext(DeviceContext);
  // function AndriodDevice() {
  //   DeviceObj.Andriod = !DeviceObj.Andriod;
  //   console.log(DeviceObj);
  // }

  return (
    <DeviceContext.Provider value={DeviceObj}>
      <Section level={5} as="div">
        <Heading>Let's personalize your portal</Heading>
        <Heading>Type of devices do you own?</Heading>
      </Section>

      <div className="device-container">
        <SelectableTile
          className={`device-Apple`}
          onClick={() => (DeviceObj.Apple = !DeviceObj.Apple)}
        >
          Apple
        </SelectableTile>
        <SelectableTile
          className={`device-Andriod`}
          onClick={() => (DeviceObj.Andriod = !DeviceObj.Andriod)}
        >
          Andriod
        </SelectableTile>
      </div>

      <CheckboxGroup orientation="horizontal" className="checkbox-container">
        <Checkbox
          labelText="Provide security"
          className="securityBox"
          id="sec1"
          onClick={() => (DeviceObj.Security = !DeviceObj.Security)}
        />
        <Checkbox
          labelText="Manage apps"
          className="appBox"
          id="sec2"
          onClick={() => (DeviceObj.ManageApps = !DeviceObj.ManageApps)}
        />
        <Checkbox
          labelText="Set up kiosk"
          className="setUpbox"
          id="sec3"
          onClick={() => (DeviceObj.SetUpkiosk = !DeviceObj.SetUpkiosk)}
        />
      </CheckboxGroup>
    </DeviceContext.Provider>
  );
}

export default Devices;
