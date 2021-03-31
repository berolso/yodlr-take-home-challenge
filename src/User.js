import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getUser } from "./api/api";
import logo from './logo.svg';

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height:'auto',
    // paddingTop: "56.25%", // 16:9
    // paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const User = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const getUserFromAPI = async () => {
      const user = await getUser(id);
      console.log(user);
      setUser(user);
    };
    getUserFromAPI();
  }, [id]);
  return (
    <Container maxWidth="xs">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {user.id}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={user.email}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          component="img"
          image={logo}
          title="image"
        />
        <CardContent>
          <Typography variant="h5" color="textSecondary" component="p">
            {user.firstName} {user.lastName}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> 
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          > 
            <ExpandMoreIcon />
          </IconButton>
        </CardActions> 
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent> 
            <Typography paragraph>Status: {user.state}</Typography>
            <Typography paragraph>Password: {user.password}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
};

export default User;
