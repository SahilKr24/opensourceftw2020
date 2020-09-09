/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          hoverColor="black"
          buttonText="Quick Links"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="https://iotkiit.in" className={classes.dropdownLink}>
              IOT Lab
            </Link>,
            <a
              href="https://hacktoberfest.digitalocean.com/"
              target="_blank"
              className={classes.dropdownLink}
            >
              Hacktoberfest
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://www.instagram.com/iotkiit/"
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-instagram"} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://www.facebook.com/iot.lab.kiit"
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-facebook"} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://t.me/iotkiit"
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-telegram"} />
        </Button>
      </ListItem>
    </List>
  );
}
