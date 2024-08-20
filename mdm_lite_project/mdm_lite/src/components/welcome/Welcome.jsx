import { CreateFullPage, CreateFullPageStep } from "@carbon/ibm-products";
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavLink,
  RadioButtonGroup,
  RadioButton,
  Grid,
  Column,
} from "@carbon/react";
import { useState } from "react";

import "./welcome.scss";

function WelcomeHeader({ name }) {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  return (
    <>
      <div className="WelcomeHeader"><p style={{fontSize: "2em", marginLeft: "1em"}}>Welcome, {name}</p></div>
      <Header aria-label="IBM Platform Name">
        <HeaderMenuButton
          aria-label="Open menu"
          isCollapsible
          onClick={() => {
            setIsSideNavExpanded((prev) => !prev);
          }}
          isActive={isSideNavExpanded}
          />
        <HeaderName href="#" prefix="IBM">
          MaaS360 Lite
        </HeaderName>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isFixedNav
          >
          <SideNavItems>
            <SideNavLink
              href="https://pages.github.ibm.com/cdai-design/pal/"
              target="_blank"
              >
              Sample link: Carbon for IBM Products
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </Header>

      {/* <CreateFullPage>1 */}
      {/* title={`Welcome ${name}`} */}
      {/* <CreateFullPageStep secondaryLabel="Next"> Next </CreateFullPageStep>
      </CreateFullPage> */}
      </>
  );
}

export default WelcomeHeader;
