import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import defaultUser from '../../images/gus3.svg';
import {
  ImgAvatar,
  LogOutBtn,
  UserEmail,
  UserMenuBox,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  const avatar = defaultUser;
  return (
    <UserMenuBox>
      <ImgAvatar src={avatar} alt="avatar" width="42" />
      <UserEmail>{email}</UserEmail>
      <LogOutBtn
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </LogOutBtn>
    </UserMenuBox>
  );
};
