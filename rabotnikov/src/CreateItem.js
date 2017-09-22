import React, { Component } from 'react';
import CreateElement from './CreateElement.js';
import BindEvents from './BindEvents.js';

function CreateItem(title1, title2, title3,userList) {                                   // Передача данных пользователя методу React.createElement.
	
	const checkbox = CreateElement('input', {type:'checkbox', className:'checkbox', id:'stylecheckbox'});

	const label1 = CreateElement('label', {className:'title1'}, title1 );
	const label2 = CreateElement('label', {className:'title2'}, title2 + " " + title3 );

	const editInput1 = CreateElement('input', {type:'text', className:'textfield1'} );
	const editInput2 = CreateElement('input', {type:'number', className:'textfield2'} );

    const editButton1 = CreateElement('button', {className:'edit'}, 'Изменить Имя');
	const editButton2 = CreateElement('button', {className:'edit'}, 'Изменить Возраст');
	const deleteButton = CreateElement('button', {className:'delete'}, 'Удалить');
	
	const listItem = CreateElement('li', {className:'user-item'}, checkbox, label1, label2, editInput1, editInput2, editButton1, editButton2, deleteButton );

   
   BindEvents(listItem,checkbox, editButton1, editButton2, deleteButton,userList );                                                       // Подписка на события.
    return listItem;
   
}

export default CreateItem;