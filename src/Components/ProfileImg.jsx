import styled from "styled-components"

const Image = styled.img`
  width: 350px;
  object-fit: cover;
  position: relative;
  top: -28px;
  border-radius: 10px;
  

  @media (max-width: 768px) {
    width: 175px;
  }
`;

const Container = styled.div`
  width: 280px;
  height: 415px;
  margin-top: 2rem;
  background-color: #f7db15;
  padding: 0.2rem;
  border-radius: 0 0 20px 0;

display: block;
margin: 0 auto;
margin-bottom: 4rem;
  @media (max-width: 768px) {
    width: 140px;
    height: 207px;
  }
`;

const ProfileImg = () => {
  return (
    <Container>
      <Image src='profile.jpg' />
    </Container>
  );
};

export default ProfileImg;
