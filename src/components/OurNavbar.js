import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AOS from 'aos';
import 'aos/dist/aos.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function OurNavbar() {
  const classes = useStyles();
  AOS.init({duration:2000});
  return (
  
    <div className={classes.root} data-aos="slide-down">

      <AppBar position="static">
        <Toolbar variant="dense">
         <Typography  variant="h3" color="inherit" text-align= "center">
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     &nbsp; &nbsp;  &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            COVID-19 TRACKER
          </Typography> 
        </Toolbar>
      </AppBar>
    </div> 
  );
}
