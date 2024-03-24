import { useDispatch } from "react-redux";

import { logoutUser } from "../../../store/auth/authOperations";
import { useAuth } from "../../../hooks/useAuth";

import { BtnLog, Img, BtnWrapper } from "../index.styled";

import logInIcon from "../../../assets/images/log-in.svg";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <BtnWrapper>
      <p>Welcome, {user.name}</p>
      <BtnLog type="button" onClick={() => dispatch(logoutUser())}>
        <Img src={logInIcon} alt="log out button" /> Log Out
      </BtnLog>
    </BtnWrapper>
  );
};

export default UserMenu;
