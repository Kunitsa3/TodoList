import { format } from 'date-fns';
import { TaskInformation } from 'types';

export const createTaskInformation = (task:string, id:string): TaskInformation =>
  ({ task, id, date: new Date(), isChecked: false });

export const getDate = (date:Date) => (
  format(date, 'dd-MM-yyyy HH:mm:ss')
);
