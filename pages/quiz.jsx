/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuestionWidget from '../src/components/QuestionWidget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h3>
          Carregando...
        </h3>
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setSecreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const question = db.questions[currentQuestion];

  /*
  atualizado === willUpdate
  morre === willUnmount
  */

  React.useEffect(() => {
    // fetch()...
    setTimeout(() => {
      setSecreenState(screenStates.QUIZ);
    }, 0.5 * 1000);
    // nasce ===didMount
  }, []);

  function handleSubmit() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmit}
        />
        )}
        { screenState === screenStates.LOADING && <LoadingWidget />}

        { screenState === screenStates.RESULT && <div>vc acertou x questoes haha</div>}
      </QuizContainer>
    </QuizBackground>
  );
}
