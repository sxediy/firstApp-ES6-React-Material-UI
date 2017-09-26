import React, { Component } from 'react';
import CreateSuffix from './CreateSuffix.js';
import AddItem from './AddItem.js';
//import './ResetForm.js';
import users from './App';


const AddUser = (event, userName, userAge) => {  
	event.preventDefault();                                                 // Чтобы страница не перезагрузилась.
    const indexUser = users.length;                            // Индекс в масиве данных.
    //DataStore( {name: userName, age: userAge});
                                                            
    
    CreateSuffix(userAge,indexUser);                          // Лет/год/года.
    console.log('длина массива = ' + users.length);
    console.log(event);
                                        
    AddItem(event,indexUser,userName,userAge);                                               // Процесс создания элемента в DOM c данными пользователя.
    /*
    ResetForm();                                                            // Очистка формы после её отправки в массив.
    document.forms.users.children[0].children[2].children.name.focus();     // После добавления пользователя переключается фокус на поле ввода имени нового пользователя. 
*/
}; 

export default AddUser;