// import { Link } from 'react-router-dom'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
// import { inputContainer } from '../../components/Input/styles';
import bannerImage from '../../assets/banner.png'
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight } from './styles'
import { Card } from '../../components/Card';

const Feed = () => {
    return (<>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># Ranking 5 top da semana</TitleHighlight>
          <UserInfo percentual={80} nome="Tiago Henrique" image="https://avatars.githubusercontent.com/u/91505691?s=96&v=4"/>
          <UserInfo percentual={70} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/91505691?s=96&v=4"/>
          <UserInfo percentual={43} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/91505691?s=96&v=4"/>
          <UserInfo percentual={20} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/91505691?s=96&v=4"/>
          <UserInfo percentual={24} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/91505691?s=96&v=4"/>
          <UserInfo percentual={10} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/91505691?s=96&v=4"/>
        </Column>
      </Container>
    </>) 
}
export { Feed };