import React, { Component } from 'react';

import Nav     from'./components/Nav';
import News    from './components/News';
import Search  from './components/Search';
import Premier from './components/Premier';
import About   from './components/About';
import Shiny   from './components/Shiny';

// import data2019 from './local_data/PremierLeague2018.json';
// import data2018 from './local_data/PremierLeague2017.json';
// import data2017 from './local_data/PremierLeague2016.json';
// import data2016 from './local_data/PremierLeague2015.json';


import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listDataFromChild: [],
        data1:[],
        data2:[],
        data3:[],
        data4:[],
        package:[]
    };    
}
myCallback (dataFromChild){

  this.setState({listDataFromChild:dataFromChild});
  let box = [];
  
  this.state.data1.forEach((item) => {
     
    if(dataFromChild === item.name){
        box.push({
            name     : item.name,
            season   :'2018 - 2019',
            team     : item.teams,
            minutes  : item.minutes,
            fifa     : item.fifa,
            APM      : item.APM,
            AugAPM   : item.AugAPM,
            AugAPMSE : item.AugAPMSE
        })
        return;
      }})
      this.state.data2.forEach((item) => {
        if(dataFromChild === item.name){
           box.push({
               name     : item.name,
               season   :'2017 - 2018',
               team     : item.teams,
               minutes  : item.minutes,
               fifa     : item.fifa,
               APM      : item.APM,
               AugAPM   : item.AugAPM,
               AugAPMSE : item.AugAPMSE
           })
           return
         }})
         this.state.data3.forEach((item) => {
          if(dataFromChild === item.name){
             box.push({
                 name     : item.name,
                 season   :'2016 - 2017',
                 team     : item.teams,
                 minutes  : item.minutes,
                 fifa     : item.fifa,
                 APM      : item.APM,
                 AugAPM   : item.AugAPM,
                 AugAPMSE : item.AugAPMSE
             })
             return
           }})
           this.state.data4.forEach((item) => {
            if(dataFromChild === item.name){
               box.push({
                   name     : item.name,
                   season   :'2015 - 2016',
                   team     : item.teams,
                   minutes  : item.minutes,
                   fifa     : item.fifa,
                   APM      : item.APM,
                   AugAPM   : item.AugAPM,
                   AugAPMSE : item.AugAPMSE
               })
               return
             }})
            this.setState({package:box})

}

componentDidMount = () =>{
   
//   data2019.forEach(element => {
//   element.APM      = element.APM.toFixed(3);
//   element.AugAPM   = element.AugAPM.toFixed(3);
//   element.AugAPMSE = element.AugAPMSE.toFixed(3);
 
// });
// data2018.forEach(element => {
//   element.APM       = element.APM.toFixed(3);
//   element.AugAPM    = element.AugAPM.toFixed(3);
//   element.AugAPMSE  = element.AugAPMSE.toFixed(3);
 
// });
// data2017.forEach(element => {
//   element.APM       = element.APM.toFixed(3);
//   element.AugAPM    = element.AugAPM.toFixed(3);
//   element.AugAPMSE  = element.AugAPMSE.toFixed(3);
 
// });
// data2016.forEach(element => {
//   element.APM      = element.APM.toFixed(3);
//   element.AugAPM   = element.AugAPM.toFixed(3);
//   element.AugAPMSE = element.AugAPMSE.toFixed(3);
 
// });

//   this.setState({data1 : data2019.map(data => data)})
//   this.setState({data2 : data2018.map(data => data)})
//   this.setState({data3 : data2017.map(data => data)})
//   this.setState({data4 : data2016.map(data => data)})
}




render(){

return (
  <BrowserRouter>
    <div className="App">
        <Nav myCallback={this.myCallback.bind(this)}/>
        
        <Switch>
          <Route exact path='/' render={
            (props) => <News {...props} leaders={this.state.data1} /> }/>
          {/* <Route exact path='/search' render={
            (props) => <Search {...props} package={this.state.package} /> }/>
          <Route exact path='/premier' render={
            (props) => <Premier {...props} props2019={this.state.data1} props2018={this.state.data2} props2017={this.state.data3} props2016={this.state.data4}/>
            } 
          />
          <Route path="/about">
            <About />
          </Route> */}
          <Route path="/shiny">
            <Shiny />
          </Route>
       </Switch>
    
    </div>
  </BrowserRouter>
  );
}}

export default App;

