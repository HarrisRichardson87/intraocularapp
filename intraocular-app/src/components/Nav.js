import React, { Component } from "react";
import logo from '../images/eye.png';
import data2019 from '../local_data/PremierLeague2018.json';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


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
    axios.get('/ping').then(res =>{
      console.log(res)
    })

  }
  
  //on submit//
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    console.log('submit')
}
  
  // as form changes and suggestions list //
  onChange = (e) => {
    e.preventDefault();
    //starts look
    this.setState({text:e.target.value})
    const value = e.target.value
    let suggestions = [];
    if(value.length > 0){
      let regex = new RegExp(`^${value}`, 'i')
      let copy = this.state.data1
      suggestions = copy.sort().filter(v => regex.test(v))
    }
    this.setState(() => ({suggestions}))
   this.props.myCallback(value)
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
    console.log(this.props)
    return (
      
        <nav className="navbar navbar-white bg-white justify-content-between shadow-sm">
     
          <Link to='/' className="navbar-brand">
            <img src={logo}width="30" height="30" alt="" ></img>
           intr()cular
         </Link>
        <form className="form-inline" id="form"onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" value={ text } list="browsers" id='theText' name="browsers" type="search" onChange={this.onChange} aria-label="Search"></input>
          {this.renderSuggestions()}
          <Link to='/search'><button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button></Link>
        </form>
      </nav>




    )
  }
}

const mapStateToProps = (state) => { 
  let id = '1'
  return{
    post: state.posts.find(post => post.id === id )
  }
}

// const mapDispatchToProps = (dispatch) =>{
//   return {
//     deletePost: (id) => {dispatch({type:'DELETE_POST', id: id})}
//   }


export default connect(mapStateToProps)(Nav);     
  