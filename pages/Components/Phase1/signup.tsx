import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Card, CardHeader, Grid, Link, Paper } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";


const signup: React.FC = function () {

    //const history = useNavigate();

    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmpw, setConfirmPw] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [submit, setsubmitting] = useState<boolean>(false);


    const signUpWithEmailAndPassword = () => {
        if (error !== '') setError('');

        setRegistering(true);



    }
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
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email address" variant='standard' fullWidth required />
            </Typography>
               
            <Typography sx={{ fontSize: 16, fontFamily: 'Calibri' }} align='left' color="black">
                Password
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" type="password" variant='standard' fullWidth required />
            </Typography>
           
            <Typography sx={{ fontSize: 16, fontFamily: 'Calibri' }} align='left' color="black">
                Confirm Password
                <TextField value={confirmpw} onChange={(e) => setConfirmPw(e.target.value)} placeholder="Enter password again" type="password" variant='standard' fullWidth required />
            </Typography>

            <Typography>
                <Button type = 'submit' color='secondary' fullWidth> Sign Up </Button>
            </Typography>
            <div>
            <Typography sx={{ fontSize: 10, fontFamily: 'Calibri', maxWidth: "500px"}} align='center' color="grey" >
                    Already have account?
                    <Link href="../../login" sx={{ fontSize: 10, fontFamily: 'Calibri' }}>
                        Sign Up
                    </Link>
            </Typography>
            </div>
    
        </Paper>



    )
}





export default signup



