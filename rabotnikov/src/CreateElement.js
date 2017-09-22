import React, { Component } from 'react';


function CreateElement(tag, props, ...children) {                               // Функция создания новых элементов наподобие ф-ции в React.
	const element = React.createElement(tag,props, ...children);
	console.log(element)
	return element;
};

export default CreateElement;