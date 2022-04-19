import React, { FC, memo, useCallback } from 'react';
import { Box, Checkbox, FormGroup } from '@mui/material';

import { TaskInformation } from 'types';
import { getDate } from 'helpers';
import {
  CloseToDoItemIcon,
  DateInformation,
  EditToDoItemIcon,
  TaskDetailsWrapper,
  TaskForm,
  TaskFormWrapper,
} from './styled';

interface ViewToDoItemProps {
  taskInformation: TaskInformation;
  changeEditState: () => void;
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
}

const ViewToDoItem: FC<ViewToDoItemProps> =
 ({ changeEditState, setTasksList, taskInformation: { task, id, date, isChecked } }) => {
   const handleChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void =
    useCallback((_, checked) => {
      setTasksList(oldTasksList => oldTasksList.map(
        taskDetails => (taskDetails.id === id ? { ...taskDetails, isChecked: checked } : taskDetails),
      ));
    }, []);

   const onDeleteIconClick = () => {
     setTasksList(oldTasksList => oldTasksList.filter(taskDetails => taskDetails.id !== id));
   };

   return (
     <TaskDetailsWrapper>
       <TaskFormWrapper>
         <FormGroup>
           <TaskForm
             isChecked={isChecked}
             control={(
               <Checkbox
                 checked={isChecked}
                 onChange={handleChange}
               />
)}
             label={task}
           />
         </FormGroup>
         <Box>
           <EditToDoItemIcon onClick={changeEditState} />
           <CloseToDoItemIcon onClick={onDeleteIconClick} />
         </Box>

       </TaskFormWrapper>

       <DateInformation
         data-testid="item-date"
       >
         {getDate(date)}

       </DateInformation>
     </TaskDetailsWrapper>
   );
 };

export default memo(ViewToDoItem);
