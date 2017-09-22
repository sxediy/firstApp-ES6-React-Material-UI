import React, { Component } from 'react';
//import SwitchSortButtons from'./SwitchSortButtons.js';
import array from './DataStore';


function DeleteItem(event,userList) {                      // Удаление одного пользователя.                        
	const listItem = this.parentNode; 

	const index = [].indexOf.call(userList.querySelectorAll('.user-item'),listItem);

	console.log( 'удалился indexOf = '+ index );  // Индекс в массиве данных всех пользователей.

	array.splice(index,1);                        // Удаление объекта данных  пользователя из массива.

	userList.removeChild(listItem);               // Удаление элемента в DOM.

	//SwitchSortButtons();                          // После удаления доступны клавиши сортировки, если количество пользователей от двух.

	console.log( array );

};

export default DeleteItem;
