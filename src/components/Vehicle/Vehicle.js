import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import WcIcon from '@material-ui/icons/Wc';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
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
  const history = useHistory()
  const handleBook = (vehicleType) => {
    history.push(`/book/${vehicleType}`);
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={vehicle.imgUrl}
      />
      <img src={`/images/${vehicle.vehicleType}.png`} alt="" />
      <CardContent>
        <h5>vehicle</h5>
      </CardContent>
    </Card>
  );
}
