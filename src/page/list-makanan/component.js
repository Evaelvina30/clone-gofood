import React from 'react';
import Card from '../../component/card';
import Data from '../../data/data-dummy';
function ListMakanan() {
  return (
    <React.Fragment>
      {Data.map(item => {
        return (
          <Card
            nama={item.nama}
            harga={item.harga}
            jenis={item.jenis}
            image={item.image}
          />
        );
      })}
    </React.Fragment>
  );
}

export default ListMakanan;
