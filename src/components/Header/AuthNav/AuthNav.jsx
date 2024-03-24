import { useState } from "react";
import { useDispatch } from "react-redux";

import { useAuth } from "../../../hooks/useAuth";
import { resetError } from "../../../store/auth/authSlice";

import Modal from "../../Modal/Modal";

import LoginForm from "../../Forms/LoginForm/LoginForm";
import RegistrationForm from "../../Forms/RegistrationForm/RegistrationForm";

import logInIcon from "../../../assets/images/log-in.svg";
import { BtnLog, BtnRegistration, BtnWrapper, Img } from "../index.styled";

const AuthNav = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const toggleLogInModal = () => {
    setShowLogInModal((prev) => !prev);
    if (error) dispatch(resetError());
  };
  const toggleRegistrationModal = () => setShowRegistrationModal((prev) => !prev);

  return (
    <>
      <BtnWrapper>
        <BtnLog type="button" onClick={toggleLogInModal}>
          <Img src={logInIcon} alt="Log in button" />
          Log in
        </BtnLog>

        <BtnRegistration type="button" onClick={toggleRegistrationModal}>
          Registration
        </BtnRegistration>
      </BtnWrapper>

      {showLogInModal && (
        <Modal
          onClose={toggleLogInModal}
          title="Log In"
          text="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
        >
          <LoginForm />
        </Modal>
      )}

      {showRegistrationModal && (
        <Modal
          onClose={toggleRegistrationModal}
          title="Registration"
          text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
        >
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
};

export default AuthNav;
