import React, { ReactNode } from "react";
import { Container, HeaderContainer, SidebarContainer, MainContainer, FooterContainer } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container>
        <HeaderContainer>
          <p>Header</p>
        </HeaderContainer>

        <SidebarContainer>
          <p>Sidebar</p>
        </SidebarContainer>

        <MainContainer>
          {children}
        </MainContainer>

        <FooterContainer>
          <p>Footer</p>
        </FooterContainer>
      </Container>
    </>
  );
};
