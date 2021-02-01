/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';

import Widget from '../Widget';

export default function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>Tela de Resultado \o/</h1>
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {/* ${results.reduce((currentSummation, currentResult) => {
            const isRight = currentResult === true;
            if (isRight) return currentSummation + 1;
            return currentSummation;
          }, 0)} */}
          {` ${results.filter((x) => x).length}
          questões`}

        </p>
        <ul>
          {results.map((results, index) => (
            <li key={`result__${results}`}>
              {` ${index + 1} Resultado:
               
              ${results === true ? 'Acertou' : 'Errou'}`}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
