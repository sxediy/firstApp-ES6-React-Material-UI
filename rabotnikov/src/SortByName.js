import React, { Component } from 'react';
import './SortDirection.js';


function SortByName(event) {                                                  // Сортировка по имени.
	console.log('сорт бай алфавит');
    
	buttonForAges.className = '';                                             // Удаляет треугольник сортировки с другой кнопки.

	SortDirection(buttonForNames);                                            // Переключение направления сортировки по алфавиту.

		  
	const userItems = Array.from(document.querySelectorAll('.user-item'));     // Все пользователи.
    const itemsSortByName = userItems.sort(makeSortByName('name', 'age'));    // Массив отсортированных элементов , callback - функция сортировки по алфавиту. 

    function MakeSortByName (name, age) {                                                      // Функция для сортировки по имени.
      return function (a, b) {  
 	    if( a.children[1].textContent ===  b.children[1].textContent) {                        // Если одинаковые имена, ... 
 		   return  parseInt(b.children[2].textContent) - parseInt(a.children[2].textContent);  // ...то по убыванию возраста.
 	    } if(buttonForNames.className === 'increaseSort') {                                    // Направление сортировки в зависимости от текущего класса у элемента.
 	        return a.children[1].textContent > b.children[1].textContent ? 1 : -1; 
        } return a.children[1].textContent < b.children[1].textContent ? 1 : -1;
      }
    };

	let i = 0;
	itemsSortByName.forEach(item => {                                                          // Элементамам отсортированным задаётся возрастающий параметр order технологии "flexbox" для перерисовывания интерфейса. 
      console.log(item,i), item.style.order = i ,i++;
	});
};


export default SortByName;