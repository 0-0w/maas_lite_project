import { SelectableTile } from "@carbon/react";
import "./devices.scss";

function DeviceCard({ name }) {
  return <SelectableTile className={`device-${name}`}>{name}</SelectableTile>
}

export default DeviceCard;