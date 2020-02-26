/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Do you love this UI Kit?</h2>
            <h4>
              It was entirely created by the team at creative-tim, I simply customized it.
            </h4>
            <h5>Please check out their incredible work on the website below!
            </h5>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="info"
              size="lg"
              href="https://www.creative-tim.com"
              target="_blank"
            >
              creative-tim.com
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}