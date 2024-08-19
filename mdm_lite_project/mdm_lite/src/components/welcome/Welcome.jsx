import { CheckmarkOutline } from "@carbon/icons-react";
import { Heading } from "@carbon/react";
import "./welcome.scss";

function WelcomeHeader({ name }) {
  return (
    <>
      <div className="WelcomeHeader">
        <Heading>Welcome, {name}</Heading>
        <CheckmarkOutline />
        <span> Welcome</span>
      </div>
    </>
  );
}

export default WelcomeHeader;
