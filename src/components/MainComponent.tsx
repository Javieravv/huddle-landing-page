import { Container } from "react-bootstrap"
import { ContentPage, FooterComponent, HeaderComponent, NavBar } from "."

export const MainComponent = () => {
  return (
    <main>
      <Container
        className="header-main pt-1"
        fluid={true}
      >
          <NavBar />
          <HeaderComponent />
      </Container>
      <ContentPage />
      <FooterComponent />
    </main>
  )
}
