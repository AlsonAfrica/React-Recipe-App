// src/components/SearchBarHome.js
import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { keyframes } from '@emotion/react';

// Define the scaling animation keyframe
const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

function SearchBarHome({ onChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, setFocused] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onChange(event.target.value); // Pass search term to parent
  };

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        width: '100%',
        maxWidth: 400,
        borderRadius: 70,
        transition: 'transform 0.3s ease',
        ...(focused && {
          animation: `${scaleUp} 0.3s ease forwards`,
        }),
      }}
    />
  );
}

export default SearchBarHome;
