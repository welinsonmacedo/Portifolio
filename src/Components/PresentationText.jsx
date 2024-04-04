import styled from "styled-components"
import DownloadCV from "./DownloadCv"

const Container = styled.div`
max-width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
@media (max-width: 768px) {
    width: 100%;
  }
`
const Title = styled.h2`
  background: linear-gradient(to bottom, #260672 50%, #000000 50%);
  -webkit-background-clip: text;
  color: transparent;
`
const SubTitle = styled.h5`
max-width: 100%;
color:#000000;
font-weight: 300;
margin-bottom: 3rem;
text-align: justify;
`
const PresentationText = () => {

    return (
        <Container>
            <Title>
            I AM WELINSON MARLON , <br /> DESENVOLVEDOR FULL STACK
            </Title>
            <SubTitle>
                Olá, sou Welinson Marlon, Desenvolvedor Full Stack apaixonado por inovação digital. <br/> Com experiência em diversas tecnologias, estou comprometido em criar soluções eficientes e intuitivas.<br/> Minha abordagem centrada no usuário visa proporcionar experiências excepcionais. <br/>Estou pronto para enfrentar desafios e transformar ideias em realidade.
            </SubTitle>
            <DownloadCV/>
        </Container>
    )
}

export default PresentationText