import React, {Component} from 'react';

import './App.css';

import {Link} from 'react-router-dom';


class NavBar extends Component {


    render(){


        return (

            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                    <div className="navbar-item">

                        <h1>Created by Tarek Gabarin</h1>

                    </div>



                </div>

                <Link to="/">Play</Link>
                <Link to="/about">About</Link>
                <Link to="/leaderboards">Leader board</Link>
            </nav>




        )


    }


}

export default NavBar