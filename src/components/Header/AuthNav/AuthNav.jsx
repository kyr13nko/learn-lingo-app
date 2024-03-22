import { BtnLog, BtnRegistration, BtnWrapper, Img } from "../index.styled";

import logInIcon from "../../../assets/images/log-in.svg";

const AuthNav = () => {
  return (
    <BtnWrapper>
      <BtnLog type="button">
        <Img src={logInIcon} alt="Log in button" />
        Log in
      </BtnLog>
      <BtnRegistration type="button">Registration</BtnRegistration>
    </BtnWrapper>
  );
};

export default AuthNav;
