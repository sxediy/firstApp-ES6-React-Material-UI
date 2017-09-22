import React, { Component } from 'react';
import './SortDirection.js';


function SortByAge(event) {
	console.log('сорт бай возраст');

	buttonForNames.className = '';                                         // Удаляет треугольник сортировки с другой кнопки.

	SortDirection(buttonForAges);                                          // Переключение направления сортировки по возрасту.

	
	const userItems = Array.from(document.querySelectorAll('.user-item'));
	const itemsSortByAge = userItems.sort( makeSortByAge('age', 'name'));  // Массив отсортированных элементов, callback - функция сортировки по возрасту. 



	 function MakeSortByAge (age, name) {                                                        // Функция для сортировки по возрасту.
      return function (a, b) {
 	    if( parseInt(b.children[2].textContent) ===  parseInt(a.children[2].textContent)) {      // Если одинаковый возраст, ...
 		   return  a.children[1].textContent > b.children[1].textContent ? 1 : -1;               // ...то по алфавиту (по возрастанию А-Я).
 	    } if(buttonForAges.className === 'increaseSort') {                                       // Направление сортировки в зависимости от текущего класса у элемента.
 	        return parseInt(a.children[2].textContent) - parseInt(b.children[2].textContent);
        } return parseInt(b.children[2].textContent) - parseInt(a.children[2].textContent);
       }
     };
 
    let i = 0;
	itemsSortByAge.forEach(item => {                                        // Элементамам отсортированным задаётся возрастающий параметр order технологии "flexbox" для перерисовывания интерфейса.
      console.log(item,i), item.style.order = i ,i++;
	});

};

export default SortByAge;