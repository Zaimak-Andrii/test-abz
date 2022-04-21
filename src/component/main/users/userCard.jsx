import { Avatar, Paper } from '@mui/material';
import React from 'react';
import { ReactComponent as AvatarCover } from '../../../Assets/photo-cover.svg';
import UserCardText from './userCardText';

const UserCard = ({ name, photo, position, email, phone }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 254,
        padding: '20px',
      }}
      elevation={0}
    >
      <Avatar sx={{ width: '70px', height: '70px' }} alt={name} src={photo}>
        <AvatarCover />
      </Avatar>

      <UserCardText title={name} />
      <UserCardText title={position} />
      <UserCardText title={email} />
      <UserCardText title={phone} />
    </Paper>
  );
};

export default UserCard;
