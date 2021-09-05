import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const WhiteTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={"images/services/" + props.img}
          title={props.title}
        />
        <CardContent style={{ height: "175px" }}>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            style={{ textAlign: "center" }}
          >
            {props.title}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="h4">
            {props.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }} className="services">
        <a
          href={
            "https://wa.me/message/DMGOJKK3EHSBD1?text=Hi,%20I%20am%20interested%20in%20" +
            props.title
          }
          target="_blank"
        >
          <Button size="large" color="primary" fullWidth>
            <WhiteTypography variant="h5" color="textPrimary" component="h4">
              Get In Touch
            </WhiteTypography>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
