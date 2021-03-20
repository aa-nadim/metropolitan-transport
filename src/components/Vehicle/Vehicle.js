import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    width:250,
  },
}));

export default function Vehicle({ vehicle }) {
  const classes = useStyles();
  const history = useHistory();
  const handleBook = (vehicleType) => {
    history.push(`/book/${vehicleType}`);
  }
  return (
    <div onClick={() => handleBook(vehicle.vehicleType)} variant="contained">
      <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={vehicle.imgUrl}
      />
      <img src={`/images/${vehicle.vehicleType}.png`} alt="" />
      <CardContent>
        <h3 className="d-flex justify-content-center">{vehicle.name}</h3>
      </CardContent>
      </Card>
    </div>
  );
}
