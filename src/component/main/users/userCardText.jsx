import styled from '@emotion/styled';
import { Tooltip, tooltipClasses, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const StyledTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
    height: '32px',
    margin: 'auto 0',
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    color: 'white',
    fontFamily: 'Nunito',
    fontSize: '16px',
    lineHeight: '24px',
    padding: '3px 16px',
    borderRadius: '4px',
  },
});

const UserCardText = ({ title, ...props }) => {
  const target = useRef(null);
  const [isEllipsis, setIsEllipsis] = useState(false);

  useEffect(() => {
    const el = target.current;
    setIsEllipsis(el.offsetWidth < el.scrollWidth);
  }, [title]);

  return (
    <StyledTooltip title={isEllipsis ? title : ''}>
      <Typography
        ref={target}
        component='p'
        noWrap
        {...props}
        sx={{
          width: '100%',
          cursor: isEllipsis ? 'pointer' : 'inherit',
          textAlign: 'center',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          '&:nth-of-type(1)': {
            margin: '20px auto',
          },
        }}
      >
        {title}
      </Typography>
    </StyledTooltip>
  );
};

export default UserCardText;
