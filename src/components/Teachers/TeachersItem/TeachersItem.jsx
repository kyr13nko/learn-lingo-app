import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFavorites } from "../../../store/favorites/favoritesSelectors";
import { useAuth } from "../../../hooks/useAuth";

import Modal from "../../Modal/Modal";
import TrialForm from "../../Forms/TrialForm/TrialForm";

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
  InfoList,
  Avatar,
  ReviewerInfo,
  HeartBlock,
  HeartSvg,
} from "./TeachersItem.styled";
import { addToFavorite, delFromFavorite } from "../../../store/favorites/favoritesSlice";

const TeachersItem = ({ teacher }) => {
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

  const dispatch = useDispatch();

  const [showTrialModal, setShowTrialModal] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const { isLoggedIn } = useAuth();
  const favorites = useSelector(selectFavorites);

  const handleAddFavorite = () => {
    if (isLoggedIn) {
      dispatch(addToFavorite(teacher));
    } else {
      alert("Please, register or log in to the app!");
    }
  };

  const handleDelFavorite = () => {
    dispatch(delFromFavorite(teacher));
  };

  const toggleTrialModal = () => {
    setShowTrialModal(!showTrialModal);
  };

  const isInFavorite = favorites.find((item) => item.avatar_url === avatar_url);

  return (
    <>
      <Item>
        <HeartBlock>
          {!isInFavorite ? (
            <HeartSvg onClick={handleAddFavorite}>
              <use href={`${sprite}#heart-normal`} />
            </HeartSvg>
          ) : (
            <HeartSvg onClick={handleDelFavorite}>
              <use href={`${sprite}#heart-checked`} />
            </HeartSvg>
          )}
        </HeartBlock>
        <ImageWrapper>
          <Online />
          <Image src={avatar_url} alt={`avatar of ${name} ${surname}`} />
        </ImageWrapper>
        <InfoWrapper>
          <Content>
            <Text>Languages</Text>
            <TeacherName>{`${name} ${surname}`}</TeacherName>
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
