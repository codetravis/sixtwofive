import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Card,
  CardContent,
  Box, 
  Button,
  Container,
  CssBaseline,
  Typography,
  TextField
} from '@mui/material';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';


export default function Home() {

  const theme = createTheme();
  const languages = ["Spanish"]

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
          <Typography component="h1" variant="h5">
            Six Two Five
          </Typography>
          <Box component="div" noValidate sx={{ mt: 1 }}>
          {languages.map( key => (
                <Card key={key}>
                  <CardContent>
                    <Link to='/categories' state={{ language: key }} >{key}</Link>
                  </CardContent>
                </Card>
              ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}