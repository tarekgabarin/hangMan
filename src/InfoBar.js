import React, {Component} from 'react'

import GuessList from './GuessList'

import './App.css'

import CorrectList from './CorrectList'

import NotificationBar from './NotificationBar';
import Gallow from "./Gallow";

class InfoBar extends Component {



    render() {




        let header1JSX = [];

        let header2JSX = [];

        ///TODO test this shit out, this line is not hundred percent confirmed working

        if (this.props.gameFinished === false) {

            console.log('if statement runs!');

            header1JSX.push(<div className="block">

                <div className="columns">


                    <div className="column has-text-centered">

                        <h2 className="white-text title">Your word is <span
                            style={{color: '#fff6e5'}}>"{this.props.answer}"</span></h2>

                    </div>


                </div>

            </div>);

            header2JSX.push(<div className="block">

                <div className="columns">

                    <div className="column is-5">


                    </div>


                    <div className="column has-text-centered">


                        <div style={{margin: '0 auto !important'}} onChange={this.props.handleGuess} className="field has-addons">
                            <div className="control">
                                <div className="select">
                                    <select>
                                        <option value="a">A</option>
                                        <option value="b">B</option>
                                        <option value="c">C</option>
                                        <option value="d">D</option>
                                        <option value="e">E</option>
                                        <option value="f">F</option>
                                        <option value="g">G</option>
                                        <option value="h">H</option>
                                        <option value="i">I</option>
                                        <option value="j">J</option>
                                        <option value="k">K</option>
                                        <option value="l">L</option>
                                        <option value="m">M</option>
                                        <option value="n">N</option>
                                        <option value="o">O</option>
                                        <option value="p">P</option>
                                        <option value="q">Q</option>
                                        <option value="r">R</option>
                                        <option value="s">S</option>
                                        <option value="t">T</option>
                                        <option value="u">U</option>
                                        <option value="v">V</option>
                                        <option value="w">W</option>
                                        <option value="x">X</option>
                                        <option value="y">Y</option>
                                        <option value="z">Z</option>

                                    </select>
                                </div>
                            </div>


                            <div className="control">
                                <a onClick={this.props.handleSubmit} className="button is-info">
                                    Select Letter
                                </a>
                            </div>
                        </div>


                    </div>

                    <div className="column is-one-third">


                    </div>


                </div>


            </div>)


        }

        else if (this.props.gameFinished === true) {

            header1JSX.push(<div className="block">

                <div className="columns">


                    <div className="column has-text-centered">

                        <h2 className="white-text title"><span
                            style={{color: '#fff6e5'}}>{this.props.outComeMessage}</span></h2>

                    </div>


                </div>

            </div>);


            header2JSX.push(<div className="block">

                <div className="columns">

                    <div className="column is-5">


                    </div>


                    <div className="column has-text-centered">


                        <div className="field is-grouped">
                            <p className="control">
                                <a  onClick={() => this.props.handleContinue('YES')} className="button is-link">
                                    Play Again
                                </a>
                            </p>
                            <p className="control">
                                <a onClick={() => this.props.handleContinue('NO')} className="button is-danger">
                                    Quit
                                </a>
                            </p>
                        </div>


                    </div>

                    <div className="column is-one-third">


                    </div>


                </div>


            </div>)


        }

        return (

            <section className="info-bar-color white-text">

                <div className="container is-fluid">


                    {header1JSX}


                    {header2JSX}


                    <div className="block">

                        <div className="columns">


                            <div className="is-one-third subtitle has-text-centered column white-text">You have <span
                                className="title"
                                style={{color: '#FF4500'}}> {this.props.livesLeft} </span>
                                lives left
                            </div>
                            <div className="is-one-third subtitle has-text-centered column white-text">You got <span
                                className="title"
                                style={{color: '#fff6e5'}}> {this.props.nCorrect} </span>
                                out of <span className="title" style={{color: '#fff6e5'}}> {this.props.correctAmount} </span> letters correct
                            </div>
                            <div className="is-one-third subtitle has-text-centered column white-text">You have guessed
                                <span
                                    className="title" style={{color: '#fff6e5'}}> {this.props.numberOfGuesses} </span> times
                            </div>


                        </div>


                    </div>

                    <Gallow livesLeft={this.props.livesLeft}/>



                    <div className="block">

                        <NotificationBar notification={this.props.notification}/>



                        <div className="columns">


                            <div className="column is-12 has-text-centered">

                                <h2 className="white-text subtitle">You have already guessed the following</h2>

                            </div>


                        </div>

                    </div>


                    <GuessList pastGuesses={this.props.pastGuesses}>

                    </GuessList>

                    <div className="block">

                        <div className="columns">

                            <div className="column is-12 has-text-centered">

                                <h2 className="orange-text subtitle">You got the following correct so far</h2>

                            </div>


                        </div>


                    </div>

                    <CorrectList answerMap={this.props.answerMap} />


                </div>






            </section>

        )


    }


}

export default InfoBar