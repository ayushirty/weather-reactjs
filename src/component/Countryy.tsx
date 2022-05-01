import {Avatar, Button, CircularProgress, Typography, Card, CardContent} from '@mui/material';
import axios from 'axios';
import {url} from 'inspector';
import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router';
import {useNavigate, useParams} from 'react-router-dom';

const Country = () => {
    const [data, setData]: any = useState<any>();
    const country: any = useLocation().state
    const navigate = useNavigate()
    const fetchdata = async () => {
        try{
            const res = await axios (`https://restcountries.com/v3.1/name/${country}`)
            setData(res.data[0])
        }
        catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        console.log(country);
        fetchdata()
        console.log(data)
    }, [country])
    
    return(
        <>
            {data ? <div style={{backgroundColor:'lightblue', height:'100vh'}}>
                <Button data-testid='back'  sx={{ m: 2 }} variant='contained' onClick={() => navigate(-1)}>Back</Button>
                <Typography sx={{ textAlign: 'center' }} variant='h4'><b>Country Details</b></Typography>

                
                <Card style={{ boxShadow: '5px 10px #888888', border: '1px solid black', width: '25rem', height: '13rem', position:'absolute' }} sx={{ p: 5, ml: 50, mr: 70, mt: 10 }}>
                    <CardContent>
                    <CardContent sx={{float:'left'}}>
                         <pre >
                                Country Name :  <b>{country}</b><br></br>
                                <br></br>
                                Capital      :  <b>{data.capital[0]}</b><br></br>
                                <br></br>
                                Population   :  <b>{data.population}</b><br></br>
                                <br></br>
                                Latitude     :  <b>{data.latlng[0]}</b><br></br>
                                <br></br>
                                Longitude    :  <b>{data.latlng[1]}</b><br></br>

                        </pre>
                            </CardContent>
                            <CardContent sx={{float:'right'}}>
                            <Avatar 
                            src={data.flags.png} variant='rounded'
                            sx={{ width: 70, height: 70 }}                
                         
                        />
                            </CardContent>
                    </CardContent>
                            
                                <Button sx={{m:0.1, ml:5.5, height:'2rem', mb:3}} data-testid='capital' title="capitalweather" variant='contained' onClick={() => navigate(`/weather/${data.capital[0]}`)}>capital Weather</Button>
                            
                        </Card>


                    </div>
                    :
                    <><CircularProgress />loading...</>
            }
                </>
                )
}

    export default Country