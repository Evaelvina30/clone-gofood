import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

function CardFast(props) {
  return (
    <React.Fragment>
      <Card
        onClick={() => props.history.push('/list-makanan-fastfood')}
        padding="top"
        style={{
          maxWidth: 448,
          height: 270,
          padding: 30,
          backgroundColor: '#ffa000',
          borderRadius: '10%'
        }}>
        <CardMedia
          style={{ height: 250 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobsar4Gv30ABGMIXAGvTiV6vnwlg7l02tWbBnPSVfUswEU5RAYg&s"
        />
        <Typography>Fast Food</Typography>
      </Card>
    </React.Fragment>
  );
}

export default withRouter(CardFast);
