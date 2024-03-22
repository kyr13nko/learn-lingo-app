import { BtnLog, BtnRegistration, BtnWrapper, Img } from "../index.styled";

import logInIcon from "../../../assets/images/log-in.svg";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import RegistrationForm from "../../Forms/RegistrationForm/RegistrationForm";
import LoginForm from "../../Forms/LoginForm/LoginForm";

const AuthNav = () => {
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const toggleLogInModal = () => setShowLogInModal((prev) => !prev);
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
