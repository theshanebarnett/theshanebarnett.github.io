import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Button from "components/CustomButtons/Button.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h2 align="center">Code </h2>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs 
                plainTabs
                headerColor="success"
                tabs={[
                  {
                    tabName: "C",
                    tabContent: (
                      <p className={classes.textCenter}>
                        C is the language I have spent the most time coding in, although I prefer Java and Python much more.
                      <br></br>
                        <Button
                        color="info"
                        size="sm"
                        href="https://www.github.com/theshanebarnett"
                        target="_blank"
                      >
                        C
                      </Button>
                      </p>
                    )
                  },
                  {
                    tabName: "Java",
                    tabContent: (
                      <p className={classes.textCenter}>
                        <br></br>
                        <Button
                        color="info"
                        size="sm"
                        href="https://www.github.com/theshanebarnett"
                        target="_blank"
                      >
                        Java
                      </Button>
                      </p>
                    )
                  },
                  {
                    tabName: "Python",
                    tabContent: (
                      <p className={classes.textCenter}>
                        <br></br>
                        <Button
                        color="info"
                        size="sm"
                        href="https://www.github.com/theshanebarnett"
                        target="_blank"
                      >
                        Python
                      </Button>
                      </p>
                    )
                  },
                  {
                    tabName: "Bash",
                    tabContent: (
                      <p className={classes.textCenter}>
                        <br></br>
                        <Button
                        color="info"
                        size="sm"
                        href="https://www.github.com/theshanebarnett"
                        target="_blank"
                      >
                        Bash
                      </Button>
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
