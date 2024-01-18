import styled from 'styled-components';
import { Form, Input } from 'antd';
import { TextCenter } from 'style/styleComponent/styled';

export const FormItemStyled = styled(Form.Item)`
  margin-bottom: ${(props) => props?.marginbottom || '30px'};

  .ant-form-item-explain-error {
    &:not(:first-child) {
      display: none;
    }
  }
`;

export const TextAlignCenter = styled(TextCenter)`
  margin-top: 15px;
`;

export const InputStyled = styled(Input)`
  height: 44px;
  font-size: 14px;
`;
