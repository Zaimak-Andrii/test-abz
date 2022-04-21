import { Grid } from '@mui/material';
import React from 'react';
import UserCard from './userCard';

const UserGridItem = ({ user }) => {
  return (
    <Grid item mobile={12} tablet={6} laptop={4}>
      <UserCard {...user} />
    </Grid>
  );
};

export default UserGridItem;
