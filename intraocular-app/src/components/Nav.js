import React, { Component } from "react";
import logo from '../images/eye.png'
import data2016 from '../local_data/PremierLeague2015.json'
import data2017 from '../local_data/PremierLeague2016.json'
import data2018 from '../local_data/PremierLeague2017.json'
import data2019 from '../local_data/PremierLeague2018.json'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router';
import { Redirect } from 'react-router';
import Search from '../components/Search'
class Nav extends Component {

  constructor(props) {
    super(props)
   this.items = [];
   this.state = {
       suggestions: [],
       text:'',
       redirect:false
      }
}
  componentDidMount = () =>{
    this.setState({data1 : data2019.map(data => data.name)})
    this.items = data2019.map(data => data.name)
    // this.setState({data2 : data2018.map(data => data.name)})
    // this.setState({data3 : data2017.map(data => data.name)})
    // this.setState({data4 : data2016.map(data => data.name)})

  }

  handleSubmit = () => {
    console.log('submit')
    this.setState({ redirect: true })
  }

  
  onChange = (e) => {
    this.setState({text:e.target.value})
    e.preventDefault();
    const value = e.target.value
    this.props.myCallback(value)
    let suggestions = [];
    if(value.length > 0){
      let regex = new RegExp(`^${value}`, 'i')
      let copy = this.state.data1
      suggestions = copy.sort().filter(v => regex.test(v))
    }
    this.setState(() => ({suggestions}))

  };

  renderSuggestions = () => {
    const {suggestions}  = this.state
    if(suggestions.length === 0){
      return null
    }
    return ( <datalist id="browsers">
    {suggestions.map((item,index) => 
      <option key={index} value={item}>Premier League </option>
    )}
    </datalist>
    )
  }
  
  render() {    
    const { text } = this.state
   
    return (
      
        <nav className="navbar navbar-white bg-white justify-content-between shadow-sm">
          <Link to='/' className="navbar-brand">
            <img src={logo}width="30" height="30" alt="" ></img>
           intr()cular
         </Link>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" autocomplete="off"value={ text } list="browsers" name="browsers" type="search"  onChange={this.onChange} aria-label="Search"></input>
          {this.renderSuggestions()}
          <Link to='/search'><button className="btn btn-outline-success my-2 my-sm-0" value="Submit"type="submit" >Search</button></Link>
        </form>
      </nav>
    )
  }
}

export default Nav;     
  