import { ReactNode } from "react";
import { Container, HeaderContainer, SidebarContainer, MainContainer, FooterContainer } from "./styles";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        <MainContainer>
          {children}
        </MainContainer>

        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </>
  );
};
