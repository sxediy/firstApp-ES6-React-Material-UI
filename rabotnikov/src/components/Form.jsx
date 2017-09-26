import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';

const initialState = {
	name: '',
	age: '',
	comment: '',
	validationResults: {},
}

const validators = {  // проверка валидности
	name: (value) => /^[A-Z][a-z'-]*[a-z]+[IVX]?[IVX]?[I]{0,2}|[А-ЩЭЮЯЁ][а-яё'-]*[а-яё]+[IVX]?[IVX]?[I]{0,2}$/.test(value),
  age: (value) => /^[0-9]{1,2}$/.test(value),
}

const isValid = (key, value) => validators[key](value);  // вызов функции проверки валидности, результат true/false
console.log('isvalid'+ isValid)

export default class Form extends Component {

	state = {
		...initialState 
	}



	handleChange = key => event => { //
    this.setState(
      {
				[key]: event.target.value, // key - либо name, либо age      
				validationResults: { // вместо concat. в начале validationResults: {} 
					...this.state.validationResults,
					[key]: isValid(key, event.target.value), //результат проверки валидности хранится тут true/false
					
				}
			},
			() => console.log('this.state in Form',this.state),
			console.log( [key] ,'isValid = '+ isValid(key, event.target.value)),
			
    );
  }

	onSubmit = () => {  //кликом на Button вызовится эта ф-ция.
   if(this.state.validationResults.name && this.state.validationResults.age) {
		this.props.onSubmit(this.state); // добавит в массив пользователя (см. App , функцию handleSubmit).
		this.setState({    //вернет состояние в исходное(пустые поля данных пользователя).
			...initialState,
		});
	 }
	}

	render() {  // {onSubmit} ссылается на handleSubmit App через this.props,  handleSubmit добавит в массив данные нового пользователя (см. App , функцию handleSubmit).
		const { onSubmit } = this.props;
		const { validationResults } = this.state; // true или false, соответственно error будет, если validationResults[key] === false
		return(
        <form  name='users' onSubmit={onSubmit}>   
					<Card>
						<CardContent>
							<div>
						
								<TextField
									id="name"
				          label="Имя"
									placeholder="Имя"
				          value={this.state.name}
									required="true"
				          onChange={this.handleChange('name')}
				          margin="normal"
									error={!validationResults.name}
				        />
							</div>
							<div>
								<TextField
									id="age"
				          label="Возраст"
									type="number"
									placeholder="0 - 117"
									step="any"
									min="0"
									max="117"
				          value={this.state.age}
									required="true"
				          onChange={this.handleChange('age')}
									margin="normal"
									error={!validationResults.age}
									
				        />
							</div>
							<div>
								<TextField
									id="comment"
									placeholder="Комментарий"
				          label="Комментарий"
				          value={this.state.comment}
				          onChange={this.handleChange('comment')}
				        />
							</div>
						</CardContent>
						<CardActions>
							<Button raised color="primary" onClick={this.onSubmit}>Добавить</Button>  
						</CardActions>
					</Card>

             {/* <dl>
               <legend> Данные пользователя </legend>
               <dt><label htmlFor='day'>День Рождения</label></dt>
               <dd><input name='day' id='birthday' type='date'  min="1900-01-01" max='2017-09-01' placeholder="необязательное поле"/><label htmlFor='day'></label></dd>
            </dl>

              <label htmlFor='comment'>Комментарии  </label> <br/>
              <textarea  name='comment' rows="3" cols="45" placeholder="необязательное поле"></textarea> <label htmlFor='comment'> </label>

              <div><input type='submit' value='Отправить' id='sendUserData'/></div> */}

          </form>
    );
	}
}
