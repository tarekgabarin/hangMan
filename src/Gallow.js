import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import './App.css'

import HangMan0 from './HangMan0';
import HangMan1 from './HangMan1';
import HangMan2 from './HangMan2';
import HangMan3 from './HangMan3';
import HangMan4 from './HangMan4';
import HangMan5 from './HangMan5';
import HangMan6 from './HangMan6';


class Gallow extends Component {


    /*
    1 - head
    2 - body
    3 - leftArm
    4 - rightArm
    5 - leftLeg
    6 - rightLeg



     */

    componentDidMount(){

        console.log('this.props.lives.left is...' + this.props.livesLeft)

    }


    render() {





        if (this.props.livesLeft === 6) {

            return (

                <div className="block">


                    <div className="columns">

                        <div className="is-one-third column">


                        </div>


                        <div className="column">



                            <HangMan0/>


                        </div>

                        <div className="is-one-third column">


                        </div>



                    </div>


                </div>




            );


        }
        else if (this.props.livesLeft === 5) {

            return (

                <div className="block">


                    <div className="columns">

                        <div className="is-one-third column">


                        </div>


                        <div className="column">



                            <HangMan1/>


                        </div>

                        <div className="is-one-third column">


                        </div>



                    </div>


                </div>




            )

        }
        else if (this.props.livesLeft === 4) {

            return (

                <div className="block">


                    <div className="columns">

                        <div className="is-one-third column">


                        </div>


                        <div className="column">



                            <HangMan2/>


                        </div>

                        <div className="is-one-third column">


                        </div>



                    </div>


                </div>




            )



        }

        else if (this.props.livesLeft === 3) {

            return (

                <div className="block">


                    <div className="columns">

                        <div className="is-one-third column">


                        </div>


                        <div className="column">



                            <HangMan3/>


                        </div>

                        <div className="is-one-third column">


                        </div>



                    </div>


                </div>




            )



        }

        else if (this.props.livesLeft === 2) {

            return (

                <div className="block">


                    <div className="columns">

                        <div className="is-one-third column">


                        </div>


                        <div className="column">



                            <HangMan4/>


                        </div>

                        <div className="is-one-third column">


                        </div>



                    </div>


                </div>



            )



        }

        else if (this.props.livesLeft === 1) {

            return (

                <div className="block">


                    <div className="columns">

                        <div className="is-one-third column">


                        </div>


                        <div className="column">



                            <HangMan5/>


                        </div>

                        <div className="is-one-third column">


                        </div>



                    </div>


                </div>




            )



        }

        else if (this.props.livesLeft === 0) {

            return (

                <div className="block">


                    <div className="columns">

                        <div className="is-one-third column">


                        </div>


                        <div className="column">



                            <HangMan6/>


                        </div>

                        <div className="is-one-third column">


                        </div>



                    </div>


                </div>



            )



        }


    }

}

export default Gallow
