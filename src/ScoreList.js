import React, {Component} from 'react'

import Score from './Score';

class ScoreList extends Component {


    componentDidMount(){


        console.log('didMount - within ScoreList, this.props.pastGames is...' + this.props.pastGames)

    }

    componentWillMount(){


        console.log('willMount - within ScoreList, this.props.pastGames is...' + this.props.pastGames)

    }

    render() {


        let lst = this.props.pastGames;


        console.log('lst is....' + this.props.pastGames);




        //     [
        //     {
        //         nWrong: 4,
        //
        //         score: 56,
        //
        //         outcome: 'WON',
        //
        //         numberOfGuesses: 5
        //
        //     }
        //
        // ];


         ///   this.props.pastGames;

        let tryIt = [];

        for (let i = 0; i < lst.length; i++){


            tryIt.push(<Score nWrong={lst[i].nWrong} score={lst[i].score} outcome={lst[i].outcome} numberOfGuesses={lst[i].numberOfGuesses}/>)

        }

        // let lstJSX = lst.map(function(vale) {
        //
        //     return <Score nWrong={vale.nWrong} score={vale.score} outcome={vale.outcome} numberOfGuesses={vale.numberOfGuesses}/>
        //
        // });

        return (

            <div>

                {tryIt}


            </div>

        )


    }



}

export default ScoreList;