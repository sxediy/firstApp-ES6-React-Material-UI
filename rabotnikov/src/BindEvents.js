import React, { Component } from 'react';
import ToggleItem from './ToggleItem.js';
import EditItem1 from './EditItem1.js';
import EditItem2 from './EditItem2.js';
import DeleteItem from './DeleteItem.js';


function BindEvents(item,checkbox, editButton1, editButton2, deleteButton, userList) {                                                    // Подписка на события.
	
	/*checkbox[0].addEventListener('change', ToggleItem);
	editButton1[0].addEventListener('click', EditItem1);
	editButton2[0].addEventListener('click', EditItem2);
	deleteButton[0].addEventListener('click', DeleteItem);*/
	console.log(checkbox)
}


export default BindEvents;