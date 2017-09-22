import React, { Component } from 'react';

function Form({onSubmit,onChange}) {
    return(
        <form  name='users' onSubmit={onSubmit}>
        
             <dl>
               <legend> Данные пользователя </legend>   
               <dt><label htmlFor='name'>Имя </label></dt>
               <dd>
                 <input name='name' id='name' type='text' onChange={onChange} placeholder="с заглавной буквы" pattern="^[A-Z][a-z'-]*[a-z]+[IVX]?[IVX]?[I]{0,2}|[А-ЩЭЮЯЁ][а-яё'-]*[а-яё]+[IVX]?[IVX]?[I]{0,2}$" required autoComplete='off'/>
                 <label htmlFor='name'> </label>
              </dd>
          
               <dt><label htmlFor='age'>Возраст</label></dt> 
               <dd>
                 <input name='age' id='age' type='number' step='any' min='0' max='117'  onChange={onChange} placeholder="0 - 117" required/>
                 <label htmlFor='age'> </label>
              </dd>
        
               <dt><label htmlFor='day'>День Рождения</label></dt> 
               <dd><input name='day' id='birthday' type='date'  min="1900-01-01" max='2017-09-01' placeholder="необязательное поле"/><label htmlFor='day'></label></dd>
            </dl>
        
              <label htmlFor='comment'>Комментарии  </label> <br/>
              <textarea  name='comment' rows="3" cols="45" placeholder="необязательное поле"></textarea> <label htmlFor='comment'> </label>
        
              <div><input type='submit' value='Отправить' id='sendUserData'/></div> 
         
          </form>
    );
}

export default Form

