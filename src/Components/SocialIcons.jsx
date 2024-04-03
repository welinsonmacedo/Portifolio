
import styled from 'styled-components';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 25px;
`;

const SocialLink = styled.a`
  color: #c7b8b8;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const SocialIcons = () => {
  return (
    <SocialLinksContainer>
      <SocialLink href="https://www.linkedin.com/in/welinson-marlon/" target="_blank">
        <FaLinkedin />
      </SocialLink>
      <SocialLink href="https://wa.me/5534991448794" target="_blank">
        <FaWhatsapp />
      </SocialLink>
      <SocialLink href="https://github.com/welinsonmacedo" target="_blank">
        <FaGithub />
      </SocialLink>
    </SocialLinksContainer>
  );
};

export default SocialIcons;
