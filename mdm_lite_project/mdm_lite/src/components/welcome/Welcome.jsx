import { PageHeader } from "@carbon/ibm-products";
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderMenu,
  HeaderMenuItem,
  HeaderNavigation,
  HeaderGlobalAction,
  HeaderGlobalBar,
  FlexGrid,
  Column,
  Row,
  Grid,
} from "@carbon/react";
import { SideNav, SideNavItems, SideNavLink } from "@carbon/react";
import { ProgressIndicator, ProgressStep } from "@carbon/react";
import { Search } from "@carbon/react";
import { Notification } from "@carbon/icons-react";

import { useState } from "react";

import "./welcome.scss";
function WelcomeHeader({ name }) {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  return (
    <>
      <PageHeader title={`Welcome ${name}`} className="pageheader">
        <ProgressIndicator className="progrerssIndicator">
          <ProgressStep complete label="Welcome" />
          <ProgressStep current label="Organistion needs" />
        </ProgressIndicator>
      </PageHeader>

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


        <HeaderGlobalBar className="headerGlobalBar"> 
        {/* TODO: fix the search bar */}
        <Search
          closeButtonLabelText="Clear search input"
          id="search-playground-1"
          labelText="Label text"
          placeholder="Search devices, user, apps, policies"
          role="searchbox"
          size="sm"
          type="text"
        />
         {/* <HeaderGlobalAction
            aria-label="Search"
            onClick={() => console.log("clicked")}
          >
            <Search size={20} />
          </HeaderGlobalAction> */}

          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={() => console.log("clicked")}
          >
            <Notification size={20} />
          </HeaderGlobalAction>  

        {/* <HeaderGlobalAction aria-label="App Switcher" onClick={action('app-switcher click')} tooltipAlignment="end">
              <SwitcherIcon size={20} />
            </HeaderGlobalAction> */}
        </HeaderGlobalBar>


        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 3</HeaderMenuItem>

          <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem isActive href="#">
              Sub-link 2
            </HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>


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
    </>
  );
}

export default WelcomeHeader;
