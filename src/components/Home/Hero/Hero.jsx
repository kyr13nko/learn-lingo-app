import { useNavigate } from "react-router-dom";
import { Content, HeroButton, ImageBlock, Title, Wrapper } from "./Hero.styled";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        <Title>
          Unlock your potential with the best <span>language</span> tutors
        </Title>
        <p>
          Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language
          proficiency to new heights by connecting with highly qualified and experienced tutors.
        </p>
        <HeroButton type="button" onClick={() => navigate("/teachers")}>
          Get started
        </HeroButton>
      </Content>
      <ImageBlock />
    </Wrapper>
  );
};

export default Hero;
