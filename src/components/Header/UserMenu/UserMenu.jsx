import { BtnLog, Img, BtnWrapper } from "../index.styled";

import logInIcon from "../../../assets/images/log-in.svg";

import useAuth from "../../../hooks/useAuth";

const UserMenu = () => {
  const { name } = useAuth();
  return (
    <BtnWrapper>
      <p>Welcome, {name}</p>
      <BtnLog type="button">
        <Img src={logInIcon} alt="log out button" /> Log Out
      </BtnLog>
    </BtnWrapper>
  );
};

export default UserMenu;
