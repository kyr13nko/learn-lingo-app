import { BtnLogIn, BtnRegistration, BtnWrapper, Img } from "./UserMenu.styled";

import logInIcon from "../../../assets/images/log-in.svg";

const UserMenu = () => {
  return (
    <BtnWrapper>
      <BtnLogIn type="button">
        <Img src={logInIcon} alt="log in icon" />
        Log in
      </BtnLogIn>
      <BtnRegistration type="button">Registration</BtnRegistration>
    </BtnWrapper>
  );
};

export default UserMenu;
