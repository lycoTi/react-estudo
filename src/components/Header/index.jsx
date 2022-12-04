import React from 'react'
// import logo from '../../assets/logo-dio.png'
import {Button} from '../Button'
import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input
} from './styles'

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          {/* <img src={logo} alt="Logo da dio" /> */}
          <BuscarInputContainer>
            <Input placeholder='Buscar...' />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
