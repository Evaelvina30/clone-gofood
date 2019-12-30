import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

function Cards(props) {
  const [number, setNumber] = useState(0);
  const { nama, harga, jenis, image } = props;
  return (
    <Card
      style={{ maxWidth: 448, paddingTop: '0%', backgroundColor: '#ffa000' }}>
      <CardMedia style={{ height: 200, borderRadius: 30 }} image={image} />
      <Typography gutterBottom variant="h5" component="h1">
        <center>{nama}</center>
      </Typography>
      <Typography variant="h5" component="h3">
        <center>{harga}</center>
      </Typography>
      <Typography gutterBottom variant="h5" component="h2">
        <center>{jenis}</center>
      </Typography>
      <CardActions>
        <Grid
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 110
          }}>
          <Button
            onClick={() => setNumber(number + 1)}
            style={{ backgroundColor: 'red' }}>
            +
          </Button>
          <h1>{number}</h1>
          <Button
            onClick={() => setNumber(number - 1)}
            style={{ backgroundColor: 'red' }}>
            -
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default Cards;
