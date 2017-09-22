import React, { Component } from 'react';
//import SwitchSortButtons from  './SwitchSortButtons.js';
//import SwitchDeleteCheckedAndUncheckAll from './SwitchDeleteCheckedAndUncheckAll.js';

function ToggleItem(){                                                       // Изменяет стиль при выборе/снятии чекбокса вешанием/снятием класса в CSS.
    const listItem = this.parentNode;
                           
    listItem.classList.toggle('completed');
    const isCompleted = listItem.parentNode.querySelector('.completed'); 
    const deleteButtons = listItem.parentNode.querySelectorAll('.delete');     // Все кнопки 'удалить'.
     
       
  if(isCompleted) {                                                          // если хотя бы один флажок активен
        
              [].forEach.call(deleteButtons, button => button.disabled = true);   // /Все кнопки 'удалить' отключаются.
          
            //SwitchDeleteCheckedAndUncheckAll(false);                            // Кнопки 'удалить отмеченные' и 'снять все галочки' появляются и становятся активными.
            //SwitchSortButtons(true);                                            // Кнопки сортировки отключаются  и становятся невидимыми.
               
           } else {                                                               // Когда нет ни одного флажка.
      
           [].forEach.call(deleteButtons, button => button.disabled = false);   // /Все кнопки 'удалить' включются.
              
           //  SwitchSortButtons();                                               // Кнопки сортировки вкключаются  и становятся видимыми.
             //SwitchDeleteCheckedAndUncheckAll(true); 	                       // Кнопки 'удалить отмеченные' и 'снять все галочки' исчезают и выключаются. 	    
           };    		
};

export default ToggleItem;