import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';

import { Column, Container, SubTitleCadastro, TitleCadastro, ErrorText, Link, JaTenhoContaText, PoliticasText, Row, Title, Wrapper } from './styles'

import { IFormData } from './types';

const schema = yup.object({
   email: yup.string().email('este email não é válido').required('Campo obrigatório'),
   password: yup.string().min(3, 'No mínimo  3 caracteres').required('Campo obrigatrório'),
}).required();

const Cadastro = () => {
   const navigate = useNavigate();


   const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: 'onChange'
   });

   const onSubmit = async (formData: IFormData) => {
      try {
         const { data } = await api.post(`/users?email=${''}&senha=${''}`);
         if (data.length === 1) {
            navigate('/feed')
         } else {
            alert('Email ou senha inválido')
         }
      } catch {
         alert("Houve um erro, tente novamente")
      }
   };
   const navegar = () => {
      navigate('/login')
   }

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
               <TitleCadastro>Comece agora grátis</TitleCadastro>
               <SubTitleCadastro>Crie sua conta e make the change._</SubTitleCadastro>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <Input leftIcon={<MdPerson />} name="name" control={control} placeholder="Nome completo" />
                  <Input leftIcon={<MdEmail />} name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" />
                  <Input leftIcon={<MdLock />} name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" />
                  <Button title="Criar Minha Conta" variant='secondary' type="submit" />
               </form>
               <Column>
                  <PoliticasText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PoliticasText>
                  <Row>
                     <JaTenhoContaText>Já tenho conta</JaTenhoContaText>
                     <Link onClick={navegar}>Fazer Login</Link>
                  </Row>
               </Column>
            </Wrapper>
         </Column>
      </Container >
   </>)
}
export { Cadastro };