import { Box, styled, TextField } from '@mui/material';

export const EditTaskFieldWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#e3f2fd',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const EditTaskInput = styled(TextField)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#e3f2fd',
  '& .MuiFilledInput-root': { backgroundColor: '#e3f2fd' },
  '& .MuiFilledInput-root:hover': { backgroundColor: '#e3f2fd' },
  '& .MuiFilledInput-root:focus': { backgroundColor: '#e3f2fd' },
});

export const EditButtonsWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '15px',

});
