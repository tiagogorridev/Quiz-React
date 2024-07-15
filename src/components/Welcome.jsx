import React from 'react'
import Quiz from '../img/quiz.svg'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Welcome.css'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext) //quizstate: pega os valores do quiz; dispatch: atualiza os estados dos valores

  return (
    <div id='welcome'>
        <h2>Seja bem vindo...</h2>
        <p>Clique o botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz"/>
    </div>
  )
}

export default Welcome