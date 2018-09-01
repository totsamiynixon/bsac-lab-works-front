import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default class Subjects extends React.Component {
  render() {
    return (
      <div style={{ margin: "20px" }}>
        <Card md={this.props.mediumScr} xs={this.props.smallScr}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {this.props.name}
              </Typography>
              <Typography component="p">{this.props.description}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={"/subjects/" + this.props.id + "/labs"}
            >
              Перейти
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
