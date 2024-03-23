import UserMenu from "../UserMenu/UserMenu";
import useAuth from "../../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const { isAuth } = useAuth();

  return isAuth ? <UserMenu /> : <AuthNav />;
};

export default AppBar;
