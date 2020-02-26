import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Small from "components/Typography/Small.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
    
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2 align="center">Bio
          <Small>I am a technology enthusiast and author with a multitude of interests, 
          including cryptocurrency investing, robotics, and Internet culture. 
          I am currently a senior at  the University of Texas at San Antonio, 
          where I am finishing my degree while working on publishing my first book "Life is but a Meme."
          </Small>
          </h2>
        </div>
        <div id="buttons">
          
          <GridContainer justify="left">
            <GridItem xs={12} sm={12} md={8}>
            <Button color="info" size="lg" round> Resume
            </Button>
            <Button justify="right" color="info" size="lg" round> LinkedIn
            </Button>
            </GridItem>
          </GridContainer>

        </div>
      </div>
    </div>
  );
}