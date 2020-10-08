import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function GlobalDataDisplay() {
  const classes = useStyles();
  const [globaldata, setglobaldata] = useState({});
  AOS.init({duration:2000});
  useEffect(() => {
      async function api() {
          let response = await fetch('https://api.thevirustracker.com/free-api?global=stats');
          let data = await response.json();
           console.log(data.results[0]);  
           delete data.results[0].source;
           delete data.results[0].total_new_cases_today;
           delete data.results[0].total_unresolved;
           delete data.results[0].total_serious_cases;
           setglobaldata(data.results[0]);
      }
      api();
  }, [])
  return (
    <div className={classes.root}>
        <center><h1>COVID-19</h1></center>
         <Grid container spacing={3} data-aos="fade-down">
        
        {Object.keys(globaldata).map((key,val)=>{
                  return(
                    <Grid item xs={4} key={val}>
                    <Paper className={classes.paper}>
                     <h4>{key.replace(/_/g," ").toUpperCase()}</h4>
                     <h4>{globaldata[key]}</h4>
                    </Paper>
                    </Grid>
                  )
              })}
      </Grid>
    </div>
  );
}
