import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Toolbar2 from './Toolbar2';


export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.sorted = { age: true, name: true };
    
  }


  sort = (type) => { // this = Sort

    console.log('this === class Sort // because its used arrow function syntaxis', this);
    
    const { update, data } = this.props; //если не использовать синтаксис стрелочных ф-ций, то this == sort(),
    // а свойства update и data не найдутся в sort(), потому что они передаются в class Sort от родительского компонента App 
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
    console.log('this.props.data', this.props.data.length )
    
    update({
      data: sorted,
     
    }, 
    () => console.log('test')
    );
  }


  render() {
    let jsx = null;
    if(this.props.data.length > 1 ) {
      jsx = <Toolbar sort = {this.sort} />;
    } else {
      jsx = <div></div>
    }
    return (
      <div>
     {jsx}
      </div> 
   );
  }
}
