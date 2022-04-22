import { Box, styled } from '@mui/material';

export const ToDoListWrapper = styled(Box)({
  margin: '70px auto 0 auto',
  width: '90vw',
  height: '90vh',
  borderRadius: '8px',
  padding: '40px',
  '@media (min-width: 1024px )': {
    width: '60vw',
    height: '70vh',
  },
});
