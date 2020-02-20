import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import logo from '../images/eye.png'
import PremierLogo from '../images/Premier-League.png'
import BootstrapTable from 'react-bootstrap-table-next';

import ToolkitProvider from 'react-bootstrap-table2-toolkit';


class Search extends Component {

  constructor(props) {
    super(props)
   this.items = [];
   this.state = {
    speed: 14
    }
}
  componentDidMount = () =>{

  }
  
  onChange = (e) => {
 
  };

  renderSuggestions = () => {

  }
  render() {    
    const columns = [{
      dataField: 'team',
      text: 'Team'
    }, {
      dataField: "minutes",
      text: 'Minutes',
      sortable: true
    },
  {
      dataField: "fifa",
      text: 'Fifa Rating',
      sortable: true
  },
  {
      dataField: 'APM',
      text: 'APM',
      sortable: true
  }, {
      dataField: 'AugAPM',
      text: 'Aug APM',
      sortable: true
  },
  {
      dataField: 'AugAPMSE',
      text: 'Aug APMSE',
      sortable: true
  }
  ]
    if(this.props.package[0]){

      return (
        <div className="table table-striped table-bordered table-sm">
          <div>
            <h1>{this.props.package[0].name}</h1>
            
          </div>
        <ToolkitProvider
          keyField="id"
          data={this.props.package}
          columns={ columns }>
          { props => (
          
          <BootstrapTable { ...props.baseProps }/>
            )
          }
          </ToolkitProvider>
        </div>
      )
    }else{
      return(
       
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
           <img style={{animation: `spin ${this.state.speed}s linear infinite`}} height="400"src={logo} alt="img"/>
        </div>
       

      )
    }
    
  }
}

export default Search;     
  