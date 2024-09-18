
import React from 'react';
import { Container, Typography } from '@mui/material';
import QuoteGenerator from './components/QuoteGenerator';


function App() {
  return (
    <>
    
    <Container maxWidth="sm"  style={{ marginTop: '60px' }}>
      <Typography variant="h4" align="center" gutterBottom color='purple' >
        <strong>Daily Quotes &#x2600; </strong> 
      </Typography>
      
      <QuoteGenerator />
    </Container>
    </>
  );
}

export default App;
