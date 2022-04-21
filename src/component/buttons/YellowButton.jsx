import styled from '@emotion/styled';
import { Button } from '@mui/material';

const StyledButton = styled(Button, { skipSx: false })({
  width: 100,
  height: 34,
  borderRadius: 80,
  padding: 0,
  '&:hover': {
    backgroundColor: '#FFE302',
  },
  '&:disabled': {
    backgroundColor: '#B4B4B4',
    color: 'rgba(255, 255, 255, 0.87)',
  },
});

const YellowButton = ({ children, ...props }) => {
  return (
    <StyledButton variant='contained' disableElevation {...props}>
      {children}
    </StyledButton>
  );
};

export default YellowButton;
