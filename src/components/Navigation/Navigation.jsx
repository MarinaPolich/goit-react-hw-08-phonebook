import { StyledLink } from 'components/AuthNav/AuthNav.styled';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
