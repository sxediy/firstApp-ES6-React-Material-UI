import React, { Component } from 'react';
import Form from './Form';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import UsersList from './UsersList';
import Toolbar from './Toolbar';
import '.././App.css';

const theme = createMuiTheme();

/*
import './App.css';
import './AddItem.js';
import './AddUser.js';
import './BindEvents.js';
import './CreateElement.js';
import './CreateItem.js';
import './CreateSuffix.js';
import './DeleteChecked.js';
import './DeleteItem.js';
import './EditItem1.js';
import './EditItem2.js';
import './SortByAge.js';
import './SortByName.js';
import './SortDirection.js';
import './SwitchDeleteCheckedAndUncheckAll.js';
import './SwitchSortButtons.js';
import './ToggleItem.js';
import './UnChecked.js';
*/
class App extends Component {

	state = {
		users: [],
		
	
	}

  handleSubmit = user => {   // добавление данных нового пользователя в массив
		const { users } = this.state;
		//if (user.validationResults.age && user.validationResults.name) {
		

		this.setState({
			users: [...users, user],
    },
  
   () => console.log('текущий массив пользователей', users)
	);
	user.order = this.state.users.length;
 }
//}
	


  updateData({ data }) {
    this.setState({
		users: data,
		
	});
  }


  render() {
    return (
      <div className="App">
				<MuiThemeProvider theme={theme}>
					<Grid container>
						<Grid item xs="12" sm="6">
			        <Form onSubmit={this.handleSubmit} />
						</Grid>
						<Grid item xs="12" sm="6">
							<UsersList users={this.state.users} />
						    <Toolbar data={this.state.users} update={this.updateData.bind(this)} />
						</Grid>
					</Grid>
					
				</MuiThemeProvider>
      </div>
    );
  }
}

export default App;
