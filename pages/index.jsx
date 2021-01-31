import React from 'react';
import { useRouter } from 'next/router';

import Input from '../src/components/Input';
import Button from '../src/components/Button';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>Quiz dos Simpsons</h1>
          </Widget.Header>

          <Widget.Content>

            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              // router manda para a próxima página
            }}
            >
              <p>
                Teste seus conhecimentos sobre o famoso universo dos
                Simpsons e divirta-se com o nosso quiz ;)
              </p>
              <Input
                name="nomeDoUsuario"
                placeholder="Digite seu nome aki o_O"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Vamos jogar ${name}?`}
              </Button>
            </form>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>The legend of Zelda</h1>
            <p>lorem sit lorum sip...</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/GustavoBelo" />
    </QuizBackground>
  );
}
