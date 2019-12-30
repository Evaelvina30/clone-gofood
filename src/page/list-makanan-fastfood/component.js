import React from 'react';
import Card from '../../component/card';
import Data from '../../data/data-dummy';
import AppBar from '../../component/appbar';
import Container from '@material-ui/core/Container';

function ListMakananFastfood(props) {
  const {} = props;
  return (
    <React.Fragment>
      <AppBar go back title="Menu Fast Food" />
      {Data.map(item => {
        if (item.jenis == 'Fast Food')
          return (
            <Container maxWidth="xs">
              <Card
                nama={item.nama}
                harga={item.harga}
                jenis={item.jenis}
                image={item.image}
              />
            </Container>
          );
      })}
    </React.Fragment>
  );
}

export default ListMakananFastfood;
