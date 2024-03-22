import UserMenu from "../UserMenu/UserMenu";
import useAuth from "../../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const { isAuth } = useAuth();
  console.log("isAuth", isAuth);

  return isAuth ? <UserMenu /> : <AuthNav />;
};

export default AppBar;
