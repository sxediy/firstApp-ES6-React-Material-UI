import React, { Component } from 'react';
import Form from './Form';
import DataStore from './DataStore';
import AddUser from './AddUser.js';

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
    name: '',
    age:''
  };

  handleInputChange = event => {

    this.setState(
      {[event.target.name]: event.target.value},
      () => console.log(this.state)
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const userName = this.state.name;
    const userAge =  this.state.age;
       
    AddUser(event,userName,userAge);
  }

  render() {
    return (
      <div className="App">
         <Form onSubmit={this.handleSubmit} onChange={this.handleInputChange}/>

      </div>
    );
  }
}

export default App;
