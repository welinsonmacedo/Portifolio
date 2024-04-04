import styled from "styled-components"

const Image = styled.img`
  width: 250px;
  object-fit: cover;
  position: relative;
  top: -28px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 5px #6e67ad;

  @media (max-width: 768px) {
    width: 175px;
    box-shadow: 2px 2px 2px 2px #6e67ad;
  }
`;

const Container = styled.div`
  width: 140px;
  height: 270px;
  margin-top: 2rem;
  background-color:#5c5964 ;
  box-shadow: 10px 20px 25px 30px #5c5964;
  padding: 0.2rem;
  border-radius: 0 0 20px 0;

display: block;
margin: 0 auto;
margin-bottom: 4rem;
  @media (max-width: 768px) {
    width: 140px;
    height: 207px;
    box-shadow: none;
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
