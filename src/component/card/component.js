import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
function Cards(props) {
  const [number, setNumber] = useState(0);
  const { nama, harga, jenis, image } = props;
  return (
    <Card style={{ width: 200, height: 285 }}>
      <CardMedia style={{ height: 100 }} image={image} />
      <Typography gutterBottom variant="h5" component="h1">
        {nama}
      </Typography>
      <Typography variant="h5" component="h3">
        {harga}
      </Typography>
      <Typography gutterBottom variant="h5" component="h2">
        {jenis}
      </Typography>
      <CardActions>
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
      </CardActions>
    </Card>
  );
}

export default Cards;
