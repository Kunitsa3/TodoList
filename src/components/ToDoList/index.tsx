import React, { FC } from 'react';
import { Box } from '@mui/material';
import ToDoItem from '../ToDoItem';

interface TaskInformation {
  task: string;
  date: Date;
}

interface ToDoListProps {
  tasksList: TaskInformation[];
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
}

const ToDoList: FC<ToDoListProps> = ({ tasksList, setTasksList }) => (
  <>
    {tasksList.map((taskInformation, index) => (
      <Box sx={{ display: 'flex' }} key={index}>
        <ToDoItem label={taskInformation.task} setTasksList={setTasksList} index={index} date={taskInformation.date} />
      </Box>
    ))}
  </>
);

export default ToDoList;
