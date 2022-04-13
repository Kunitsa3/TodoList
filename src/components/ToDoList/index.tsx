import React, { FC } from 'react';

import { TaskInformation } from 'types';
import ToDoItem from '../ToDoItem';

interface ToDoListProps {
  tasksList: TaskInformation[];
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
}

const ToDoList: FC<ToDoListProps> = ({ tasksList, setTasksList }) => (
  <>
    {tasksList
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(taskInformation => (
        <ToDoItem
          taskInformation={taskInformation}
          setTasksList={setTasksList}
          key={taskInformation.id}
        />
      ))}
  </>
);

export default ToDoList;
