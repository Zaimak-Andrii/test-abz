import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Wrap from '../../wrap';
import YellowButton from '../../buttons/YellowButton';
import BackgroundImageLaptop from './../../../Assets/1170.jpg';
import BackgroundImageMobile from './../../../Assets/500.jpg';
import BackgroundImageTablet from './../../../Assets/1024.jpg';
import { jumpTo } from '../../../Tools';

const Info = () => {
  return (
    <Box
      component='div'
      className='info'
      sx={{
        color: 'white',
        minHeight: 500,
        height: { mobile: 500, tablet: 500, laptop: 650 },
      }}
    >
      <Wrap
        sx={{
          justifyContent: { mobile: 'flex-start', tablet: 'center' },
          background: {
            mobile: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundImageMobile})`,
            tablet: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundImageTablet})`,
            laptop: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundImageLaptop})`,
          },
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            maxWidth: 380,
            textAlign: 'center',
            marginTop: { mobile: '40px', tablet: 0 },
          }}
        >
          <Typography
            variant='h1'
            component='h1'
            sx={{
              WebkitTextStroke: { mobile: '1px black', tablet: 'unset' },
            }}
          >
            Test assignment for front-end developer
          </Typography>
          <Typography
            variant='body1'
            component='p'
            sx={{
              marginTop: '21px',
              marginBottom: '32px',
            }}
          >
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
            understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
            should also be excited to learn, as the world of Front-End Development keeps evolving.
          </Typography>
          <YellowButton onClick={() => jumpTo('signup')}>Sign up</YellowButton>
        </Box>
      </Wrap>
    </Box>
  );
};

export default Info;
