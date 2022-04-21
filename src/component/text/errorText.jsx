import { Typography } from '@mui/material';
import React from 'react';

const ErrorText = ({ children, sx, ...props }) => {
  return (
    <Typography
      variant='error'
      component='p'
      sx={{
        margin: '10px 0',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default ErrorText;
