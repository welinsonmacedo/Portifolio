
import {styled, keyframes } from 'styled-components';
import ProfileImg from "../Components/ProfileImg";
import PresentationText from "../Components/PresentationText";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import SocialIcons from "../Components/SocialIcons";

const animateStars = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const StarsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: #fff;
  animation: ${animateStars} 10s linear infinite;
`;

const generateRandomPosition = () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  return `${x}% ${y}%`;
};

const generateStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star key={i} style={{ left: generateRandomPosition() }} />);
  }
  return stars;
};

const Main = styled.div`
  padding: 1rem;
  padding-top: 3rem;
  text-align: center;
`;

// eslint-disable-next-line react/prop-types
const Home = ({ numStars }) => {
  return (
    <div>
      <StarsContainer>
        {generateStars(numStars)}
      </StarsContainer>
      <Main>
        <ProfileImg />
        <PresentationText />
        <SocialIcons />
        <About />
        <Skills />
        <Projects />
        <SocialIcons />
      </Main>
    </div>
  );
};

export default Home;
