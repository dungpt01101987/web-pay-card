import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  color: var(--SECONDARY-default);
  font-size: ${props => props?.fontSize || "12px"};
  &:hover {
    color: var(--PRIMARY-hover)
  }
`;