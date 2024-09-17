import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBarHome = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);  
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', }}>
      <TextField 
        label="Search for meals" 
        variant="outlined" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSearch} variant="outlined" color="primary" sx={{ mt: 2 }}>
        Search
      </Button>
    </div>
  );
};

export default SearchBarHome;
