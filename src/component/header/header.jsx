import { Box } from '@mui/system';
import React from 'react';
import { jumpTo } from '../../Tools';
import YellowButton from '../buttons/YellowButton';
import Wrap from '../wrap';
import { ReactComponent as Logo } from './../../Assets/Logo.svg';
import './style.scss';

const Header = () => {
  return (
    <Box component='header' className='header'>
      <Wrap>
        <Logo className='logo' />
        <Box component='nav'>
          <YellowButton onClick={() => jumpTo('users')}>Users</YellowButton>
          <YellowButton onClick={() => jumpTo('signup')}>Sign up</YellowButton>
        </Box>
      </Wrap>
    </Box>
  );
};

export default Header;
