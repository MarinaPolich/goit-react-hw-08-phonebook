import { StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Доєднатися</StyledLink>
      <StyledLink to="/login">Завітати</StyledLink>
    </div>
  );
};
