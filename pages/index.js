import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GithubCorner'
import QuizBackground from '../src/components/QuizBackground'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Charlie Quiz Jr - Quiz do CBJr!</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Charlie Brown Jr</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Tic prei Tic prau, Charlie Brau</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>

          </Widget.Header>
          <Widget.Content>
            <h1>Quizes da galerar</h1>
            <p>Eu vim de Santos!</p>
          </Widget.Content>
        </Widget>
        <Footer>

        </Footer>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jessicasimplicio"/>
    </QuizBackground>
  );
  
  <Title>My page</Title>
}
