import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'

import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture
} from './styles'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
            <BuscarInputContainer>
              <Input placeholder='Buscar...' />
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
          </>) : null}
          
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/91505691?s=96&v=4' />
          ) : (<>
            <MenuRight href='/#'>Home</MenuRight>
            <Button title="Entrar" variant="primary"/>
            <Button title="Cadastrar" variant="primary" />
          </>)}
          
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
