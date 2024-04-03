import styled from "styled-components"
import DownloadCV from "./DownloadCv"

const Container = styled.div`
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
    width: 100%;
  }
`
const Title = styled.h1`
  background: linear-gradient(to bottom, #ffcc33 50%, #ffffff 50%);
  -webkit-background-clip: text;
  color: transparent;
`
const SubTitle = styled.h3`
max-width: 100%;
color:#ffffff;
font-weight: 300;
margin-bottom: 3rem;
`
const PresentationText = () => {

    return (
        <Container>
            <Title>
                I AM WELINSON MARLON , <br /> DESENVOLVEDOR FULL STACK
            </Title>
            <SubTitle>
                Olá, sou Welinson Marlon, Desenvolvedor Full Stack apaixonado por inovação digital. Com experiência em diversas tecnologias, estou comprometido em criar soluções eficientes e intuitivas. Minha abordagem centrada no usuário visa proporcionar experiências excepcionais. Estou pronto para enfrentar desafios e transformar ideias em realidade.
            </SubTitle>
            <DownloadCV/>
        </Container>
    )
}

export default PresentationText