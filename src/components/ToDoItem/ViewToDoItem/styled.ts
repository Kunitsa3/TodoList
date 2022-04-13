import { Box, FormControlLabel, styled, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

export const TaskForm = styled(FormControlLabel, {
  shouldForwardProp: propName => propName !== 'isChecked',
})<{isChecked: boolean}>(({
  isChecked,
}) => (
  {
    textDecoration: isChecked ? 'line-through' : 'none',
    '& .MuiTypography-root.MuiFormControlLabel-label': {
      fontSize: '16px',
    },
    '& .MuiCheckbox-root.Mui-checked': {
      color: '#01579b',
      fontSize: '14px',
    },
  }
));

export const TaskDetailsWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#e3f2fd',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const TaskFormWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const EditToDoItemIcon = styled(Edit)({
  color: 'lightgrey',
  marginRight: '20px',
  '&:hover': {
    color: '#01579b',
    cursor: 'pointer',
  },
});

export const CloseToDoItemIcon = styled(CloseIcon)({
  color: 'lightgrey',
  '&:hover': {
    color: '#01579b',
    cursor: 'pointer',
  },
});

export const DateInformation = styled(Typography)({
  color: '#37474f',
});
