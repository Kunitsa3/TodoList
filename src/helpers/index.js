let id = 0;

const createTaskInformation = task => ({ task, id: id++, date: new Date() });

export default createTaskInformation;
