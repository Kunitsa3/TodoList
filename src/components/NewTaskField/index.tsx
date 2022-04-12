import React, { FC, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box, TextField } from '@mui/material';

interface TaskInformation {
  task: string;
  date: Date;
}

interface NewTaskFieldProps {
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
}

const NewTaskField: FC<NewTaskFieldProps> = ({ setTasksList }) => {
  const [newTask, setNewTask] = useState('');

  const onTaskInputChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = e => {
    setNewTask(e.target.value);
  };

  const onAddNewTaskClick = () => {
    setTasksList(oldTasksList => [...oldTasksList, { task: newTask, date: new Date() }]);
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
