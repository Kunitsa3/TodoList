import React, { FC, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, TextField } from '@mui/material';

import { TaskInformation } from '../../types';
import createTaskInformation from '../../helpers';

interface NewTaskFieldProps {
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
}

const NewTaskField: FC<NewTaskFieldProps> = ({ setTasksList }) => {
  const [newTask, setNewTask] = useState<string>('');

  const onTaskInputChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = ({
    target: { value },
  }) => {
    setNewTask(value);
  };

  const onAddNewTaskClick = () => {
    setTasksList(oldTasksList => [...oldTasksList, createTaskInformation(newTask)]);
    setNewTask('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <AddIcon
        color="primary"
        sx={newTask ? { visibility: 'visible' } : { visibility: 'hidden' }}
        onClick={onAddNewTaskClick}
      />
      <TextField
        id="input-with-sx"
        label="Add new task"
        variant="standard"
        value={newTask}
        onChange={onTaskInputChange}
      />
    </Box>
  );
};

export default NewTaskField;
