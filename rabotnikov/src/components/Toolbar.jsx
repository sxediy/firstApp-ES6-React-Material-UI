import React, { Component } from 'react';
import Button from 'material-ui/Button';

 const Toolbar = (props) => {
   return (

      <div>
      <Button raised color="primary" onClick={ () => props.sort('name') }>
         Sort by name 
        </Button> 

      <Button raised color="primary" onClick={ () => props.sort('age')}>
         Sort by age
        </Button> 

        <Button raised color="primary" onClick={ () => props.sort('order')}>
          Reset
       </Button> 
       </div>
   ) 
      
    }

    export default Toolbar;
