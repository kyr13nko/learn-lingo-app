import { useState } from "react";

import heartNormal from "../../../assets/images/heart-normal.svg";
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
  Info,
  InfoList,
  InfoButton,
  Avatar,
  ReviewerInfo,
} from "./TeachersItem.styled";
import Modal from "../../Modal/Modal";
import TrialForm from "../../Forms/TrialForm/TrialForm";

const TeachersItem = ({ teacher }) => {
  const [readMore, setReadMore] = useState(false);
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

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

  const handleClickToFavorite = () => {
    setIsFavorite(!isFavorite);
  };

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
          <Info>
            <InfoList>
              <li>
                <svg>
                  <use href={`${sprite}#book-open`}></use>
                </svg>
                <p>Lessons online</p>
              </li>
              <li>
                <p>Lessons done: {lessons_done}</p>
              </li>
              <li>
                <svg>
                  <use href={`${sprite}#rating`}></use>
                </svg>
                <p>Rating: {rating}</p>
              </li>
              <li>
                <p>
                  Price / 1 hour: <span>{price_per_hour}$</span>
                </p>
              </li>
            </InfoList>
            {!isFavorite ? (
              <InfoButton type="button" onClick={handleClickToFavorite}>
                <svg>
                  <use href={`${sprite}#heart-normal`} />
                </svg>
              </InfoButton>
            ) : (
              <InfoButton type="button" onClick={handleClickToFavorite}>
                <svg>
                  <use href={`${sprite}#heart-checked`} />
                </svg>
              </InfoButton>
            )}
          </Info>

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
                    <Avatar>{reviewer_name.charAt(0)}</Avatar>
                    <ReviewerInfo>
                      <Text>{reviewer_name}</Text>
                      <div>
                        <svg>
                          <use href={`${sprite}#rating`}></use>
                        </svg>
                        <p>{reviewer_rating}.0</p>
                      </div>
                    </ReviewerInfo>
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
          <TrialForm teacher={teacher} />
        </Modal>
      )}
    </>
  );
};

export default TeachersItem;
