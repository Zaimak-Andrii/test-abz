import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Progress from '../../progress/progress';
import ErrorText from '../../text/errorText';

const PositionsList = ({ checkBoxValue, setCheckBoxValue }) => {
  const { positionsList, status, error } = useSelector((store) => store.positions);

  const changeCheckBoxHandler = (event) => {
    setCheckBoxValue(event.target.value);
  };

  useEffect(() => {
    if (positionsList.length > 0) setCheckBoxValue(positionsList[0].id);
  }, [positionsList, setCheckBoxValue]);

  return (
    <>
      <Typography id='checkbox-group' sx={{ marginTop: '43px' }} variant='body1' component='label'>
        Select your position
      </Typography>

      {status === 'pending' && <Progress sx={{ alignSelf: 'center', marginTop: '10px' }} />}

      {error ? (
        <ErrorText>{error?.message}</ErrorText>
      ) : (
        <RadioGroup
          aria-labelledby='checkbox-group'
          name='positions-group'
          value={checkBoxValue}
          onChange={changeCheckBoxHandler}
          sx={{
            marginTop: '11px',
          }}
        >
          {positionsList.map((position) => (
            <FormControlLabel
              key={position.id}
              value={position.id}
              control={
                <Radio
                  sx={{
                    '&.Mui-checked': {
                      color: '#00BDD3',
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 27,
                    },
                  }}
                />
              }
              label={position.name}
              sx={{
                height: '26px',
                '&.MuiFormControlLabel-root': {
                  marginBottom: '7px',
                },
              }}
            />
          ))}
        </RadioGroup>
      )}
    </>
  );
};

export default PositionsList;
