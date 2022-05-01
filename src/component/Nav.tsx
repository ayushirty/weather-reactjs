import {AppBar, Button, TextField, Toolbar, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
type Props = {
    navigate: any
}
const Nav:React.FC<Props> = ({...props}) => {
    const [input, setInput]:any = useState('');


    const handelChange = (e:any) => {
        setInput(e.target.value)
    }

    const handelSubmit = (e:any) => {
        e.preventDefault();
        setInput('');
        props.navigate('/country', {state:input})
    }

    return (
        <div>
        <AppBar position='static'>
            <Toolbar>
                
                <Typography variant='h5' sx={{flexGrow:1}}>Weather Report</Typography>
                <form action="" onSubmit={handelSubmit}>
                <input
                                    id='browsers'
                                    type="text"
                                    name='name'
                                    onChange={handelChange}
                                    value={input}
                                    placeholder="enter country name"
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = 'enter country name'}
                                    style={{ height: '2rem', margin: '10px' }}
                                />
                    <button  style={{height:'2.4rem', color:'black', marginTop: '5px' }}  disabled={!input}  type='submit'>Search</button>
                </form>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Nav