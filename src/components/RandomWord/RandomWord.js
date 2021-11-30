import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  Box, 
  Button,
  Container,
  CssBaseline,
  Typography,
  Divider,
  Card,
  CardContent
} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import words_by_category from './words_by_category.js'
import translations from './translations.js'


export default function RandomWord() {
  const theme = createTheme();
  const location = useLocation()
  const language = location.state.language || "Spanish"
  const category = location.state.category || "Animal"

  const [last_index, setLastIndex] = useState(0)
  const [base_word, setBaseWord] = useState()
  const [translation, setTranslation] = useState()


  function getRandomWord() {
    if(!category) {
      return ""
    }

    let category_words = words_by_category[category]
    if(!category_words) {
      return ""
    }

    let word = ""
    let random_int = 0
    if(category_words.length == 1) {
      word = category_words[random_int]
      setBaseWord(word)
      return ""
    }

    random_int = Math.floor(Math.random() * category_words.length)
    if(random_int == last_index) {
      random_int = Math.floor(Math.random() * category_words.length)
    }
    setLastIndex(random_int)
    word = category_words[random_int]
    setBaseWord(word)

    let language_word = translations[language][word]
    if(language_word) {
      setTranslation(language_word.word)
    } else {
      setTranslation("Word not Found")
    }
  }

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
          <Box sx={{ mt: 1 }}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {language} - {category}
                </Typography>
                <Typography variant="h5" component="div">
                  {base_word}
                </Typography>
                <Divider />
                <Typography component="h3" variant="h5">
                  {translation}
                </Typography>
              </CardContent>
            </Card>
              <Button 
                type="button"
                onClick={getRandomWord}
                fullWidth 
                variant="contained" 
                sx={{ mt: 3, mb: 2 }}>
                  Random Word
                </Button>
            </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}