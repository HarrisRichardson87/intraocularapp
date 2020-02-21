import React, { Component } from "react";
import Harry from '../images/harryCartoon.png'
import {Link} from 'react-router-dom'

class News extends Component {

    onChange = (e) => {
       e.preventDefault();
       console.log(e.target.value)
    // this.props.callbackFromParent(e.target.value)
  };
  
  
  render() {    
    return (

        <div className="container" id="content_index" href="/">
        <div className="row">
            <div className="jumbotron p-3 p-md-5 text-green rounded bg-white text-right" href="cudas/aug-apm/index.html" id="Premier">
                <div className="col-md-6 px-0">
                    <Link to='/premier' className="display-4 font-italic text-green" 
                      ><h1>Augmented Augusted Plus-Minus for Soccer</h1></Link>
                   
                 {/* <a href="/" className="text-white-right font-weight-bold"></a> */}
                </div>
            </div>
        </div>
        
        <div className=" row">
            <div className="col-md-5">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column">
                        <strong className="d-inline-block mb-2 text-primary">Premier League</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="/">Current League Leaders</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <div className="my-4 chartjs-render-monitor" width="250" height="231">
{/* 
                            <canvas id="myChart"></canvas> */}
                        </div>


                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column" id="Harry">
                        <strong className="d-inline-block mb-2 text-success">Intraocular</strong>
                        <h3 className="mb-0">
                            <a href="./contact.html" className="text-dark">Contact Us</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="card-text mb-auto"><img src={Harry} height="446" alt='Harry'></img></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default News;     
  