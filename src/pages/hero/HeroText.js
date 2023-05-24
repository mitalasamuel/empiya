import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Box, Typography } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function HeroText() {
  const header = (
    <div>
      {`Exchange any crypto instantly.`}
    </div>)
    , content = (
      <div>
        {`Exchange Bitcoin and 500+ altcoins in a fast, simple, and secure way.`}
      </div>
    );

  return (
    <Box maxWidth={['100%', '30rem']} padding={['1rem', '1rem 12rem 0 0']}>
      <Typography variant='h4'color='#fff'>{header}</Typography>
      <Typography variant='p'>{content}</Typography>
    </Box>
  );
}