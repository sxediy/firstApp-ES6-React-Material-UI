import React, { Component } from 'react';
//import SortDirection from './SortDirection.js';
import CreateSuffix from './CreateSuffix.js';
import users from './App';

function EditItem2(event,userList) {                                  // Редактирование возраста пользователя.
	const listItem = this.parentNode;                          
	const title2 = listItem.querySelector('.title2');           
	const editInput2 = listItem.querySelector('.textfield2');    

	const isEditing2 = listItem.classList.contains('editing2');   

	if(isEditing2) {
		const matchPatternArray = editInput2.value.match(/^[0-9]{1,2}$|^[1][0,1][0-9]$/);		
		if(matchPatternArray && parseInt(title2.textContent) != editInput2.value) {
			console.log('editInput2.value = ' + editInput2.value);
			console.log('parseInt(title2.textContent) = ' + parseInt(title2.textContent) );
			
			title2.textContent = editInput2.value;
			this.textContent = 'Изменить Возраст' ;

			const index = [].indexOf.call(userList.querySelectorAll('.user-item'),listItem);
	        users[index].age = editInput2.value;

	        CreateSuffix(title2.textContent,index);
	        title2.textContent += ' ' + users[index].suffix;

	        console.log( users );  

	        //SortDirection(buttonForNames, true);                                                         //спрятать треугольники направлений сортировки
	        //SortDirection(buttonForAges, true);
	        Array.from(document.querySelectorAll('.user-item')).forEach(item => item.style.order = 0 );  // вернуть порядок по добавлению в список пользователей
            console.log('порядок пользователей на странице соответствует порядку добавления пользователей через форму');

		} else if (!matchPatternArray) {
			alert('Допустимое значение возраста: 0 - 119');
		} else this.textContent = 'Изменить Возраст' ;
		
			           
	} else {
		editInput2.value = parseInt(title2.textContent);
		this.textContent = 'Сохранить Возраст';
	}

	listItem.classList.toggle('editing2')
};

export default EditItem2;