import React, { FC } from 'react';
import { Box } from '@mui/material';

import ToDoItem from '../ToDoItem';
import { TaskInformation } from '../../types';

interface ToDoListProps {
  tasksList: TaskInformation[];
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
}

const ToDoList: FC<ToDoListProps> = ({ tasksList, setTasksList }) => (
  <>
    {tasksList
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(taskInformation => (
        <Box sx={{ display: 'flex' }} key={taskInformation.id}>
          <ToDoItem
            taskInformation={taskInformation}
            setTasksList={setTasksList}
          />
        </Box>
      ))}
  </>
);

export default ToDoList;
