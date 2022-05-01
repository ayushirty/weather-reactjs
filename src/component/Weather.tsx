import { Avatar, Button, Card, CardContent, CardHeader, Grid, Table, TableCell, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Weather = () => {
    const [data, setData]:any = useState<any>();
const {capital} = useParams()

const navigate = useNavigate();

const fetchData = async()=>{
    try{
        const res = await axios(`http://api.weatherstack.com/current?access_key=0ebfee98f66bb85c782928ce2ebec08a&query=${capital}`)
        console.log(res);
        setData(res.data.current)
    }
    catch(e){
        console.log(e);
    }
}

useEffect(()=>{
    
    console.log(capital);
    fetchData()
    console.log(data)
},[capital])
  return (
    <div>
        <Button sx={{m:2}} variant='contained' onClick={() => navigate(-1)}>Back</Button>
        {data && 
        <Card sx={{width:'30vw',borderRadius:'10px', ml:'35vw',mt:5,boxShadow:'8px 10px black', p:2, backgroundColor:'lightyellow'}}>
            
                <Typography sx={{textAlign:'center', m:2}} variant='h5'>Weather Report</Typography>
            
            <CardContent>
               <Grid sx={{float:'left'}}>
               <Typography>
                    Capital City : {capital}
                </Typography>
                <Typography>
                    Temparature : {data.temperature}<sup>0</sup> Celcius
                </Typography>
                <Typography>
                    Wind Speed : {data.Wind_speed} km/hr
                </Typography>
                <Typography>
                    Precip : {data.precip} 
                </Typography>
               </Grid>
               <Grid sx={{float:'right'}}>
                   <Avatar sx={{mr:5, width:'5rem',height:'5rem'}} variant='rounded' src={data.weather_icons[0]}/>
               </Grid>
            </CardContent>
        </Card>
        } 
    </div>
  )
}

export default Weather