import React, { Component } from 'react';

function SortDirection(button, hidden) {        // Изменяет направление сортировки с помощью присвоения одного и удаления другого класса.
    if(hidden) {                             // Когда добавляется новый пользователь или редактируются данные в списке - индификатор сортировки(треугольник) исчезает.
        button.classList.remove('decreaseSort');
        button.classList.remove('increaseSort');
        return;
    }
   if (button.className === 'decreaseSort' || !(button.className === 'decreaseSort' || button.className === 'increaseSort')) {
       button.classList.remove('decreaseSort');
       button.classList.add('increaseSort');
   } else if (button.className === 'increaseSort') {
       button.classList.remove('increaseSort');
       button.classList.add('decreaseSort');
   }
};

export default SortDirection;