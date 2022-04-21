import { CircularProgress } from '@mui/material';
import React from 'react';

const Progress = ({ ...props }) => {
  return <CircularProgress disableShrink color='secondary' {...props} />;
};

export default Progress;
