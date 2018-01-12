import React, {Component} from 'react';

import './App.css'

import GuessListItem from './GuessListItem';


class GuessList extends Component {


    render() {


        let lst = this.props.pastGuesses.map(function (vale) {

            return <GuessListItem letter={vale}/>

        });


        return (

            <div className="block">

                <div className="columns">


                    <div className="column">

                        <ul style={{margin: '0 auto'}} className="list-unstyled">


                            <div className="columns fluid">

                                {lst}

                            </div>


                        </ul>


                    </div>


                </div>


            </div>




        )


    }


}

export default GuessList