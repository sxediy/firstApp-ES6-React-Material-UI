import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/Button';

export default ({ Toolbar2 }) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text="Сортировка" />
      
      <ToolbarSeparator />
      <RaisedButton label="По имени"    onClick={ () => this.props.sort('name') }  primary={true} />
      <RaisedButton label="По возрасту" onClick={ () => this.props.sort('age')  } primary={true} />
      <RaisedButton label="Сброс"       onClick={ () => this.props.sort('order')} primary={true} />
    </ToolbarGroup>
  </Toolbar>
  );
  