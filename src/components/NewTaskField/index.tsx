import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TaskInformation } from 'types';
import { createTaskInformation } from 'helpers';

import { CustomizedAddIcon, NewTaskInput, NewTaskInputWrapper } from './styled';

interface NewTaskFieldProps {
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
}

const NewTaskField: FC<NewTaskFieldProps> = ({ setTasksList }) => {
  const [newTask, setNewTask] = useState<string>('');
  const id = uuidv4();

  const onTaskInputChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = ({
    target: { value },
  }) => {
    setNewTask(value);
  };

  const onAddNewTaskClick = () => {
    setTasksList(oldTasksList => [...oldTasksList, createTaskInformation(newTask, id)]);
    setNewTask('');
  };

  const onTaskInputKeyPress: React.KeyboardEventHandler<HTMLDivElement> = ({
    key,
  }) => {
    if (key === 'Enter') {
      onAddNewTaskClick();
    }
  };

  return (
    <NewTaskInputWrapper>
      <CustomizedAddIcon
        newTask={!!newTask}
        color="primary"
        onClick={onAddNewTaskClick}
      />
      <NewTaskInput
        id="input-with-sx"
        label="Add new task"
        variant="standard"
        value={newTask}
        onKeyPress={onTaskInputKeyPress}
        onChange={onTaskInputChange}
      />
    </NewTaskInputWrapper>
  );
};

export default NewTaskField;
