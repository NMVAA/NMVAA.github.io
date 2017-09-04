import React, {Component} from 'react';
import './App.css';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableItems: null
    }
  }
    componentWillMount(){
      const Dropbox = require('dropbox');
      const dbx = new Dropbox({ accessToken: '25jrkzyOPtAAAAAAAAAAEETYkO66CcOkTWiNte6-kVMSJXX2DjzDlFIA81pdp8SX' });
      dbx.filesListFolder({path: ''})
      .then((response) => {
          this.setState({
          tableItems: response.entries
        });
      })
      .catch((error) => {
        console.error(error);
      });
    };

     parseISOString = (s) => {
       var b = s.split(/\D+/);
       var date = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
       var changeDate = `${(date.getDate()<10?'0':'') +  + date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}`
       return changeDate;
    }
    deleteItem = (index) => {
      var newItems = this.state.tableItems;
      newItems.splice(index.target.parentNode.id, 1);
      console.log(newItems);
      this.setState({
        tableItems: newItems
      });
    }
  render() {
    return ( 
      <div className="container">
        <ToolbarTop/>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <TableItems tableItems={this.state.tableItems} date={this.parseISOString} deleteItem={this.deleteItem} />
            </MuiThemeProvider>
      </div>
    );
  }
}

export default App;



class ToolbarTop extends React.Component {
  
    constructor(props) {
      super(props);
    }
  
    handleChange = (event, index, value) => this.setState({value});
  
    render() {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
          <FlatButton label="Default" default={true} onClick={() =>{alert("Not implemented")}} />
          <FlatButton label="Disabled" disabled={true} />
          <FlatButton label="Disabled" disabled={true} />
          <FlatButton label="Disabled" disabled={true} /> 
          <FlatButton label="Disabled" disabled={true} />
          </ToolbarGroup>
        </Toolbar>
        </MuiThemeProvider>
      );
    }
  }

 const TableItems = (props) => {
     if (props.tableItems)return ( 
      <div>
         <Table>
         <TableHeader>
        <TableRow className="">
          <TableHeaderColumn className="">NAME</TableHeaderColumn>
          <TableHeaderColumn className="">FILE SIZE</TableHeaderColumn>
          <TableHeaderColumn className="">DATE</TableHeaderColumn>
          <TableHeaderColumn className=""></TableHeaderColumn>
        </TableRow>
        </TableHeader>
        <TableBody>
        {props.tableItems.map((item, index) => (
          <TableRow className="" key={item.id}>
          <TableRowColumn className="">{item.name}</TableRowColumn>
          <TableRowColumn className="">{item.size ? (item.size/1000000).toFixed(2) + "MB" : ""}</TableRowColumn>
          <TableRowColumn className="">{item.client_modified  ?  props.date(item.client_modified) : ""}</TableRowColumn>
          <TableRowColumn className="">
            <DropDownItem id={index} delItem={props.deleteItem}/>
          </TableRowColumn>
        </TableRow>
))} 
</TableBody>
      </Table>
        </div>
    );
    else return (
      <h1>Loading...</h1>
    );
  }

                                        // Custom component DropdownMenu
  // class DropdownMenu extends Component {
  //   constructor(props) {
  //     super(props);

  //   }
  //   myFunction = () => {
  //     document.getElementById(this.props.id).classList.toggle("show");
  // }
  
  // // Close the dropdown menu if the user clicks outside of it
  //   render() {
  //     return ( 
  //       <div className="dropdown">
  //            <div className="triangle_wrapper">
  //            <div className="dropbtn triangle" onClick={this.myFunction}></div>
  //            </div>
             
             
                          
  //         {/* <button className="dropbtn" onClick={this.myFunction}>Dropdown</button> */}
  //         <div id={this.props.id} className="dropdown-content">
  //           <button onClick={() => {
  //             alert("Not implemented");
  //             }}>Copy</button>
  //           <button onClick={this.props.delItem}>Delete</button>
  //           </div>
  //           </div>
  //     );
  //   }
  // }
  
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // };
//   function checkBoxChecker(){
//   var inputs = document.getElementsByTagName("input");
//   console.log(inputs);
//   for(var i=0; i<inputs.length; i++) {
//      if(inputs[i].checked) {
//        if(!inputs[i].parentNode.parentNode.classList.contains("select")){
//         inputs[i].parentNode.parentNode.classList.toggle("select");
//         }
//       }
//         else {
//           inputs[i].parentNode.parentNode.classList.remove("select");
//         }
//       }
// }

class DropDownItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <IconMenu 
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
          <MenuItem  primaryText="Delete" onClick={this.props.delItem} />
          </IconMenu>
      </div>
    );
  }
}