import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Avatar,
  Box, 
  Button,
  Container,
  CssBaseline,
  Typography,
  TextField,
  Card,
  CardContent
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';


export default function Categories() {

  const theme = createTheme();
  const location = useLocation()
  const language = location.state.language || "Spanish"
  const categories = ["Animal", "Transportation", "Location", "Clothing", "Color", "People", "Job", "Art", "Beverages", 
  "Food", "Home", "Electronics", "Body", "Nature", "Materials", "Math/Measurements", "Misc Nouns", "Directions",
  "Seasons", "Numbers", "Months", "Days of the week", "Time", "Verbs", "Adjectives", "Pronouns"]

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
            Categories
          </Typography>
          <Box component="div" noValidate sx={{ mt: 1 }}>
              {categories.map( key => (
                <Card key={key}>
                  <CardContent>
                    <Link to='/word' state={{ language: language, category: key }} >{key}</Link>
                  </CardContent>
                </Card>
              ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}