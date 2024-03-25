import { Section } from "../../styles/GlobalStyles";
import { HomeContainer, Item, List, Span, Text } from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomeContainer>
      <Section>
        <div></div>
        <List>
          <Item>
            <Span>32,000</Span>
            <Text>Experienced tutors</Text>
          </Item>
          <Item>
            <Span>300,000</Span>
            <Text>5-star tutor reviews</Text>
          </Item>
          <Item>
            <Span>120</Span>
            <Text>Subjects taught</Text>
          </Item>
          <Item>
            <Span>200</Span>
            <Text>Tutor nationalities</Text>
          </Item>
        </List>
      </Section>
    </HomeContainer>
  );
};

export default HomePage;
