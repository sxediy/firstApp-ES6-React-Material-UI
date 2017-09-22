import React, { Component } from 'react';
import Form from './Form';
import DataStore from './DataStore';
import AddUser from './AddUser.js';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import UsersList from './components/UsersList';
import './App.css';

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
import './ResetForm.js';
import './SortByAge.js';
import './SortByName.js';
import './SortDirection.js';
import './SwitchDeleteCheckedAndUncheckAll.js';
import './SwitchSortButtons.js';
import './ToggleItem.js';
import './UnChecked.js';
*/
class App extends Component {
 /* constructor(props){
    super(props);
    this.state = {
      name: '',
      age:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  */

	state = {
		users: [],
	}

  handleSubmit = user => {
		const { users } = this.state;
		this.setState({
			users: [...users, user],
		}, () => console.log(this.state))
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
						</Grid>
					</Grid>
				</MuiThemeProvider>
      </div>
    );
  }
}

export default App;
