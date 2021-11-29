import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Avatar,
  Box, 
  Button,
  Container,
  CssBaseline,
  Typography,
  TextField
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';


export default function Categories({setToken}) {

  const theme = createTheme();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()



  return(
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }} >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField 
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autofocus
                onChange={ (e) => setEmail(e.target.value) }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                onChange={ (e) => setPassword(e.target.value) }
              />
              <Button 
                type="submit" 
                fullWidth 
                variant="contained" 
                sx={{ mt: 3, mb: 2 }}>
                  Login
                </Button>
            </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}