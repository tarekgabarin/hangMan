import React, {Component} from 'react';

import './App.css';

import InfoBar from './InfoBar';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// import NavBar from './NavBar';

import './index.css';

import ScoreList from './ScoreList';

import registerServiceWorker from './registerServiceWorker';

class Play extends Component {


    constructor() {
        super();

        let getAmountOfCorrectLetters = (lst) => {

            return lst.reduce((acc, i) => {

                if (acc.indexOf(i) === -1) {

                    acc.push(i);
                }

                return acc

            }, []).length


        };

        let words = [
            'hey',
            'person',
            'you',
            'think',
            'youre',
            'better',
            'than',
            'me'
        ];


        let chosenWord = words[Math.floor(Math.random() * words.length)];


        let correctAmount = getAmountOfCorrectLetters(chosenWord.split(''));

        let answerList = chosenWord.split('');

        let answerMap = answerList.map(function (letter) {

            return {

                done: false,

                letter: letter

            }

        });

        console.log('answerMap is...' + answerMap);


        this.state = {

            pastGuesses: [],

            numberOfGuesses: 0,

            nWrong: 0,

            livesLeft: 6,

            nCorrect: 0,

            answer: chosenWord,

            correctAmount: correctAmount,

            answerMap: answerMap,

            cont: true,

            guess: 'a',

            pastGames: [],

            tip: "First enter the letter you're guessing by pressing the keyboard, then press Enter to submit your answer",

            hangMan: 0,

            notification: false,

            outComeMessage: '',

            outcome: undefined,

            gameFinished: false


        };

        console.log(this.state.answer);

        this.handleGuess = this.handleGuess.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleContinue = this.handleContinue.bind(this);


    }

    componentDidMount() {

        /// TODO they keydo

        document.addEventListener('keydown', this.handleGuess);

        document.addEventListener('keydown', this.handleSubmit);


    }


    handleGuess(event) {


        console.log('You guessed...' + event.target.value);

        this.setState({guess: event.target.value});

        console.log('the state is..' + this.state);

        console.log('Your state.guess is' + this.state.guess);

        console.log('state.answer is...' + this.state.answer);

    }


    handleContinue(playAgain) {

        //TODO You should have the round stored in pastGames right when the game is finished, you have it stored when the person presses 'Play Again'


        console.log('within handleContinue, playAgain is...' + playAgain);




        if (this.state.gameFinished === true) {

            let getAmountOfCorrectLetters = (lst) => {

                return lst.reduce((acc, i) => {

                    if (acc.indexOf(i) === -1) {

                        acc.push(i);
                    }

                    return acc

                }, []).length


            };


            if (playAgain === 'YES') {

                let wordList = [
                    'hey',
                    'person',
                    'you',
                    'think',
                    'youre',
                    'better',
                    'than',
                    'me'
                ];


                let getNewWord = () => {

                    return new Promise((resolve, reject) => {

                        let newWord = wordList[Math.floor(Math.random() * wordList.length)].split('');

                        let newCorrectAmount = getAmountOfCorrectLetters(newWord);

                        let answerMap = newWord.map(function (letter) {

                            return {

                                done: false,

                                letter: letter

                            }

                        });


                        if (newCorrectAmount !== undefined && newWord !== undefined && Array.isArray(answerMap) === true){

                            let dataObj = {

                                newCorrectAmount,

                                newWord,

                                answerMap
                            };

                            resolve(dataObj)

                        }

                        else {

                            reject('newCorrectAmount is undefined')


                        }



                    })


                };


                getNewWord()

                    .then((dataObj) => {


                        this.setState({

                            answer: dataObj.newWord,

                            cont: true,

                            gameFinished: false,

                            pastGuesses: [],

                            livesLeft: 6,

                            answerMap: dataObj.answerMap,

                            correctAmount: dataObj.newCorrectAmount

                        });



                    })

                    .catch((err) => {

                        if(err) throw err;

                    });






                // this.setState({
                //
                //     answer: newWord,
                //
                //     cont: true,
                //
                //     gameFinished: false,
                //
                //     pastGuesses: [],
                //
                //     livesLeft: 6,
                //
                //     answerMap: answerMap,
                //
                //     correctAmount: newCorrectAmount
                //
                // });

              //  console.log('this.state after correctAmount set to newCorrect is...' + this.state.correctAmount);


            }
            else if (playAgain === 'NO') {


                this.setState({cont: false});


            }




    ///        console.log('within handleContinue, newPastGames is...' + newPastGames);


            this.setState({

                nWrong: 0,

                nCorrect: 0,

                numberOfGuesses: 0,

                outcome: undefined,

                notification: '',

                correctAmount: undefined


            });

        }


    };


