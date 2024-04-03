import styled from "styled-components"


const Container = styled.div`

`
const Title = styled.h1`
 text-align: center;
 background: linear-gradient(to right, #ffcc33 50%, #ffffff 10%);
  -webkit-background-clip: text;
  color: transparent;
 
`
const Section = styled.section`
display: flex;
flex-direction: row;
justify-content:flex-start;
align-items: center;
`
const SectionInfo = styled.section`

`


const SubTitle = styled.h3`
color:#ffffff;
`
const Context = styled.p`
color:#ffffff;
`
const Label = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 15px;
color:#ffffff;
`


const About = () => {

    return (
        <Container>
            <Title>
                ABOUT ME
            </Title>
            <Context>
                Como desenvolvedor Fullstack de 25 anos, trilhei um caminho incomum, combinando minha paixão pela tecnologia com determinação e perseverança. Embora ainda não tenha concluído a faculdade, busquei incessantemente conhecimento por meio de uma série de cursos, aprimorando minhas habilidades e ampliando meu repertório técnico. Além de minha jornada profissional, sou também um pai dedicado, equilibrando as demandas do trabalho com o compromisso de criar uma vida familiar plena e satisfatória. Através de minha jornada, aprendi a valorizar cada desafio como uma oportunidade de crescimento, mantendo sempre em mente o objetivo de construir um futuro brilhante para minha família e para mim.</Context>
            <Section>
                <SectionInfo>
                    <SubTitle>PERSONAL INFO</SubTitle>
                    <Label>
                        <h5> Phone:</h5>
                        <Context>(34)9 9144-8794</Context>
                    </Label>
                    <Label>
                        <h5> EMAIL:</h5>
                        <Context>WELINSONMARLON15@GMAIL.COM</Context>
                    </Label>

                    <Label>
                        <h5>JOB STATUS:</h5>
                        <Context>FREELANCER</Context>
                    </Label>



                </SectionInfo>
                
            </Section>

        </Container>
    )
}
export default About 