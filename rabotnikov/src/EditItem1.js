import React, { Component } from 'react';
//import SortDirection from './SortDirection.js';
import users from './App';

function EditItem1(event,userList) {                                      // Редактирование имени пользователя.                           
	const listItem = this.parentNode;                            // 'li'.
	const title1 = listItem.querySelector('.title1');            // Элемент label.
	const editInput1 = listItem.querySelector('.textfield1');    // Поле ввода.
	
	const isEditing1 = listItem.classList.contains('editing1');  // Режим редактирования согласно регулярному выражению.

	if(isEditing1) {
		const matchPatternArray = editInput1.value.match(/^[A-Z][a-z'-]*[a-z]+[IVX]?[IVX]?[I]{0,2}$|^[А-ЩЭЮЯЁ][а-яё'-]*[а-яё]+[IVX]?[IVX]?[I]{0,2}$/); 

		if(matchPatternArray && title1.textContent !== editInput1.value) {
		  title1.textContent = editInput1.value;
		  this.textContent = 'Изменить Имя' ;

   		  const index = [].indexOf.call(userList.querySelectorAll('.user-item'),listItem);
		  users[index].name = title1.textContent;
	      console.log(`новое имя пользователя ${index} = ${users[index].name}`); 

	      console.log( users ); 

	      //SortDirection(buttonForNames, true);                                                         //спрятать треугольники направлений сортировки
	      //SortDirection(buttonForAges, true);  
	      Array.from(document.querySelectorAll('.user-item')).forEach(item => item.style.order = 0 );  // вернуть порядок по добавлению в список пользователей
          console.log('порядок пользователей на странице соответствует порядку добавления пользователей через форму');

		} else if (!matchPatternArray) {
          title1.textContent = title1.textContent;
          alert('Вы ввели недопустимые символы в названии имени');
          this.textContent = 'Изменить Имя' ;
		} else  this.textContent = 'Изменить Имя' ;                    
			           
	} else {                                                     // сохранения данных
		editInput1.value = title1.textContent;
		this.textContent = 'Сохранить Имя';
	}

	listItem.classList.toggle('editing1')                        // Переход в блок  редактирования.


};

export default EditItem1;