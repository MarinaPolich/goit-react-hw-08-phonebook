import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { BoxLog } from './Login/Login.styled';

const Register = () => {
  return (
    <BoxLog>
      <h1>Доєднатися</h1>
      <RegisterForm />
    </BoxLog>
  );
};

export default Register;
