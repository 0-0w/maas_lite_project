import { Button, Grid, Column } from "@carbon/react";

import "./footer.scss";

function Footer() {
  return (
    <Grid className="footer-button" sm={2} md={8} lg={16} condensed>
      <Column sm={2} md={5} lg={4}>
        <Button kind="ghost" className="SkipButton">
          Skip
        </Button>
      </Column>
      <Column sm={2} md={3} lg={4}>
        <Button kind="secondary">Back</Button>
        <Button kind="primary">Get started</Button>
      </Column>
    </Grid>
  );
}

export default Footer;
