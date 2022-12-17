import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Wrapper = styled.div`
  max-width: 300px;
`
export const ErrorText = styled.p`
  color: #AA0000;
  font-size: 14px;
`
export const Column = styled.div`
  flex: 1;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`
export const Title = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #FFF;
`
export const TitleCadastro = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
`
export const SubTitleCadastro = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`
export const PoliticasText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin: 20px 0;

  color: #ffffff;
`
export const JaTenhoContaText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #ffffff;
`
export const Link = styled.a`
   margin-left: .5rem;
   font-family: 'Open Sans', sans-serif;
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 19px;
   cursor: pointer;
   align-self: center;
   transition: 200ms;
   outline: 1px solid transparent;

   color: #2ccb1d;
   border-radius: 5px;

   &:hover {
      background: #ffffff;
      color: #1e192c;
      border-radius: 5px;
      align-self: center;
   }
`