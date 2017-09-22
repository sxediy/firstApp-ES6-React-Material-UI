import React, { Component } from 'react';
import CreateSuffix from './CreateSuffix.js';
import AddItem from './AddItem.js';
//import './ResetForm.js';
import array from './DataStore';


const AddUser = (event, userName, userAge) => {  
	event.preventDefault();                                                 // Чтобы страница не перезагрузилась.
    const indexUser = array.length;                            // Индекс в масиве данных.
    //DataStore( {name: userName, age: userAge});
                                                            
    array.splice(indexUser,0,{name: userName, age: userAge}); // Добавление данные пользователя в массив.
    CreateSuffix(userAge,indexUser);                          // Лет/год/года.
    console.log('длина массива = ' + array.length);
    console.log(event);
                                        
    AddItem(event,indexUser,userName,userAge);                                               // Процесс создания элемента в DOM c данными пользователя.
    /*
    ResetForm();                                                            // Очистка формы после её отправки в массив.
    document.forms.users.children[0].children[2].children.name.focus();     // После добавления пользователя переключается фокус на поле ввода имени нового пользователя. 
*/
}; 

export default AddUser;