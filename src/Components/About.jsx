import styled from "styled-components"


const Container = styled.div`
 padding: 50PX;
`
const Title = styled.h1`
 text-align: left;
 background: linear-gradient(to left, #260672 95%, #000000 0%);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 3rem;
 
`





const Context = styled.p`
color:#000000;
text-align: left;
font-size: 23px;
font-weight: 100;
@media (max-width: 768px) {

    font-size: 12px;
}
`

const Section = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 5px;

`


const About = () => {

    return (
        <Container>
            <Title>
                ABOUT ME
            </Title>
            <Section>
                

        
                <Context>
                    Como desenvolvedor Fullstack de 25 anos, trilhei um caminho incomum, combinando minha paixão pela tecnologia com determinação e perseverança.<br/> Embora ainda não tenha concluído a faculdade, busquei incessantemente conhecimento por meio de uma série de cursos, aprimorando minhas habilidades e ampliando meu repertório técnico.<br/> Além de minha jornada profissional, sou também um pai dedicado, equilibrando as demandas do trabalho com o compromisso de criar uma vida familiar plena e satisfatória.<br/> Através de minha jornada, aprendi a valorizar cada desafio como uma oportunidade de crescimento, mantendo sempre em mente o objetivo de construir um futuro brilhante para minha família e para mim.
                </Context>
            </Section>




        </Container>
    )
}
export default About 