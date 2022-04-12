import { Edit } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';

import React, { FC, useState } from 'react';

interface TaskInformation {
  task: string;
  date: Date;
}

interface Props {
  label: string;
  date: Date;
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
  index: number;
}

const ToDoItem: FC<Props> = ({ label, setTasksList, index, date }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(label);

  console.log(date);

  const changeEditState = () => {
    setIsEdit(!isEdit);
  };

  const onEditTaskChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = e => {
    setEditTask(e.target.value);
  };

  const onSaveButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTasksList(oldTasksList =>
      oldTasksList.map((element, currentElementIndex) =>
        currentElementIndex === index ? { task: editTask, date: new Date() } : element,
      ),
    );
    setIsEdit(!isEdit);
  };

  const onDeleteIconClick = () => {
    setTasksList(oldTasksList => oldTasksList.filter((element, currentElementIndex) => currentElementIndex !== index));
  };

  return (
    <Box>
      {!isEdit ? (
        <Box>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={label}
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
      ) : (
        <Box>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            size="small"
            value={editTask}
            onChange={onEditTaskChange}
          />
          <button type="button" onClick={onSaveButtonClick}>
            Save
          </button>
          <button type="button" onClick={changeEditState}>
            Delete
          </button>
        </Box>
      )}
    </Box>
  );
};

export default ToDoItem;
