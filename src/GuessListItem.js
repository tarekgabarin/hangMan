import React, {Component} from 'react';

import './App.css'


class GuessListItem extends Component {

    render() {


        return (


            <div className="column">

                <li className="title white-text underline">{this.props.letter}</li>

            </div>


        )


    }
}

export default GuessListItem;