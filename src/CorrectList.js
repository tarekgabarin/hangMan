import React, {Component} from 'react';

import './App.css'

import CorrectListItem from './CorrectListItem';


class CorrectList extends Component {


    render() {


        // let lst = this.props.pastGuesses.map(function (vale) {
        //
        //     return <GuessListItem letter={vale}/>
        //
        // });


        let lst = this.props.answerMap.map(function(vale){



                return <CorrectListItem letter={vale.letter} done={vale.done}/>





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

export default CorrectList