import React, { FC, useState } from 'react';
import { Box } from '@mui/material';

import { TaskInformation } from 'types';
import ViewToDoItem from './ViewToDoItem';
import EditToDoItem from './EditToDoItem';

interface Props {
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
  taskInformation: TaskInformation;
}

const ToDoItem: FC<Props> = ({ setTasksList, taskInformation }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(taskInformation.task);

  const changeEditState = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Box>
      {!isEdit ? (
        <ViewToDoItem
          taskInformation={taskInformation}
          changeEditState={changeEditState}
          setTasksList={setTasksList}
        />
      ) : (
        <EditToDoItem
          editTask={editTask}
          setEditTask={setEditTask}
          setTasksList={setTasksList}
          changeEditState={changeEditState}
          id={taskInformation.id}
        />
      )}
    </Box>
  );
};

export default ToDoItem;