    handleSubmit(event) {

        if (this.state.gameFinished === false) {


            let updateValues = (guess) => {


                let checkIfInAnswer = () => {

                    console.log(this);


                    if (this.state.answer.indexOf(guess.toLowerCase()) === -1) {

                        return false;

                    }

                    else {

                        return true;

                    }


                };

                let pastGuessesClone = this.state.pastGuesses;

                if (pastGuessesClone.indexOf(guess) !== -1) {

                    this.setState({notification: true});

                    setTimeout(() => {

                        this.setState({notification: false})
                    }, 3000)

                }
                else {

                    let isCorrect = checkIfInAnswer();

                    if (isCorrect === false) {

                        let newArr = this.state.pastGuesses;

                        newArr.push(guess);


                        if ((this.state.livesLeft - 1) === 0) {


                            this.setState({

                                numberOfGuesses: this.state.numberOfGuesses + 1,

                                nWrong: this.state.nWrong + 1,

                                livesLeft: this.state.livesLeft - 1,

                                pastGuesses: newArr,

                                outcome: 'LOST',
                                outComeMessage: 'You lost :(',
                                cont: false,
                                gameFinished: true,


                            });


                            this.handleContinue();

                        }

                        else {

                            this.setState({

                                numberOfGuesses: this.state.numberOfGuesses + 1,

                                nWrong: this.state.nWrong + 1,

                                livesLeft: this.state.livesLeft - 1,

                                pastGuesses: newArr,

                                hangMan: this.state.hangMan + 1


                            });


                        }

                    }
                    else if (isCorrect) {

                        let answerMapClone = this.state.answerMap;

                        for (let i = 0; i < answerMapClone.length; i++) {

                            if (answerMapClone[i].letter === guess) {

                                answerMapClone[i].done = true

                            }

                        }

                        let newArr = this.state.pastGuesses;

                        newArr.push(guess);


                        if ((this.state.nCorrect + 1) === this.state.correctAmount) {


                            let updatePastGames = () => {

                                return new Promise((resolve, reject) => {


                                    class gameData {

                                        constructor(outcome, numberOfGuesses, nCorrect, nWrong, pastGuesses, answer) {

                                            this.outcome = outcome;

                                            this.numberOfGuesses = numberOfGuesses;

                                            this.nCorrect = nCorrect;

                                            this.nWrong = nWrong;

                                            this.pastGuesses = pastGuesses;

                                            this.answer = answer;

                                            this.score = (nCorrect / numberOfGuesses) * 100;


                                        }
                                    }

                                    let round = new gameData(this.state.outcome, this.state.numberOfGuesses, this.state.nCorrect, this.state.nWrong, this.state.pastGuesses, this.state.answer);

                                    let originalPastGamesLength = this.state.pastGames.length;

                                    let newPastGames = this.state.pastGames;

                                    newPastGames.push(round);

                                    if ((originalPastGamesLength + 1) === newPastGames.length){

                                        resolve(newPastGames);

                                    }

                                    else {

                                        reject('newPastGame')


                                    }



                                })




                            }


                            updatePastGames()
                                .then((newPastGames) => {


                                    this.setState({pastGames: newPastGames})




                                });






                            this.setState({
                                nCorrect: this.state.nCorrect + 1,

                                answerMap: answerMapClone,

                                numberOfGuesses: this.state.numberOfGuesses + 1,

                                pastGuesses: newArr,

                                outComeMessage: 'You won, good job :)',

                                outcome: 'WON',

                                cont: false,

                                gameFinished: true,



                            });

                            this.handleContinue();


                        }

                        else {


                            this.setState({

                                nCorrect: this.state.nCorrect + 1,

                                numberOfGuesses: this.state.numberOfGuesses + 1,

                                pastGuesses: newArr
                            });


                        }


                    }

                }

            };

            console.log('event.target.value is...' + event.target.value);

            console.log('You entered the letter...' + this.state.guess);

            updateValues(this.state.guess);

            console.log('The state is..' + this.state);

            console.log('this.pastGuesses is...' + this.state.pastGuesses);


        }


    }


    render() {
        return (

            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact render={() => {

                          return ( <InfoBar  hangMan={this.state.hangMan} answerMap={this.state.answerMap}
                                      notification={this.state.notification} handleContinue={this.handleContinue}
                                      handleSubmit={this.handleSubmit} handleGuess={this.handleGuess}
                                      livesLeft={this.state.livesLeft} gameFinished={this.state.gameFinished}
                                      correctAmount={this.state.correctAmount} outComeMessage={this.state.outComeMessage}
                                      nWrong={this.state.nWrong} pastGuesses={this.state.pastGuesses}
                                      numberOfGuesses={this.state.numberOfGuesses} nCorrect={this.state.nCorrect}
                                      answer={this.state.answer}/> )



                        }} />


                        <Route path={'/leaderboards'} render={() => {


                            return (


                                <ScoreList pastGames={this.state.pastGames}/>

                            )



                        }} />

                    </Switch>
                </div>
            </Router>
















    );
    }
}







export default Play
