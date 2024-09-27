import React from 'react';
import { CountriesData } from './MockData/Data';
import Game from './Components/Game';
import './CountryCapitalGame.css';

const CountryCapitalGame = () => {
  return (
    <div  className="country-capital-game">
      <h1>Build Country Capital Game | Microsoft Frontend Interview Question | JavaScript | React.js</h1>
      <p>Guess the capital of a country!</p>
      <a target='_blank' href='https://devtools.tech/questions/s/build-country-capital-game-or-microsoft-frontend-interview-question-or-javascript-or-react-js---qid---yPb5g7MLCSf6j2F3qjqj'>
      https://devtools.tech/questions/s/build-country-capital-game-or-microsoft-frontend-interview-question-or-javascript-or-react-js---qid---yPb5g7MLCSf6j2F3qjqj
      </a>
      <Game data = {CountriesData}/>
    </div>
  )
}

export default CountryCapitalGame