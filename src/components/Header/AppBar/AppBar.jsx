import { useAuth } from "../../../hooks/useAuth";

import UserMenu from "../UserMenu/UserMenu";

import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <UserMenu /> : <AuthNav />;
};

export default AppBar;
