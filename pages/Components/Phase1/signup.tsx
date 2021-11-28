import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Card, CardHeader, Grid, Paper } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControlLabel } from "@mui/material";
import { CheckBox } from "@mui/icons-material";


const signup: React.FC = function () {


    // function 1
    // function 2 ... 

    const paperStyle = { padding: 40, height: '60vh', width: 400, margin: "60px auto" }

    return (
        <Paper elevation={10} style={paperStyle}>
            <Typography sx={{ fontSize: 40, fontFamily: 'Calibri'}}  align = 'center' color="black" variant = 'h1'>
                        Register 
            </Typography>
            <Typography sx={{ fontSize: 16, fontFamily: 'Calibri' }} align ='left' color="black">
                Email Address
                <TextField placeholder="Enter Email address" variant='standard' fullWidth required />
            </Typography>
               
            <Typography sx={{ fontSize: 16, fontFamily: 'Calibri' }} align='left' color="black">
                Password
                <TextField placeholder="At least 8 characters" type="password" variant='standard' fullWidth required />
            </Typography>
           
            <Typography sx={{ fontSize: 16, fontFamily: 'Calibri' }} align='left' color="black">
                Confirm Password
             <TextField placeholder="Enter password again" type="password" variant='standard' fullWidth required />
            </Typography>

            <Typography>
                <Button color='secondary' fullWidth> Sign In </Button>
                </Typography>
    
        </Paper>



    )
}





export default signup



