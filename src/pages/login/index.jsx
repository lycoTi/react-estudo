import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles'
import { async } from 'q';

const schema = yup.object({
  email: yup.string().email('este email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3,'No mínimo  3 caracteres').required('Campo obrigatrório'),
}).required();

const Login = () => {
  const navigate = useNavigate();


  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async formData => {
    try {
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
      if (data.length === 1) {
        navigate('/feed')
      } else {
        alert('Email ou senha inválido')
      }
    } catch {
      alert("Houve um erro, tente novamente")
    }
  };
    
    return (<>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas
          </Title> 
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu Login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input leftIcon={<MdEmail />} name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" />
              <Input leftIcon={<MdLock />} name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" />
              <Button title="Entrar" variant='secondary'  type="submit"/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>) 
}
export { Login };