import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormBox = styled(Form)`
  width: 500px;
  padding: 30px;
  border: 1px solid #000;
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
export const FormBtn = styled.button`
  padding: 5px 24px;
  margin-top: 30px;
  border: 1px solid #a7a3a3;
  border-radius: 10px;
  font-size: 20px;
  line-height: 1.8;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #126deb;
    color: white;
  }
`;
