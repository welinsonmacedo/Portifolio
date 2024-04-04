import styled from "styled-components"
import CardProject from "./Card"


const Container = styled.div`
 padding: 10px;
`
const ContainerProjects = styled.div`
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 3rem;
`
const Title = styled.h1`
 text-align: left;
 background: linear-gradient(to left, #260672 95%, #000000 0%);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 3rem;
 
`



const Projects = () => {

    return (
        <Container>
            <Title>
                PROJECTS
            </Title>
            <ContainerProjects>
                <CardProject
                    title='Financial Control'
                    description='This is a multiplatform web android app: Financial control app'
                    img='FINANCIALCONTROLL.png'
                    srcproject='https://wmcontrolefinanceiro1-0.netlify.app/'
                    srcgithub='https://github.com/welinsonmacedo/React-Native-Financial-Control'
                />
                <CardProject
                    title='receiptproject'
                    description='System to generate receipts for transport, deliveries and trips'
                    img='receipts.png'
                    srcproject='https://receiptproject.vercel.app/home'
                    srcgithub='https://github.com/welinsonmacedo/receiptproject'
                />
            </ContainerProjects>


        </Container>
    )
}
export default Projects