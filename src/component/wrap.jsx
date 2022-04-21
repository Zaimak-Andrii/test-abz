import styled from '@emotion/styled';
import { Container } from '@mui/material';

const StyledContainer = styled(Container, {
  skipSx: false,
})((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 1170,
  minWidth: 360,
  height: '100%',
  padding: 0,
  //border: '1px solid black',

  [props.theme.breakpoints.down('tablet')]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  [props.theme.breakpoints.up('tablet')]: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  [props.theme.breakpoints.up('laptop')]: {
    paddingLeft: 60,
    paddingRight: 60,
  },
  [props.theme.breakpoints.up('desktop')]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const Wrap = ({ children, ...props }) => {
  return (
    <StyledContainer className='wrap' {...props}>
      {children}
    </StyledContainer>
  );
};

export default Wrap;
