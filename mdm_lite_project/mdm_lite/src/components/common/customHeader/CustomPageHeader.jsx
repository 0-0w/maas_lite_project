import { PageHeader } from "@carbon/ibm-products";
import { ProgressIndicator, ProgressStep } from "@carbon/react";

import "./Pageheader.scss"


function CustomPageHeader() {
    return (
        <PageHeader title="Welcome" className="pageheader">
        <ProgressIndicator className="progrerssIndicator">
          <ProgressStep complete label="Welcome" />
          <ProgressStep current label="Organistion needs" />
        </ProgressIndicator>
      </PageHeader>
    )
}

export default CustomPageHeader;