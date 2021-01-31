/* eslint-disable react/prop-types */
import React from 'react';

import Widget from '../Widget';
import Button from '../Button';

export default function QuestionWidget({
  question,
  currentQuestion,
  totalQuestions,
  onSubmit,
}) {
  const questionId = `question__${currentQuestion}`;
  return (
    <Widget>
      <Widget.Header>
        <h1>
          {`Pergunta ${currentQuestion + 1} de ${totalQuestions}`}
        </h1>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button.Confirm type="onSubmit">
            Confirmar
          </Button.Confirm>
        </form>
      </Widget.Content>
    </Widget>
  );
}
