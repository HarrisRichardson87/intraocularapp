import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';


export default class About extends React.Component {

    render() {

        return (

            <div className="row">

                {/* <!-- Post Content Column --> */}
                <div className="col-lg-8">

                    {/* <!-- Title --> */}
                    <h1 className="mt-4">How Intraocular works</h1>

                    {/* <!-- Author --> */}
                    <p className="lead">
                        by <a href="#">Intraocular Team</a>
                    </p>

                    {/* <!-- Date/Time --> */}
                    <p>Posted on March 1, 2019 at 12:00 PM</p>

                    {/* <!-- Preview Image --> */}
                    <img className="img-fluid rounded" width="300" alt=""></img>

                    {/* <!-- Post Content --> */}
                    <p className="lead">The Augmented Adjusted Plus-Minus rating was created by
                        Carnegie Mellon PHD candidates Francesca Matano, Lee F. Richardson, Taylor
                        Pospisil, Collin Eubanks and Jining Qin in 2018</p>

                    <p>In basketball and hockey, state-of-the-art player value statistics are often
                        variants of Adjusted Plus-Minus (APM). But APM hasn't had the same impact in
                        soccer, since soccer games are low scoring with a low number of substitutions.
                        In soccer, perhaps the most comprehensive player value statistics come from
                        video games, and in particular FIFA. FIFA ratings combine the subjective
                        evaluations of over 9000 scouts, coaches, and season-ticket holders into ratings
                        for over 18,000 players. This paper combines FIFA ratings and APM into a single
                        metric, which we call Augmented APM. The key idea is recasting APM into a
                        Bayesian framework, and incorporating FIFA ratings into the prior distribution.
                        We show that Augmented APM predicts better than both standard APM and a model
                        using only FIFA ratings. We also show that Augmented APM decorrelates players
                        that are highly collinear.</p>

                                <h5 className="card-header">Check out</h5>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="row-lg-2">
                                            <ul className="col">
                                                <li>
                                                    <a href="/premier">Free Premier League Ratings</a>
                                                </li>

                                                <li>
                                                    <a href="https://arxiv.org/abs/1810.08032">Theory Publication</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>

                    </div>
       
        

        )
    }
}


