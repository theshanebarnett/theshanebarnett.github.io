/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        
        <Tooltip
          id="instagram-twitter"
          title="Follow me on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/theshanebarnett"
            target="_blank"
            color="info"
            className={
              classes.navLink + " " + classes.socialIconsButton
            }
          >
            <i
              className={
                classes.socialIcons +
                " " +
                classes.marginRight5 +
                " fab fa-twitter"
              }
            />{" "}
            Twitter
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
          
        >
          <Button
            color="info"
            href="https://www.instagram.com/theshanebarnett"
            target="_blank"
            className={
              classes.navLink + " " + classes.socialIconsButton
            }
          >
            <i
              className={
                classes.socialIcons +
                " " +
                classes.marginRight5 +
                " fab fa-instagram"
              }
            />{" "}
            Instagram
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
