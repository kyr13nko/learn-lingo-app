import { useDispatch } from "react-redux";

import { useAuth } from "../../../hooks/useAuth";
import { logoutUser } from "../../../store/auth/authOperations";
import { clearAfterLogOut } from "../../../store/favorites/favoritesSlice";

import { BtnLog, Img, BtnWrapper } from "../index.styled";

import logInIcon from "../../../assets/images/log-in.svg";

const UserMenu = ({ value }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logoutUser());
    dispatch(clearAfterLogOut());
  };

  return (
    <BtnWrapper>
      {value !== "burger" && <p>Welcome, {user.name}</p>}
      <BtnLog type="button" onClick={handleLogOut}>
        <Img src={logInIcon} alt="log out button" /> Log Out
      </BtnLog>
    </BtnWrapper>
  );
};

export default UserMenu;
