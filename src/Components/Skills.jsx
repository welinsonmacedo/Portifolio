import styled from "styled-components"
import ProgressBarComponent from "./ProgressBar"



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
const ContainerSkills = styled.div`
display:grid;
width: 100%;
grid-template-columns: 1fr 1fr ;
gap:1rem;
margin: 50px 0 50px 0;

`






const Skills = () => {



    return (
        <Container>
            <Title>
                MY SKILLS
            </Title>
            <ContainerSkills>
                <ProgressBarComponent value='95' label='HTML' />
                <ProgressBarComponent value='95' label='CSS' />
                <ProgressBarComponent value='80' label='JAVA SCRIPT' />
                <ProgressBarComponent value='80' label='NODE.JS' />
                <ProgressBarComponent value='70' label='TYPE-SCRIPT' />
                <ProgressBarComponent value='70' label='REACT' />
                <ProgressBarComponent value='60' label='REACT NATIVE ' />
                <ProgressBarComponent value='60' label='NEXT ' />
                <ProgressBarComponent value='80' label='GIT HUB' />
                <ProgressBarComponent value='80' label='GIT' />
                <ProgressBarComponent value='85' label='FIREBASE' />
                <ProgressBarComponent value='65' label='DOCKER' />
                <ProgressBarComponent value='80' label='FIGMA' />
                <ProgressBarComponent value='90' label='NETLIFY' />
                <ProgressBarComponent value='90' label='VERCEL' />
                <ProgressBarComponent value='75' label='EXPO' />
            </ContainerSkills>











        </Container>
    )
}
export default Skills 