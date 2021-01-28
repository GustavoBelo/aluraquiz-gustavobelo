import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'


const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
`

export const QuizContainer = styled.div`
  margin: auto;
  max-width: 350px;
  padding-top: 45px;
  width: 100%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return ( 
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          
          <Widget.Content>
            <p>lorem sit lorum sip...</p>
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

      <GitHubCorner projectUrl = "https://github.com/GustavoBelo"/>
    </QuizBackground>    
    )
}
