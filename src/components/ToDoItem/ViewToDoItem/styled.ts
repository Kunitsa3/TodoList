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
      fontSize: 12,
    },
    '& .MuiCheckbox-root.Mui-checked': {
      color: '#01579b',
    },
    '& .MuiSvgIcon-root': { fontSize: 16 },
    '@media (min-width: 768px )': {
      '& .MuiTypography-root.MuiFormControlLabel-label': {
        fontSize: 16,
      },

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
  marginRight: '10px',
  fontSize: '17px',
  '&:hover': {
    color: '#01579b',
    cursor: 'pointer',
  },
  '@media (min-width: 768px )': {
    marginRight: '20px',
    fontSize: '20px',
  },
});

export const CloseToDoItemIcon = styled(CloseIcon)({
  color: 'lightgrey',
  fontSize: '17px',
  '&:hover': {
    color: '#01579b',
    cursor: 'pointer',
  },
  '@media (min-width: 768px )': {
    fontSize: '20px',
  },
});

export const DateInformation = styled(Typography)({
  color: '#37474f',
  '&.MuiTypography-root': {
    fontSize: 10,
  },
  '@media (min-width: 768px )': {
    '&.MuiTypography-root1': {
      fontSize: 14,
    },
  },
});
