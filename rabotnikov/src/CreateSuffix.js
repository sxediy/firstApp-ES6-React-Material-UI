import React, { Component } from 'react';
import array from './DataStore';


const CreateSuffix = (userAgCreateSuffixe,indexUser, userAge) =>  {                                      // Учитывается склонение слова "год" согласно правилам русского языка (1 год, 4 года, 5 лет и т.д.).
var suffix ;
if (userAge >=5 &&  userAge<=20)  suffix = 'лет';   
else if ((userAge>=2 && userAge<=4) || (userAge % 10 === 2 || userAge % 10 === 3 || userAge % 10 === 4) )  suffix = 'года';
else if (userAge === 1 || userAge % 10 === 1 ) suffix = 'год';
else suffix = 'лет'; 
console.log('index'+indexUser)
array[indexUser].suffix = suffix;                                           // запись "суффикса" в массив данных

console.log('суффик - '+ suffix);

};

export default CreateSuffix;