import React, { Component } from 'react';
import Button from 'material-ui/Button';


export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.sorted = { age: true, name: true };
    
  }


  sort(type) {

    const { update, data } = this.props;
    const isSorted = this.sorted[type];
    let direction = isSorted ? 1 : -1;

    const sorted = [].slice.call(data).sort((a, b) => {
      if( type === 'name'){
        if (a[type] === b[type]) { return 0; }
        return a[type] > b[type] ? direction : direction * -1;
      } else if (type === 'age') {
        return a[type] - b[type] > 0 ? direction : direction * -1;
      } else if (type === 'order') {
        return a[type] - b[type];
      }
    });

    this.sorted[type] = !isSorted;
    console.log('direction', direction); // проверка сортировки
    
    update({
      data: sorted,
     
    }, 
    () => console.log('test')
    );
  }


  render() {
    return (
      <div>
      <Button raised color="primary" onClick={() => this.sort('name')}>
         Sort by name 
        </Button> 

      <Button raised color="primary" onClick={() => this.sort('age')}>
         Sort by age
        </Button> 

        <Button raised color="primary" onClick={() => this.sort('order')}>
          Reset
       </Button> 
       </div>
      
    )
  }
}
