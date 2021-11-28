import { Link } from '@mui/icons-material';
import { Box, CardMedia, Typography } from '@mui/material';
import { Button, Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import { Title } from './login.style';
import Image from './image/90604070_p0.png';

const Login: React.FC = function () {

    // function 1
    // function 2 ... 
    const paperStyle = { padding: 40, height: '70vh', width: 500, margin: "60px auto"}
    

    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                bgcolor: 'background.paper',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
                
            }}
        >

                <Box component='img' sx={{ display: 'flex', height: '70vh' }} alt='left' src='/90604070_p0.png' />
                <Box sx={{ display: 'flex'}}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid>
                            <Title> Sign In </Title>
                        </Grid>
                        <TextField variant="standard" label='Email' placeholder='Enter email address' fullWidth />
                        <TextField variant="standard" label='Password' placeholder='Enter password' type="password" fullWidth />
                        <Button type='submit' color='secondary' fullWidth> Sign In </Button>
                    </Paper>
                </Box>


        </Box>


        
    )


 


}

export default Login;


