import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-right: 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--primary-text-color);
  font-size: 20px;
  font-weight: 700;
  transition: all 250ms linear;

  &.active {
    color: var(--acent-color);
  }

  &:hover,
  :focus {
    color: var(--acent-color);
  }
`;
