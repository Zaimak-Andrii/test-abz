import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMoreUsers } from '../../../store/usersSlice';
import YellowButton from '../../buttons/YellowButton';
import Progress from '../../progress/progress';
import Wrap from '../../wrap';
import UserGridItem from './userGridItem';

const UsersList = () => {
  const { usersList, totalUsers, status } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  return (
    <Wrap sx={{ marginTop: '140px', marginBottom: '140px' }}>
      <Typography id='users' variant='h1' component='h1'>
        Working with GET request
      </Typography>
      <Grid
        container
        rowSpacing={{ mobile: 2.5, tablet: 2, laptop: 3.625 }}
        columnSpacing={{ mobile: 0, tablet: 2, laptop: 3.625 }}
        sx={{
          padding: '50px 0px',
        }}
      >
        {usersList.map((user) => (
          <UserGridItem key={user.id} user={user} />
        ))}
      </Grid>
      {status === 'pending' ? (
        <Progress />
      ) : (
        usersList.length < totalUsers && (
          <YellowButton
            sx={{
              minWidth: '120px',
            }}
            onClick={() => dispatch(showMoreUsers())}
          >
            Show more
          </YellowButton>
        )
      )}
    </Wrap>
  );
};

export default UsersList;
