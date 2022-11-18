import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  padding: 0 30px;
  /* position: relative; */
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
