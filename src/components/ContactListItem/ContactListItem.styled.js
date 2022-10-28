import styled from 'styled-components';

export const Item = styled.li`
  font-size: 24px;
  margin-bottom: 10px;
  line-height: 1.2;
`;

export const ContactBtn = styled.button`
  padding: 2px 10px;
  background-color: #fff;
  margin-left: 10px;
  border: 1px solid #a7a3a3;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.2;
  cursor: pointer;

  &:hover,
  :focus {
    background-color: #126deb;
    color: #fff;
  }
`;
