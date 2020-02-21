import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

class Premier extends Component {
    constructor(props) {
        super(props);
        
        this.options = {
            defaultSortName: 'name',  // default sort column name
            defaultSortOrder: 'desc'  // default sort order
        };

        
    }
    state = {
        dataSelect : []
    }
    
    yearSelect = (e) =>{
      e.preventDefault()
      console.log(e.currentTarget.value)
      
    }
    
    render() {        
       
      
    const { SearchBar } = Search;
    const columns = [{
        dataField: 'name',
        text: 'Player',
        sortable: true, 
      }, {
        dataField: 'teams',
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
  
  
   
    return (
        
      <div  className="table table-striped table-bordered table-sm fixed-table-body table-responsive container-fluid">
                <h1 id="title">Premier League Augmented APM</h1>
                    <button className="btn btn-outline-primary" onClick={this.yearSelect} value="button2018">2018-19</button>
                    <button className="btn btn-outline-primary" onClick={this.yearSelect}  value="button2017">2017-18</button>
                    <button className="btn btn-outline-primary" onClick={this.yearSelect}  value="button2016">2016-17</button>
                    <button className="btn btn-outline-primary" onClick={this.yearSelect} value="button2015">2015-16</button>
            
            <div width="80" margin="0" data-sort-name=" AugAPM" data-sort-order="desc" data-sortable="true" className="table table-striped table-bordered table-sm fixed-table-body table-responsive " >
            <ToolkitProvider
                keyField="id"
                data={this.props.props2019}
                columns={ columns }
                search
  >
                {
                props => (
        <       div>
        
          <SearchBar { ...props.searchProps } />
          <hr />
          <div id ="table">
          <BootstrapTable 
            { ...props.baseProps }

            />
          </div>
        </div>
      )
    }
  </ToolkitProvider>
         

            </div>
  
        </div>
    )
  }
}

export default Premier;     
  