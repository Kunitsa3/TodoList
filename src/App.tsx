import { useEffect, useState } from 'react';

import NewTaskField from './components/NewTaskField';
import ToDoList from './components/ToDoList';
import { TaskInformation } from './types';

const App = () => {
  const [tasksInformation, setTasksInformation] = useState<TaskInformation[]>(
    JSON.parse(localStorage.getItem('tasksList')) || [],
  );

  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasksInformation));
  }, [tasksInformation]);

  return (
    <>
      <NewTaskField setTasksList={setTasksInformation} />
      <ToDoList tasksList={tasksInformation} setTasksList={setTasksInformation} />
    </>
  );
};

export default App;
