import { TaskInformation } from 'types';

let id =
  (JSON.parse(localStorage.getItem('tasksList')) as TaskInformation[]).reduce((max, curr) => (curr.id > max ? curr.id : max), 0) + 1 || 0;

export const createTaskInformation = (task:string): TaskInformation => ({ task, id: id++, date: new Date() });

const appendZeroSymbol = (num:number) => (num < 10 ? `0${num}` : num);

export const getDate = (date:Date) => (
  `${
    appendZeroSymbol(date.getDay())
  }-${
    appendZeroSymbol(date.getMonth())
  }-${
    date.getFullYear()
  } ${
    appendZeroSymbol(date.getHours())
  }:${
    appendZeroSymbol(date.getMinutes())
  }`
);
