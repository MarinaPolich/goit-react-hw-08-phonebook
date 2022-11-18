import styled from 'styled-components';

export const UserMenuBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const LogOutBtn = styled.button`
  margin-left: 15px;
  background-color: var(--acent-color);
  color: var(--container-bg-color);
  padding: 8px 12px;
  border: 1px solid var(--acent-color);
  border-radius: 4px;
  transition: all 250ms linear;

  &:hover,
  :focus {
    background-color: var(--container-bg-color);
    color: var(--acent-color);
  }
`;

export const UserEmail = styled.p`
  display: inline-block;
  margin-left: 10px;
  font-weight: 500;
`;

export const ImgAvatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 13px 3px rgba(7, 98, 140, 0.54);
  -moz-box-shadow: 0px 0px 13px 3px rgba(7, 98, 140, 0.54);
  box-shadow: 0px 0px 13px 3px rgba(7, 98, 140, 0.54);
`;
