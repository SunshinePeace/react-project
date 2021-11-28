import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Card, Grid } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





export default function signup() {

    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmpw, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');


    }
    




    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Register Page
            </Typography>

                <Typography>
                <TextField
                    required
                    id="standard-password-input"
                    label="UserName"
                    autoComplete="current-password"
                    variant="standard"
                    />
                </Typography>

                <Typography>
                <TextField
                    required
                    id="standard-password-input"
                    label="Email Address"
                    type="text"
                    autoComplete="current-password"
                    variant="standard"
                />
                    </Typography>
                <Typography>
                <TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                </Typography>
                </CardContent>
            <CardActions>
            <Button>Sign Up</Button>
            <span>Already have an account? Login <a href="#">here</a>
                    </span>
                </CardActions>
        </Card>

    );
};




