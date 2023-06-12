import React, { useState } from 'react';
import "./MMSE.css";

const MMSE = () => {
  const [answers, setAnswers] = useState(Array(10).fill(null));

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the answers, such as calculate a score
    console.log('Answers:', answers);
  };

  return (
    <div>
      <h3>MMSE Test</h3>
      <h2>Orientación Temporal</h2>
      <form onSubmit={handleSubmit}>
        <ol>
          <li>
            <label>
            ¿Qué día es hoy?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            ¿Qué fecha es hoy?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            ¿En que mes estamos?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            ¿En que estación estamos?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            ¿En que año estamos?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <h2>Orientación Espacial</h2>
          <li>
            <label>
            ¿En que lugar estás?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            ¿En que piso estás?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            ¿En que ciudad estás?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            ¿En que estado estás?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            ¿En que nción estás?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <h2>Registro e información</h2>
          <li>
            <label>
            Repite las sigueintes palabras: Cabello, Manzana, Centavo
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            Repite la sigueinte palabra: Cabello 
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            Repite la sigueinte palabra: Manzana 
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            Repite la sigueinte palabra: Centavo
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <h2>Cálculo</h2>
          <li>
            <label>
            Resta desde 100 de 7 en 7 
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <h2>Memoria</h2>
          <li>
            <label>
            ¿Recuerda las 3 palabras que dijiste antes?
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <h2>Lenguaje</h2>
          <li>
            <label>
            Reconoce y nombra dos objetos
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <li>
            <label>
            Repita la frase "Ni no, no sí, ni pero"
              <input
                type="radio"
                name="q1"
                value="yes"
                checked={answers[0] === 'yes'}
                onChange={() => handleAnswerChange(0, 'yes')}
              />{' '}
              1
              <input
                type="radio"
                name="q1"
                value="no"
                checked={answers[0] === 'no'}
                onChange={() => handleAnswerChange(0, 'no')}
              />{' '}
              0
            </label>
          </li>
          <h2>Adicionales</h2>








          
          
          
          
          
          
        </ol>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MMSE;
