import styled from 'styled-components';
import { Form } from 'antd';

export const ContentAuth = styled.div`
  background: #fff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  display: block;
  flex-shrink: 0;
  margin: 10 10 10 10;
  min-height: 0;
  width: 500px;
  font-size: 14px;
`;

export const FormContainer = styled.div`
  width: 350px;
  margin: 0 auto;
`;

export const TitleAuthentication = styled.p`
  font-family: 'inter-semibold', sans-serif;
  font-weight: 600;
  font-size: 26px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
  color: var(--PRIMARY-default);
`;

export const FormItemStyled = styled(Form.Item)`
  margin-bottom: ${(props) =>
    props?.marginbottom ? props.marginbottom : '30px'};
`;