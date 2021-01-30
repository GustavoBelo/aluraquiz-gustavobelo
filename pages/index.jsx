/* eslint-disable no-console */
/* eslint-disable func-names */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
`;

export const QuizContainer = styled.div`
  margin: auto 10%;
  max-width: 350px;
  padding-top: 45px;
  width: 100%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <Title>Os Simpsons</Title>
          </Widget.Header>

          <Widget.Content>

            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('fazendo uma submissão pormeio do react');

              // router manda para a próxima página
            }}
            >
              <p>
                Teste seus conhecimentos sobre o famoso universo dos
                Simpsons e divirta-se com o nosso quiz ;)
              </p>
              <input
                placeholder="Digite seu nome aki o_O"
                onChange={function (infosDoEvento) {
                  setName(infosDoEvento.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Vamos jogar
                {' '}
                {name}
                ?
              </button>
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
