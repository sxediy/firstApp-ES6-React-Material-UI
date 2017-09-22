import React, { Component } from 'react';
import SwitchDeleteCheckedAndUncheckAll from './SwitchDeleteCheckedAndUncheckAll.js';
import SwitchSortButtons from './SwitchSortButtons.js';



function DeleteChecked(event) {                                          // Удаление отмеченных пользователей.   
    const userItems = document.querySelectorAll('.user-item');
        event.preventDefault();
        const deleteButtons = document.querySelectorAll('.delete');          // Все кнопки 'удалить'.
        [].forEach.call(deleteButtons, button => button.disabled = false);   // Отключение.
    
            
       console.log('удалить отмеченные')
    
    
        let i = 0;
    
        for (key of Object.keys(userItems) ) {                     // Удаление объектов данных пользователей, выделенных флажками, из массива... 
            if (userItems[key].firstChild.checked === true) {
                 
                 array.splice(key-i,1);
                 console.log(`удалились индексы:  ${key}`);
                userList.removeChild(userItems[key]) ;             // ...и из DOM.
                i++;
            }
          };
    
      SwitchDeleteCheckedAndUncheckAll(true);                      // 'Удалить отмеченные' и 'снять все галочки' активны.
      SwitchSortButtons();                                         // Становятся доступными клавиши сортировки, если количество пользователей от двух.
    
      console.log( array );
    
    };

    export default DeleteChecked;