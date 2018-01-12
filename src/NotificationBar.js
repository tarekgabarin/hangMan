import React, {Component} from 'react'

import './App.css'

class NotificationBar extends Component {

    render() {

        if (this.props.notification === true) {


            return (

                <div className="columns">

                    <div className="column has-text-centered">

                        <h2 style={{color: '#FF4500'}} className='subtitle'> You have already guessed that</h2>

                    </div>

                </div>

            )

        }

        else {


            return (


                <div className="columns">

                    <div className="column has-text-centered">

                        <h2 className='hidden-text subtitle'>You have already guessed that</h2>

                    </div>

                </div>


            )


        }


    }


}

export default NotificationBar