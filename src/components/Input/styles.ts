import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;  
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #383450;
  margin: 10px 0;

  display: flex;
  align-items: center;
`

export const IconContainer = styled.div`
  margin-right: 10px;
  margin-top: 3px;
`

export const InputText = styled.input`
  background-color: transparent;
  color: #ffffff;
  flex: 1;
  border: 0;
  height: 30px;
  border-radius: 3px;
  padding: 0 10px;
`
export const ErrorText = styled.p`
  color: #AA0000;
  font-size: 12px;
  margin: 0px 0 10px;
`