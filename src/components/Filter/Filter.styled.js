import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  width: 400px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: block;
  width: 400px;
  height: 50px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fcfeffd4;
  border: 1px solid var(--input-text-color);
  border-radius: 4px;
  font-size: 20px;
  width: 400px;
  line-height: 1.2;
  transition: all 250ms linear;
  cursor: pointer;

  &:hover,
  :focus {
    border: 1px solid var(--acent-color);
  }
`;
