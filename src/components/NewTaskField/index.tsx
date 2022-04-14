import React, { FC, useState } from 'react';

import { TaskInformation } from 'types';
import { createTaskInformation } from 'helpers';

import { CustomizedAddIcon, NewTaskInput, NewTaskInputWrapper } from './styled';

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
        newTask={newTask}
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
