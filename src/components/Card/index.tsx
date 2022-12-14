import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://mentorama.com.br/blog/wp-content/uploads/2021/12/capa-web_dev-blog-mentorama-1536x525.jpg'/>
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/91505691?s=96&v=4' />
          <div>
            <h4>Pablo Henrique</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito o curso de HTML e CSS no bootcamp dio no Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#html #css #javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card };
