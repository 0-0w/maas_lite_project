import { SelectableTile, Checkbox, CheckboxGroup } from "@carbon/react";
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
      <div style={{ marginTop: "6rem" }}>
        <p>Let's personalize your portal</p>
        <p>Type of devices do you own?</p>
      </div>

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

      <div style={{ margin: "5em 2em 0.6em" }}>What are you looking for?</div>
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
    </DeviceContext.Provider>
  );
}

export default Devices;
