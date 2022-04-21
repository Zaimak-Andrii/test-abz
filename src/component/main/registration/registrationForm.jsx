import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addErrors, createUser } from '../../../store/usersSlice';
import YellowButton from '../../buttons/YellowButton';
import Progress from '../../progress/progress';
import ErrorText from '../../text/errorText';
import Wrap from '../../wrap';
import FileInput from './fileInput';
import InputText from './InputText';
import PositionsList from './positionsList';
import { validateEmail, validateName, validatePhone, validatePhoto, validatePosition } from './validation';
import { ReactComponent as ImageSuccess } from '../../../Assets/success-image.svg';
import useInput from '../../../hooks/useInput';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { isCreatedSuccess, status, error } = useSelector((store) => store.users);

  const name = useInput('');
  const email = useInput('');
  const phone = useInput('');
  const [photo, setPhoto] = useState(null);
  const [checkBoxValue, setCheckBoxValue] = useState(null);

  const [isSignUp, setSignUp] = useState(false);

  const changeFileUpload = (evt) => {
    const files = evt.target.files;

    setPhoto(files.length > 0 ? files[0] : null);
  };
  // Валидация введенных полей и отправка запроса на сервер
  const signUpHandler = async (evt) => {
    evt.stopPropagation();
    evt.preventDefault();

    //Validation
    const errors = {
      fails: {
        name: validateName(name.value),
        email: validateEmail(email.value),
        phone: validatePhone(phone.value),
        position: validatePosition(checkBoxValue),
        photo: await validatePhoto(photo),
      },
    };

    const isValid = (obj) => {
      const filtered = Object.keys(obj).filter((key) => obj[key]);

      return filtered.length === 0;
    };

    if (!isValid(errors.fails)) {
      errors.message = 'Validation failed';
      dispatch(addErrors(errors));
    } else {
      // Отправка запроса на создание нового пользователя
      const formData = new FormData();
      formData.append('position_id', checkBoxValue);
      formData.append('name', name.value);
      formData.append('email', email.value);
      formData.append('phone', phone.value);
      formData.append('photo', photo);
      dispatch(createUser(formData));
    }
  };

  // Проверка на активность кнопки Sign up
  useEffect(() => {
    const prevVisible = isSignUp;
    let isVisible = true;

    if (!name.value) isVisible = false;
    if (!email.value) isVisible = false;
    if (!phone.value) isVisible = false;
    if (!photo) isVisible = false;

    if (prevVisible !== isVisible) setSignUp(isVisible);
  }, [name, phone, email, photo, isSignUp]);
  //Очистка полей при успешной регистрации
  useEffect(() => {
    if (isCreatedSuccess) {
      name.reset();
      email.reset();
      phone.reset();
    }
    // eslint-disable-next-line
  }, [isCreatedSuccess]);

  console.log('Registration render');
  return (
    <Wrap
      sx={{
        marginBottom: '100px',
      }}
    >
      <Typography id='signup' variant='h1' component='h1'>
        Working with POST request
      </Typography>

      {isCreatedSuccess ? (
        <ImageSuccess style={{ marginTop: '50px' }} />
      ) : (
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            width: { mobile: 328, tablet: 380 },
            marginTop: '50px',
          }}
        >
          <InputText name='name' title='Your name' errors={error?.fails?.name} {...name} />
          <InputText name='email' type='email' title='Email' errors={error?.fails?.email} {...email} />
          <InputText name='phone' type='tel' title='Phone' errors={error?.fails?.phone} {...phone} />

          <PositionsList checkBoxValue={checkBoxValue} setCheckBoxValue={setCheckBoxValue} />

          <FileInput name='photo' onChange={changeFileUpload} errors={error?.fails?.photo} />

          {status === 'pending' ? (
            <Progress
              sx={{
                alignSelf: 'center',
                marginTop: '50px',
              }}
            />
          ) : (
            <YellowButton
              type='submit'
              onClick={signUpHandler}
              disabled={!isSignUp}
              sx={{
                alignSelf: 'center',
                marginTop: '50px',
              }}
            >
              Sign up
            </YellowButton>
          )}

          {error && <ErrorText sx={{ alignSelf: 'center' }}>{error?.message}</ErrorText>}
        </Box>
      )}
    </Wrap>
  );
};

export default RegistrationForm;
