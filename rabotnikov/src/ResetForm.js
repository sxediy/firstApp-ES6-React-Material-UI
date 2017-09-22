import React, { Component } from 'react';

function ResetForm(event) {                                                 // Очистка формы ввода данных пользователя после отправки данных.
	document.forms.users.elements.name.value = '';
	document.forms.users.elements.age.value = '';
  document.forms.users.elements.day.value = '';
  document.forms.users.elements.comment.value = '';
};

export default ResetForm;