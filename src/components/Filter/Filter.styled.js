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
  border: 1px solid #a7a3a3;
  border-radius: 4px;
  font-size: 28px;
  line-height: 2;
  cursor: pointer;

  &:hover,
  :focus {
    border: 1px solid #126deb;
  }
`;
