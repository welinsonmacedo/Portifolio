import styled from "styled-components"
import DownloadCV from "./DownloadCv"

const Container = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`

const Title = styled.h2`
  background: linear-gradient(to bottom, #260672 50%, #000000 50%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2rem;
  text-align: center;
`

const SubTitle = styled.h5`
  max-width: 100%;
  color: #333333;
  font-weight: 300;
  margin: 2rem 0;
  text-align: center;
  line-height: 1.5;
`

const PresentationText = () => {
    return (
        <Container>
            <Title>
              I AM WELINSON MARLON <br /> DESENVOLVEDOR FULL STACK
            </Title>
            <SubTitle>
                Olá, sou Welinson Marlon, um Desenvolvedor Full Stack apaixonado por inovação digital. Com experiência em diversas tecnologias, estou comprometido em criar soluções eficientes e intuitivas. Minha abordagem centrada no usuário visa proporcionar experiências excepcionais. Estou pronto para enfrentar desafios e transformar ideias em realidade.
            </SubTitle>
            <DownloadCV/>
        </Container>
    )
}

export default PresentationText
