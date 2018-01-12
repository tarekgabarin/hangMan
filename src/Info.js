import React, {Component} from 'react'

import './App.css'


class Info extends Component {

    render(){


        return (


            <div className='gameContainer'>
                <h1>Currently Selected Guess is: {this.props.guess}</h1>
                <h1>Your word is: {this.props.answer}</h1>
                <h2>Your current guesses are: {this.props.pastGuesses}</h2>
                <h2>{this.props.notification}</h2>
                <h2>{this.props.tip}</h2>
            </div>

        )




    }





}

export default Info