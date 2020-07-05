import React, { Component } from "react";
import Harry from '../images/harryCartoon.png'
import Ronaldo from '../images/ronaldo.png'
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class News extends Component {

    onChange = (e) => {
       e.preventDefault();
       console.log(e.target.value)
    // this.props.callbackFromParent(e.target.value)
  };
  
  
  render() {    
    const section = {
        height: "200px",
        paddingTop: 20,
        fontColor:"green"

      };
    return (

//         <div className="container" id="content_index" href="/">
//             <Paper>

//             <div className="jumbotron p-3 p-md-5 text-green rounded bg-white text-right" href="cudas/aug-apm/index.html" id="Premier">
//                 <div className="col-md-6 px-0">
//                     <Link to='/premier' className="display-4 font-italic text-green" 
//                       ><h1>Augmented Augusted Plus-Minus for Soccer</h1></Link>
                   
//                  {/* <a href="/" className="text-white-right font-weight-bold"></a> */}
//                 </div>
//             </div>
//             </Paper>
//         </div>
        
//         <div className=" row">
//             <div className="col-md-5">
//                 <div className="card flex-md-row mb-4 box-shadow h-md-250">
//                     <div className="card-body d-flex flex-column">
//                         <strong className="d-inline-block mb-2 text-primary">Premier League</strong>
//                         <h3 className="mb-0">
//                             <a className="text-dark" href="/">Current League Leaders</a>
//                         </h3>
//                         <div className="mb-1 text-muted">Nov 12</div>
//                         <div className="my-4 chartjs-render-monitor" width="250" height="231">
// {/* 
//                             <canvas id="myChart"></canvas> */}
//                         </div>


//                     </div>
//                 </div>
//             </div>

   
   <Grid container spacing={6}>
              <Grid item xs={12}>
                <Paper >
                    <div style={section}classNameName="jumbotron p-3 p-md-5 text-green rounded bg-white text-right" href="cudas/aug-apm/index.html" id="Premier">
                        <div className="col-md-6 px-0">
                            <Link to='/premier' >
                                <h1 className="display-6 font-italic text-success">Premier League Augmented APM</h1>
                            </Link>
                        </div>
                    </div>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper >  
                         <div className="card flex-md-row mb-4 box-shadow h-s-250">
                            <div className="card-body d-flex flex-column" id="Harry">
                                <strong className="d-inline-block mb-2 text-success">Intraocular</strong>
                                <h3 className="mb-0">
                                    <a href="./about" className="text-dark">About Us</a>
                                </h3>
                            {/* <div className="mb-1 text-muted"></div> */}
                                <p className="card-text mb-auto"><img src={Harry} style={{height:"500px"}}alt='Harry'></img></p>
                        </div>
                    </div>
         </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper >
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column" id="Harry">
                                <strong className="d-inline-block mb-2 text-success">Intraocular</strong>
                                <h3 className="mb-0">
                                    <a href="mailto:intraocularStats@gmail.com" className="text-dark">Contact</a>
                                </h3>
                                <div className="d-flex flex-end" style={{justifyContent:"flex-end"}}>
                                    <p className="card-text mb-auto"><img src={Ronaldo} height="500px" alt='Harry'></img></p>
                                </div>

                        </div>
                    </div>
                </Paper>
              </Grid>
              {/* <Grid item xs={3}>
                <Paper >xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper >xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper >xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper >xs=3</Paper>
              </Grid> */}
            </Grid> 
    )
  }
}

export default News;     
  