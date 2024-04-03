import styled from "styled-components"
import ProfileImg from "../Components/ProfileImg"
import PresentationText from "../Components/PresentationText"
import About from "../Components/About"
import Skills from "../Components/Skills"
import Projects from "../Components/Projects"

const Main = styled.div`
padding: 2rem;
text-align: center;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 2rem;
margin-bottom: 3rem;
min-height: 100vh;

`
const Home =()=>{

    return(
        <Main>
            <Header>
                <ProfileImg/>
                <PresentationText/>
            </Header>
            <About></About>
            <Skills/>
            <Projects/>
        </Main>
    )
}

export default Home