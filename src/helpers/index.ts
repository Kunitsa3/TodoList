import { format } from 'date-fns';

import { TaskInformation } from 'types';

// const id =
//   ((JSON.parse(localStorage.getItem('tasksList')) as TaskInformation[])
//     ?.reduce((max, curr) => (curr.id > max ? curr.id : max), 0) || 0) + 1;

export const createTaskInformation = (task:string, id:string): TaskInformation =>
  ({ task, id, date: new Date(), isChecked: false });

export const getDate = (date:Date) => (
  format(date, 'dd-MM-yyyy HH:mm:ss')
);
