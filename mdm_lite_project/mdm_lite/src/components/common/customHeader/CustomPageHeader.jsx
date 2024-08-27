import { PageHeader } from "@carbon/ibm-products";
import { ProgressIndicator, ProgressStep } from "@carbon/react";
import { Grid, Column, Heading } from "@carbon/react";
import "./Pageheader.scss";

function CustomPageHeader({ title }) {
  return (
    <PageHeader className="pageheader">
      <Grid fullWidth condensed>
        <Column sm={4} md={8} lg={16}>
          <Heading style={{ marginTop: "0.4em" }}>{title}</Heading>
        </Column>

        <Column sm={4} md={8} lg={8}>
          <ProgressIndicator className="progrerssIndicator">
            <ProgressStep complete label="Welcome" />
            <ProgressStep current label="Organistion needs" />
          </ProgressIndicator>
        </Column>
      </Grid>
    </PageHeader>
  );
}

export default CustomPageHeader;
