import React, { Component } from 'react'
import FlagQuestion, {QuestionStates} from './FlagQuestion.js'
import shuffle from 'shuffle-array'

export default class CountryGame extends Component {
  constructor(props){
    super(props)
    this.state={
      countries: [],
      options: [],
      correctOption: undefined,
      quesionState: undefined,
    }
    this.onGuess = this.onGuess.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
  }
  componentWillMount(){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(rep => rep.json())
    .then(countries => {
      const correctOption = Math.floor(Math.random() * countries.length);
      const options = this._getOptions(correctOption, countries);
      this.setState({
        countries,
        correctOption,
        options,
        quesionState: QuestionStates.QUESTION,
      })
    })
    .catch(console.warn)
  }
  onGuess(answer){
    const {correctOption} = this.state;
    let questionState = answer === correctOption ? QuestionStates.ANSWER_CORRECT : QuestionStates.ANSWER_WRONG;
    this.setState({
      quesionState
    });
  }
  nextQuestion(){
    const {countries} = this.state;
    const correctOption =Math.floor(Math.random()*countries.length);
    const option = this._getOptions(correctOption, countries);
    this.setState({
      correctOption,
      options,
      quesionState: QuestionStates.QUESTION
    })
  }
  _getOptions(correctOption, countries){
    let options = [correctOption];
    let tries = 0;
    while(options.length > 4 && tries < 15  ){
      let option = Math.floor(Math.random() * countries.length)
      if(options.indexOf(option) === -1){
        option.push(option);
      } else {
        tries++;
      }
    }
    return shuffle(options);
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
