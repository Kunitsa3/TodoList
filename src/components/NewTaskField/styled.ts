import { Box, styled, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const NewTaskInputWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: '30px',
});

export const CustomizedAddIcon = styled(AddIcon, {
  shouldForwardProp: propName => propName !== 'newTask',
})<{newTask: string}>(({
  newTask,
}) => (
  {
    visibility: newTask ? 'visible' : 'hidden',
    margin: '0 20px 8px 0',
  }
));

export const NewTaskInput = styled(TextField)({
  width: '90%',
  margin: '2  0px 0 40px 0',
  '& .MuiInputLabel-formControl': {
    fontSize: '25px',
    color: '#1565c0',
  },
  '& .MuiFormLabel-root.Mui-focused, & .MuiFormLabel-root.MuiFormLabel-filled': {
    fontSize: '15px',
    color: '#607d8b',
  },
  '& .MuiFormLabel-root': {
    fontSize: '17px',
    color: '#1565c0',
  },
  '& .MuiInput-input': {
    height: '30px',
    color: '#01579b',
    fontWeight: 500,
    fontSize: '15px',
  },
  '@media (min-width: 768px )': {
    '& .MuiFormLabel-root': {
      fontSize: '25px',
    },
  },
});
