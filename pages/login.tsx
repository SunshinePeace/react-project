
import { Box, CardMedia, Typography } from '@mui/material';
import { Link } from '@mui/material';
import { Button, Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import { Title } from './login.style';

const Login: React.FC = function () {

    // function 1
    // function 2 ... 
    const paperStyle = { padding: 40, height: '60vh', width: 400, margin: "auto" }
    

    return (

        <Box
            sx={{
                display: 'inline-flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-start',
                borderRadius: '15px',
                boxShadow: 10,
                m: 15,
                justifyContent: 'center',
                
                
            }}
        >

        <Box component='img' sx={{ display: 'flex', height: '60vh', alignItems: 'flex-start', borderRadius: '12px'}} alt='left' src='/90604070_p0.png' />
        <Box sx={{ display: 'flex', borderRadius: '15px'}}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid>
                            <Title> Sign In </Title>
                        </Grid>
                    <TextField variant="standard" label='Email' placeholder='Enter email address' fullWidth />
                    <Typography>
                        <TextField variant="standard" label='Password' placeholder='Enter password' type="password" fullWidth />
                        </Typography>
                    <Typography sx={{ fontSize: 16, fontFamily: 'Calibri' }} align='left'>
                        <Link href="../Components/Phase1/forgetpw">
                        Forget Password ?
                        </Link>
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontFamily: 'Calibri' }} align='left'>Do not have an account?
                        <Link href="../Components/Phase1/signup" sx={{ fontSize: 16, fontFamily: 'Calibri' }}>
                            Sign Up 
                        </Link>
                    </Typography>
                    <Button color='secondary' fullWidth> Sign In </Button>

                    </Paper>
                </Box>


        </Box>

        
    )


 


}

export default Login;


