import { CheckmarkOutline } from "@carbon/icons-react";
import { HeaderGlobalBar } from "@carbon/react";
import "./welcome.scss";

function WelcomeHeader({ name }) {
  return (
    <>
      <HeaderGlobalBar />
      <div className="WelcomeHeader">
        <h1>Welcome, {name}</h1>
        <CheckmarkOutline />
        <span> Welcome</span>
      </div>
    </>
  );
}

export default WelcomeHeader;
