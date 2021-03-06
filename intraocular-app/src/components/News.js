import React, {Component} from "react";

import Harry from '../images/harryCartoon.png'
import Ronaldo from '../images/ronaldo.png'

import {Link} from 'react-router-dom';

class News extends Component {

    onChange = (e) => {
        e.preventDefault();
        // this.props.callbackFromParent(e.target.value)
    };

    render() {

        return (
            <div>
                <div class="container">
                    <div class="jumbotron p-3 p-md-5 text-white rounded bg-light" id="Premier">
                        <div class="col-md-6 px-0">
                            <Link to='/shiny'>

                            <h1 class="display-4 font-italic text-success">Soccer Database</h1>
                            <p class="lead mb-0">
                                <a href="#" class="text-primary font-weight-bold">Continue reading...</a>
                            </p>
                            </Link>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col-md-6">
                            {/* <div class="card flex-md-row mb-4 box-shadow h-md-250">
                                <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2 text-primary">La Liga</strong>
                                    <h3 class="mb-0">
                                        <Link to='/shiny' className="navbar-brand">
                                            <a class="text-dark">La Liga Results</a>

                                        </Link>
                                    </h3>
                                    <div class="mb-1 text-muted">June 12 2020</div>
                                    <p class="card-text mb-auto">This is a wider card with supporting text below as
                                        a natural lead-in to additional content.</p>
                                </div>
                            </div> */}
                        </div>
                        {/* <div class="col-md-6">
                            <div class="card flex-md-row mb-4 box-shadow h-md-250">
                                <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2 text-success">Premier League</strong>
                                    <h3 class="mb-0">
                                        <a class="text-dark" href="/Premier">Premier League 2019</a>
                                    </h3>
                                    <div class="mb-1 text-muted">Nov 11 2019</div>
                                    <p class="card-text mb-auto">This is a wider card with supporting text below as
                                        a natural lead-in to additional content.</p>
                                </div>

                            </div>
                        </div> */}
                    </div>
                </div>

                <div role="main" class="container">
                    <div class="row">
                        <div class="col-md-8 blog-main">
                            <h3 class="pb-3 mb-4 font-italic border-bottom">
                                Updates
                            </h3>

                            <div class="blog-post">
                                <h2 class="blog-post-title">Intraocular Re-Launch</h2>
                                <p class="blog-post-meta">July 18, 2020 by
                                    <a>The Intraocular Team</a>
                                </p>

                                <p>
                                    We are re-lauching intraocular.net with a new web service that will allow you to
                                    stay up to day with dynamic league projection updated daily for every league as
                                    the their season's progress
                                </p>
                                <hr></hr>
                                {/* <p>Cum sociis natoque penatibus et magnis
                                    <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo
                                    quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere
                                    consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                                <blockquote>
                                    <p>Curabitur blandit tempus porttitor.
                                        <strong>Nullam quis risus eget urna mollis</strong>
                                        ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                </blockquote>
                                <p>Etiam porta
                                    <em>sem malesuada magna</em>
                                    mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                                    bibendum nulla sed consectetur.</p>
                                <h2>Heading</h2>
                                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis
                                    mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                                    sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <h3>Sub-heading</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus.</p>
                                <pre><code>Example code block</code></pre>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada
                                    magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                    condimentum nibh, ut fermentum massa.</p>
                                <h3>Sub-heading</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                                    malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor
                                    mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                <ul>
                                    <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                    <li>Donec id elit non mi porta gravida at eget metus.</li>
                                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                                </ul>
                                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero,
                                    a pharetra augue.</p>
                                <ol>
                                    <li>Vestibulum id ligula porta felis euismod semper.</li>
                                    <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                        ridiculus mus.</li>
                                    <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                                </ol>
                                <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est
                                    at lobortis.</p> */}
                            </div>

                            {/* <div class="blog-post">
                                <h2 class="blog-post-title">Another blog post</h2>
                                <p class="blog-post-meta">December 23, 2013 by
                                    <a>Lee Richardson</a>
                                </p>

                                <p>Cum sociis natoque penatibus et magnis
                                    <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo
                                    quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere
                                    consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                                <blockquote>
                                    <p>Curabitur blandit tempus porttitor.
                                        <strong>Nullam quis risus eget urna mollis</strong>
                                        ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                </blockquote>
                                <p>Etiam porta
                                    <em>sem malesuada magna</em>
                                    mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                                    bibendum nulla sed consectetur.</p>
                                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis
                                    mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                                    sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            </div> */}

                            {/* <div class="blog-post">
                                <h2 class="blog-post-title">New feature</h2>
                                <p class="blog-post-meta">December 14, 2013 by
                                    <a href="#">Francesca Matano</a>
                                </p>

                                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                                    malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor
                                    mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                <ul>
                                    <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                    <li>Donec id elit non mi porta gravida at eget metus.</li>
                                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                                </ul>
                                <p>Etiam porta
                                    <em>sem malesuada magna</em>
                                    mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                                    bibendum nulla sed consectetur.</p>
                                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero,
                                    a pharetra augue.</p>
                            </div> */}

                        </div>

                        <aside class="col-md-4 blog-sidebar">
                            <div class="p-3 mb-3 bg-light rounded">

                                <p class="mb-0">
                                
                                        The Augmented Adjusted Plus-Minus
                                  
                                     rating was created by Carnegie Mellon PHD candidates Francesca Matano, Lee F.
                                    Richardson, Taylor Pospisil, Collin Eubanks and Jining Qin in 2018
                                </p>
                            </div>

                            {/* <div class="p-3">
                                <h4 class="font-italic">Elsewhere</h4>
                                <ol class="list-unstyled">
                                    <li>
                                        <a href="#">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                </ol>
                            </div> */}
                        </aside>

                    </div>

                </div>

            </div>

        )
    }
}

export default News;
