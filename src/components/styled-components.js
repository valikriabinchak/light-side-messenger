import styled from 'styled-components';

export const Body = styled.div`
    background-color: ${({ theme }) => theme.body};
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.containerBg};
  color: ${({ theme }) => theme.labelText};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.btnBg};
  color: ${({ theme }) => theme.btnText};
`;

export const LabelField = styled.label`
  color: ${({ theme }) => theme.labelText};
`;

export const InputField = styled.input`
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.labelText};
`;