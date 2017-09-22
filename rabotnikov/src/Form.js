import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';

const initialState = {
	name: '',
	age: '',
	comment: '',
	validationResults: {}
}

const validators = {
	name: (value) => /^([а-яА-Яa-zA-Z]+)$/.test(value),
}

const isValid = (key, value) => validators[key](value);

export default class Form extends Component {

	state = {
		...initialState
	}

	handleChange = key => event => {
    this.setState(
      {
				[key]: event.target.value,
				validationResults: {
					...this.state.validationResults,
					[key]: isValid(key, event.target.value)
				}
			},
      () => console.log(this.state)
    );
  }

	onSubmit = () => {
		this.props.onSubmit(this.state);
		this.setState({
			...initialState,
		});
	}

	render() {
		const { onSubmit } = this.props;
		const { validationResults } = this.state;
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
				          onChange={this.handleChange('age')}
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
