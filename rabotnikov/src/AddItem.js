import React, { Component } from 'react';
import './SortDirection.js';
import CreateItem from  './CreateItem.js';
import array from './DataStore';
import CreateElement from './CreateElement.js';

function AddItem(event,indexUser,userName,userAge) {                                            // Добавление данных нового пользователя.
  
	
	
	const userList = CreateElement('ul', {className:'user-list'});                           // Контейнер элементов DOM. Элементами являются строки с данными пользователя.
	const item = CreateItem(userName, userAge, array[indexUser].suffix, userList);
	userList.appendChild(item) ;
	/*if(array.length>=2) {                                                      //активация кнопок сортировки
		sortButtons.classList.remove('hideSortButtons');
	    buttonForNames.disabled = false;	  	    	
	    buttonForAges.disabled = false;
	} else {null;};

	SortDirection(buttonForNames, true);                                                          //спрятать треугольники направлений сортировки
	SortDirection(buttonForAges, true);
	Array.from(document.querySelectorAll('.user-item')).forEach(item => item.style.order = 0 );  // вернуть порядок по добавлению в список пользователей 
    console.log('порядок пользователей на странице соответствует порядку добавления пользователей через форму');
	 console.log( array );  */                            
};

export default AddItem;