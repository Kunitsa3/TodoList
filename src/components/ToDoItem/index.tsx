import React, { FC, useState, useCallback, memo } from 'react';
import { Box } from '@mui/material';

import { TaskInformation } from 'types';
import ViewToDoItem from './ViewToDoItem';
import EditToDoItem from './EditToDoItem';

interface Props {
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
  taskInformation: TaskInformation;
}

const ToDoItem: FC<Props> = ({ setTasksList, taskInformation }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const changeEditState = useCallback(() => {
    setIsEdit(state => !state);
  }, []);

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
          setTasksList={setTasksList}
          changeEditState={changeEditState}
          id={taskInformation.id}
          task={taskInformation.task}
        />
      )}
    </Box>
  );
};

export default memo(ToDoItem);
