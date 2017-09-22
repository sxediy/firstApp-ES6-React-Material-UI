import React, { Component } from 'react';
import './SwitchDeleteCheckedAndUncheckAll.js';
import './SwitchSortButtons.js';


function UnChecked(event) {                                                   // Ищет все установленные флажки(галочки) и их снимает...
	
	Array.from(main.querySelectorAll('.completed')).forEach( box => {
	  box.querySelector('.checkbox').checked = false, 
	  console.log(box.querySelector('.checkbox')),
	  box.classList.remove('completed');
    }) ;

    Array.from(main.querySelectorAll('.delete')).forEach( button => {         // ...после чего включает все кнопки 'удалить'.
    	button.disabled = false;
    });
    
  SwitchDeleteCheckedAndUncheckAll(true);
  SwitchSortButtons();

    console.log('снять отмеченные') 
};

export default UnChecked;