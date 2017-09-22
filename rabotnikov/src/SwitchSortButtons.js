import React, { Component } from 'react';

function SwitchSortButtons(force) {                                           // Включает/выключает кнопки сортировки и регулирует их прозрачность...
    
    if(force) {
           buttonForNames.disabled = true;                                        // ...по алфавиту, ...
              buttonForAges.disabled = true;                                         // ...по имени.
              sortButtons.classList.add('hideSortButtons');                          // Прозрачность.
              
           } else if(array.length >= 2){                                             // Если в массиве, а значит и в DOM, элементов <2 , то нет смысла активизировать кнопки сортировки.
               buttonForNames.disabled = false;
               buttonForAges.disabled = false;
               sortButtons.classList.remove('hideSortButtons');
           } else switchSortButtons(true);
             
    };

    export default SwitchSortButtons;