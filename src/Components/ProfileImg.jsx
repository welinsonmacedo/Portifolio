
import styled from "styled-components"

const Image = styled.img`
width: 350px;
object-fit: cover;
position: relative;
top: -40px;
border-radius: 10px;
`
const Container = styled.div`
width: 280px;
height: 415px;
margin-top: 2rem;
background-color: #f7db15;
padding: 1rem;
border-radius: 0 0 20px  0;
`

const ProfileImg = () => {

    return (
        <Container>
            <Image src='profile.jpg' />
        </Container>

    )
}
export default ProfileImg