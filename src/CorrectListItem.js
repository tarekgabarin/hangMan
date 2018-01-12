import React, {Component} from 'react';

import './App.css'


class CorrectListItem extends Component {

    render() {


        if (this.props.done === true) {


            return (


                <div className="column">

                    <li className="title orange-text underline">{this.props.letter}</li>

                </div>


            )

        }

        else {

            return (

            <div className="column">

                <li className="title hidden-text underline">{this.props.letter}</li>

            </div>

            )
        }


    }
}

export default CorrectListItem;