import React, { Component } from "react";
import logo from '../images/eye.png'
import data2019 from '../local_data/PremierLeague2018.json'
import {Link} from 'react-router-dom'

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
  
  //data for search list//
  componentDidMount = () =>{
    this.setState({data1 : data2019.map(data => data.name)})
    this.items = data2019.map(data => data.name)

  }
  
  //on submit//
  handleSubmit = (e) => {
    console.log(e.target.value)
    console.log('submit')
    this.setState({ redirect: true })
  }
  
  // as form changes and suggestions list //
  onChange = (e) => {
    e.preventDefault();
    
    //text to send//
    this.setState({text:e.target.value})
    
    const value = e.target.value
    
    //suggestions list for autocomplete//
    
    let suggestions = [];
    
    //sorts suggestion list//
    
    if(value.length > 0){
      let regex = new RegExp(`^${value}`, 'i')
      let copy = this.state.data1
      suggestions = copy.sort().filter(v => regex.test(v))
    }
    
    //autocomplete forms//
    this.props.myCallback(value)
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
    //text to send//
    const { text } = this.state
   
    return (
      
        <nav className="navbar navbar-white bg-white justify-content-between shadow-sm">
          <Link to='/' className="navbar-brand">
            <img src={logo}width="30" height="30" alt="" ></img>
           intr()cular
         </Link>
        <form className="form-inline" onSubmit={this.componentWillUnmount}>
          <input className="form-control mr-sm-2" value={ text } list="browsers" name="browsers" type="search" onChange={this.onChange} aria-label="Search"></input>
          {this.renderSuggestions()}
          <Link to='/search'><button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button></Link>
        </form>
      </nav>
    )
  }
}

export default Nav;     
  