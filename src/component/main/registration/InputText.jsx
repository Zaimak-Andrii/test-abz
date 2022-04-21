import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import React from 'react';

const StyledTextField = styled(TextField, { skipSx: false })((props) => ({
  '&:not(:first-of-type)': {
    marginTop: '50px',
  },
  '& .Mui-error fieldset': {
    borderWidth: '2px',
    borderColor: '#CB3D40',
  },
  '& .MuiOutlinedInput-root': {
    width: '100%',
    height: '54px',
    fontSize: '1rem',
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.87)',

    '& fieldset': {
      borderRadius: '4px',
      borderColor: '#D0CFCF',
      color: '#7E7E7E',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      borderColor: '#D0CFCF',
    },
  },
  '& label.Mui-focused': {
    fontFamily: 'Nunito',
    color: '#7E7E7E',
  },
  '& .MuiFormHelperText-root': {
    fontFamily: 'Nunito',
    fontSize: '12px',
    lineHeight: '14px',
    marginTop: '4px',
    marginLeft: '16px',
  },
}));

const InputText = ({ reset, title, errors, ...props }) => {
  return (
    <StyledTextField label={title} variant='outlined' {...props} error={!!errors} helperText={errors?.join('\n')} />
  );
};

export default InputText;
