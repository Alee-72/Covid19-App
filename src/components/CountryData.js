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

export default function ContryData() {
  const classes = useStyles();
  const [globaldata, setglobaldata] = useState([]);
  AOS.init({duration:2000});
  useEffect(() => {
      async function api() {
          let response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
          let data = await response.json();
          console.log(Object.values(Object.values(data.countryitems)[0]));
          setglobaldata((Object.values(Object.values(data.countryitems)[0])));
           
      }
      api();
  }, [])
  return (
      <center>
    <div className={classes.root}>
        <table border="1" className="sizetable"> 
            <th>Country</th>
            <th>TOTAL CASES</th>
            <th>TOTAL DEATHS</th>
       {globaldata.map((key,val)=>{
           return(
           <tr>
              <td> {globaldata[val].title} </td>
              <td> {globaldata[val].total_cases} </td>
              <td> {globaldata[val].total_deaths} </td>
            </tr>
           )
       })}
       </table>
    </div>
    </center>
  );
}