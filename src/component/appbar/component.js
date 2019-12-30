import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Gambar from '../../assets/png/back.png';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
function AppBarr(props) {
  const { title } = props;
  const { classes } = props;
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center">
        <AppBar className={classes.Appbar}>
          <Toolbar>
            {props.back && (
              <IconButton
                onClick={() => {
                  props.history.push('/');
                }}>
                <img src={Gambar} style={{ width: 20 }} />
              </IconButton>
            )}
            <Typography>{title}</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

export default withRouter(AppBarr);
