import { useDispatch } from "react-redux";
// import { getAuth, signOut } from "firebase/auth";

// import { removeUser } from "../../../store/auth/authSlice";

import { BtnLog, Img, BtnWrapper } from "../index.styled";

import logInIcon from "../../../assets/images/log-in.svg";

import useAuth from "../../../hooks/useAuth";

const UserMenu = () => {
  const { name } = useAuth();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    // try {
    //   const auth = getAuth();
    //   await signOut(auth);
    //   dispatch(removeUser());
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <BtnWrapper>
      <p>Welcome, {name}</p>
      <BtnLog type="button" onClick={handleLogout}>
        <Img src={logInIcon} alt="log out button" /> Log Out
      </BtnLog>
    </BtnWrapper>
  );
};

export default UserMenu;
