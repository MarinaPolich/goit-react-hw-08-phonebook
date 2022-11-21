import styled from 'styled-components';

export const Main = styled.main`
  height: calc(100vh - 80px);
  overflow: auto;
  margin: 0 auto;
  padding: 40px 30px 0px 30px;
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  /* position: absolute; */
  top: 0;
  left: 0;
  margin-bottom: 60px;
  padding: 24px 0 10px 0;
  border-bottom: 1px solid var(--primary-text-color);
`;
