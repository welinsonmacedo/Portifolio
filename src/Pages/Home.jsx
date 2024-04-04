
import styled from 'styled-components';
import ProfileImg from "../Components/ProfileImg";
import PresentationText from "../Components/PresentationText";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import SocialIcons from "../Components/SocialIcons";
import NavBar from '../Components/NavBar';

const Main = styled.div`
  padding: 1rem;
 
  text-align: center;
  
`;
const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
gap: 3rem;
padding-top: 2rem;
flex-wrap: wrap;

`;
const ViewVh = styled.div`
padding-top: 5rem;
min-height: 100vh;
`

const Home = () => {
  return (

    <>

      <NavBar />
      <Main>

        <ViewVh id='home'>
          <Header>
            <ProfileImg />
            <PresentationText />

          </Header>
          <SocialIcons />
        </ViewVh>
        <ViewVh id='about'>   <About /></ViewVh>
        <ViewVh id='skills'>   <Skills /></ViewVh>
        <ViewVh id='projects'>  <Projects /></ViewVh>




        <SocialIcons />
      </Main>
    </>


  );
};

export default Home;
