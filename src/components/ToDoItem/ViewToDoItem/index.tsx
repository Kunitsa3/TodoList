import React, { FC } from 'react';
import { Edit } from '@mui/icons-material';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { TaskInformation } from '../../../types';

interface ViewToDoItemProps {
  taskInformation: TaskInformation;
  changeEditState: () => void;
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
}

const ViewToDoItem: FC<ViewToDoItemProps> = ({ changeEditState, setTasksList, taskInformation: { task, id, date } }) => {
  const onDeleteIconClick = () => {
    setTasksList(oldTasksList => oldTasksList.filter(taskDetails => taskDetails.id !== id));
  };

  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={task}
          sx={{
            color: 'dark blue',
            '& .MuiFormControlLabel-label': { fontSize: '40px' },
            '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked': { color: 'green' },
          }}
        />
      </FormGroup>
      <Edit onClick={changeEditState} />
      <CloseIcon onClick={onDeleteIconClick} />
      <p>{date.toString()}</p>
    </Box>
  );
};

export default ViewToDoItem;
