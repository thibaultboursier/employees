import React, { Fragment } from "react";

import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { createSlug } from "../utils/slug";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const EmployeeList = ({ employees }) => {
  const classes = useStyles();
  const isLastItem = itemIndex => itemIndex === employees.length - 1;

  return (
    <List className={classes.root}>
      {employees.map((employee, index) => (
        <Fragment key={employee.id}>
          <Link
            as={`employees/${createSlug(employee)}`}
            href={`employees/${employee.id}`}
          >
            <ListItem alignItems="flex-start" button>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={employee.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={`${employee.first_name} ${employee.last_name}`}
                secondary={employee.email}
              />
            </ListItem>
          </Link>
          {!isLastItem(index) && <Divider variant="inset" component="li" />}
        </Fragment>
      ))}
    </List>
  );
};

export default EmployeeList;
