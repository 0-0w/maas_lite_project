import DeviceCard from "./Device_Card";
import { Apple, Checkbox } from "@carbon/icons-react";
import React from "react";

function Devices() {
  return (
    <>
      <div >
        <p>Let's personalize your portal</p>
        <p>Type of devices do you own?</p>
      </div>
      <div className="device-container">
        <DeviceCard name="Apple" />
        <DeviceCard name="Andriod" />
      </div>
    </>
  );
}

export default Devices;
