import React from 'react';
import AppBarr from '../../component/appbar';
import Container from '@material-ui/core/Container';
import CardJenis from '../../component/card-jenis';
import CardFast from '../../component/card-fastfood';

function Home() {
  return (
    <Container maxWidth="xs">
      <AppBarr title="Selamat Datang" />
      <CardJenis />
      <CardFast />
    </Container>
  );
}

export default Home;
