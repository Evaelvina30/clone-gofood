import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

function CardJenis(props) {
  return (
    <React.Fragment>
      <Card
        onClick={() => props.history.push('list-makanan')}
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
          image="https://gedeinperut.files.wordpress.com/2018/02/b392d63c-0a4d-443c-8323-adad542a536f.jpg?w=640"
        />
        <Typography>Indonesian Food</Typography>
      </Card>
    </React.Fragment>
  );
}

export default withRouter(CardJenis);
