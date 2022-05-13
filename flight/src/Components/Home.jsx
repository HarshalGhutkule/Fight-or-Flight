import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from "react";
import axios from 'axios';

export const Home = () => {
  const [flight,setFlight] = useState([]);

  const Main = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 2%;
    background-color: #144072;
    & .btn {
      border-radius: 10px;
      background-color: white;
      color: #144072;
    }
    & .btn:hover {
      background-color: #144072;
      color: white;
    }
    & input {
      background-color: white;
      color: white;
      border-radius: 5px;
    }
    & input[type="date"] {
      color: black;
    }
  `;

  const SubMain = styled.div`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    & > div>div{
      width:15%;
    }
  `;

  useEffect(()=>{
    //getFlight();
  },[])

  const getFlight = ()=>{
    axios.get('https://app.goflightlabs.com/flights?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDE1MTNhNjczNzVhYjIyNDU4YzMxZjkyMjM2Mjc5MzQ0MjNhN2Y5YTZmNTFmODY3MGJlNTAwOTg0NGUzMjBiZjI1YmRlNjE4YmEzMmY4ZDYiLCJpYXQiOjE2NTIyMTA0MzUsIm5iZiI6MTY1MjIxMDQzNSwiZXhwIjoxNjgzNzQ2NDM0LCJzdWIiOiI0Mjk0Iiwic2NvcGVzIjpbXX0.mMHLpEmemmAlUB9mavYajijxepWajXGBwmm1jH1ISgxURJ83nSOVQrc_ctBazkZVumKNixsDCaN-GfPU03sfew').then((res)=>{
      setFlight(res.data);
    }).catch((err)=>{
      alert(err);
    })
  }

  return (
    <div>
      <Main>
        <TextField id="outlined-basic" label="From" variant="outlined" />
        <TextField id="outlined-basic" label="To" variant="outlined" />
        <TextField type={"date"} id="outlined-basic" variant="outlined" />
        <Button className="btn" variant="contained">
          SEARCH
        </Button>
      </Main>
      {flight && flight.map((el)=>(

        <SubMain>
        <Grid container justifyContent={'space-evenly'}>
          <Grid item>
            <Tooltip>
              <p>{el.airline.name}</p>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip>
              <p>{el.arrival.airport}</p>
            </Tooltip>
          </Grid>
          <Grid item sx={{width:'10%',margin:'2%'}}>
            <Tooltip>
              <LinearProgress />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip>
              <p>{el.departure.airport}</p>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip>
              <p>₹ {Math.floor(Math.random() * (12000 -2500) + 2500)}</p>
            </Tooltip>
          </Grid>
        </Grid>
        </SubMain>

      ))}
      
    </div>
  );
};
