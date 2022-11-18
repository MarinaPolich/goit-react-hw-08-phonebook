import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormBox = styled(Form)`
  margin-bottom: 30px;
  padding: 30px;
  background-color: #fcfeffd4;
  color: var(--primary-text-color);
  border: 1px solid var(--input-text-color);
  border-radius: 10px;
  font-size: 20px;
  width: 500px;
  line-height: 1.2;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 5px;
`;

export const Input = styled(Field)`
  display: block;
  width: 400px;
  height: 50px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid var(--input-text-color);
  border-radius: 4px;
  line-height: 2;
  transition: all 250ms linear;
  cursor: pointer;

  &:hover,
  :focus {
    border: 1px solid var(--acent-color);
  }
`;
export const FormBtn = styled.button`
  padding: 5px 24px;
  margin-top: 30px;
  border: 1px solid var(--acent-color);
  border-radius: 10px;
  font-size: 20px;
  line-height: 1.8;
  background-color: #fff;
  color: var(--acent-color);
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    background-color: var(--acent-color);
    color: var(--container-bg-color);
  }
`;
