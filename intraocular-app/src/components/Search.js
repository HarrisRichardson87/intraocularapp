import React, { Component } from "react";
import data2016 from '../local_data/PremierLeague2015.json'
import data2017 from '../local_data/PremierLeague2016.json'
import data2018 from '../local_data/PremierLeague2017.json'
import data2019 from '../local_data/PremierLeague2018.json'
// import PropTypes from 'prop-types';


class Search extends Component {
  // static propTypes = {
  //   options: PropTypes.instanceOf(Array).isRequired
  // };
  constructor(props) {
    super(props)
   this.items = [];
   this.state = {
       
   
      }
}
  componentDidMount = () =>{
    this.setState({data1 : data2019.map(data => data.name)})
    this.items = data2019.map(data => data.name)
    this.setState({data2 : data2018.map(data => data.name)})
    this.setState({data3 : data2017.map(data => data.name)})
    this.setState({data4 : data2016.map(data => data.name)})

  }
  
  onChange = (e) => {
 
  };

  renderSuggestions = () => {
    const {suggestions}  = this.state
    if(suggestions.length === 0){
      return null
    }
    return ( <datalist id="browsers">
    {suggestions.map((item,index) => 
      <option key={index} value={item}>{item}</option>
    )}
    </datalist>
    )
  }
  render() {    
    
    return (
    <p>{this.props.text}</p>
    )
  }
}

export default Search;     
  