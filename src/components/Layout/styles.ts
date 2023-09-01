import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';
  height: 100vh;
`;

export const HeaderContainer = styled.header`
  background-color: #a12515;
  grid-area: header;
`;

export const SidebarContainer = styled.aside`
  grid-area: sidebar;
`;

export const MainContainer = styled.main`
  background-color: #f9fafb;
  grid-area: main;
`;

export const FooterContainer = styled.footer`
  background-color: #111827;
  grid-area: footer;
`;
