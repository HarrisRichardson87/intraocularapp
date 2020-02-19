import React, { Component } from 'react';
import Nav from'./components/Nav';
import News from './components/News'
import Search from './components/Search'
import Premier from './components/Premier'
import data2019 from './local_data/PremierLeague2018.json'
import data2018 from './local_data/PremierLeague2017.json'
import data2017 from './local_data/PremierLeague2016.json'
import data2016 from './local_data/PremierLeague2015.json'


import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listDataFromChild: '',
        data1:[],
        data2:[],
        data3:[],
        data4:[] 
    };    
}
  myCallback (dataFromChild){
      this.setState({listDataFromChild:dataFromChild})
  
}
componentDidMount = () =>{
  this.setState({data1 : data2019.map(data => data)})
  this.setState({data2 : data2018.map(data => data)})
  this.setState({data3 : data2017.map(data => data)})
  this.setState({data4 : data2016.map(data => data)})

}

render(){

return (
  <BrowserRouter>
    <div className="App">
        <Nav myCallback={this.myCallback.bind(this)}/>
        <Route exact path='/' component={News}></Route>
        <Route exact path='/search' render={
          (props) => <Search props={this.state.listDataFromChild}/> }/>
        <Route exact path='/premier' render={
          (props) => <Premier {...props} props2019={this.state.data1} props2018={this.state.data2} props20117={this.state.data3} props2016={this.state.data4}/>
          } 
        />
    
    </div>
    </BrowserRouter>
  );
}}

export default App;

