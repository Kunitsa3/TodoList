import { CssBaseline } from '@mui/material';
import { createTaskInformation } from 'helpers';
import { useEffect, useState } from 'react';

import { TaskInformation } from 'types';
import NewTaskField from './components/NewTaskField';
import ToDoList from './components/ToDoList';
import { ToDoListWrapper } from './styled';

const App = () => {
  const [tasksInformation, setTasksInformation] = useState<TaskInformation[]>(
    (JSON.parse(localStorage.getItem('tasksList')) as TaskInformation[])
      ?.map(item => ({ ...item, date: new Date(item.date) })) || [],
  );

  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasksInformation));
  }, [tasksInformation]);

  return (
    <ToDoListWrapper>
      <CssBaseline />
      <NewTaskField setTasksList={setTasksInformation} />
      <ToDoList tasksList={tasksInformation} setTasksList={setTasksInformation} />
    </ToDoListWrapper>
  );
};

export default App;
