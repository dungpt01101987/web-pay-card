import styled from 'styled-components';

export const FormMessageStyled = styled.div`
  margin-top: 8px;
  margin-bottom: ${(props) => props?.marginBottom || 'unset'};
  font-size: 12px;
  font-family: 'inter-regular', sans-serif;
  font-weight: 300;
`;