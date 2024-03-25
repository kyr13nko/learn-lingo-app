import { useState } from "react";

import sprite from "../../../assets/images/sprite.svg";
import {
  Content,
  ImageWrapper,
  Image,
  Item,
  Online,
  Text,
  TeacherName,
  InfoWrapper,
  Upper,
  ReadMoreButton,
  LevelsList,
  ReadMoreContent,
  Exp,
  Reviewer,
  ReviewerWrapper,
  TrialButton,
} from "./TeachersItem.styled";
import Modal from "../../Modal/Modal";
import TrialForm from "../../Forms/TrialForm/TrialForm";

const TeachersItem = ({ teacher }) => {
  const [readMore, setReadMore] = useState(false);
  const [showTrialModal, setShowTrialModal] = useState(false);

  const {
    avatar_url,
    conditions,
    experience,
    languages,
    lesson_info,
    lessons_done,
    levels,
    name,
    price_per_hour,
    rating,
    reviews,
    surname,
  } = teacher;

  const toggleTrialModal = () => {
    setShowTrialModal(!showTrialModal);
  };
  return (
    <>
      <Item>
        <ImageWrapper>
          <Online />
          <Image src={avatar_url} alt={`avatar of ${name} ${surname}`} />
        </ImageWrapper>
        <InfoWrapper>
          <Content>
            <Text>Languages</Text>
            <TeacherName>{`${name} ${surname}`}</TeacherName>
            <p>
              <Text>Speaks: </Text> <Upper>{languages.map((item) => item).join(", ")}</Upper>
            </p>
            <p>
              <Text>Lesson Info: </Text> {lesson_info}
            </p>
            <p>
              <Text>Conditions: </Text> {conditions}
            </p>
          </Content>

          {!readMore && (
            <ReadMoreButton type="button" onClick={() => setReadMore(!readMore)}>
              Read more
            </ReadMoreButton>
          )}

          {readMore && (
            <ReadMoreContent>
              <Exp>{experience}</Exp>
              {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
                <ReviewerWrapper key={index}>
                  <Reviewer>
                    <Text>{reviewer_name}</Text>
                    <svg>
                      <use href={`${sprite}#icon-star`}></use>
                    </svg>
                    <p>{reviewer_rating}.0</p>
                  </Reviewer>
                  <p>{comment}</p>
                </ReviewerWrapper>
              ))}
            </ReadMoreContent>
          )}

          <LevelsList>
            {levels.map((item, index) => (
              <li key={index}>{<p>#{item}</p>}</li>
            ))}
          </LevelsList>

          {readMore && (
            <TrialButton type="button" onClick={toggleTrialModal}>
              Book trial lesson
            </TrialButton>
          )}
        </InfoWrapper>
      </Item>

      {showTrialModal && (
        <Modal
          onClose={toggleTrialModal}
          title="Book trial lesson"
          text="Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
        >
          <TrialForm />
        </Modal>
      )}
    </>
  );
};

export default TeachersItem;
