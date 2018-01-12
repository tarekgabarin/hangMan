import React, {Component} from 'react';

class Score extends Component {


    render() {


        return (


            <div className="box">

                <ul>
                    <li > Score: {this.props.score}  </li>

                    <li> Outcome: {this.props.outcome} </li>

                    <li> Number of Guesses: {this.props.numberOfGuesses}</li>

                    <li> Number of wrong guess: {this.props.nWrong} </li>



                </ul>


            </div>



        )



    }



}

export default Score