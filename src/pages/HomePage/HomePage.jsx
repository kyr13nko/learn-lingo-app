import Hero from "../../components/Home/Hero/Hero";
import Statistics from "../../components/Home/Statistics/Statistics";

import { HomeContainer, HomeSection } from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomeContainer>
      <HomeSection>
        <Hero />
        <Statistics />
      </HomeSection>
    </HomeContainer>
  );
};

export default HomePage;
