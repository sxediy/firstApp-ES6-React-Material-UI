import React, { Component } from 'react';

function SwitchDeleteCheckedAndUncheckAll(off) {                              // Включает/выключает кнопки 'удалить отмеченные' и 'снять все галочки'.
if(off) {
    deletecheckedAndUncheckAll.classList.add('notselectdeletechecked');
    buttonDeleteChecked.classList.remove('buttondeletechecked');
    buttonDeleteChecked.disabled = true;
     buttonUnChecked.disabled = true;
 } else {
     buttonDeleteChecked.classList.add('buttondeletechecked'); 
       buttonDeleteChecked.disabled = false;
       buttonUnChecked.disabled = false;
       deletecheckedAndUncheckAll.classList.remove('notselectdeletechecked');
 };	
};

export default SwitchDeleteCheckedAndUncheckAll;