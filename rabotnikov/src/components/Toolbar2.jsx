import React, { Component } from 'react';



export default class Toolbar2 extends Component {
    constructor(props) {
      super(props);
      
    }

render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Options" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton label=" Sort by name " primary={true} />
          <RaisedButton label=" Sort by age " primary={true} />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}