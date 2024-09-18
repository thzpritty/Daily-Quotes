import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Fetch quote on component mount
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // Function to fetch quote from the API
  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes');
      const randomQuote = response.data.quotes[Math.floor(Math.random() * response.data.quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error('Error fetching the quote: ', error);
    }
  };

  return (
    <Card style={{ marginTop: '30px', padding: '10px' ,backgroundColor:'plum'}}>
      <CardContent>
        <Typography variant="h6" gutterBottom fontStyle='italic'>
          {quote || 'Loading...'}
        </Typography>
        <Typography variant="subtitle1" align="right" gutterBottom>
          — {author}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={fetchRandomQuote}
          style={{ marginTop: '20px' }}
        >
          New Quote
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuoteGenerator;
