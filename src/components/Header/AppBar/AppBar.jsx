import { useAuth } from "../../../hooks/useAuth";

import UserMenu from "../UserMenu/UserMenu";

import AuthNav from "../AuthNav/AuthNav";

const AppBar = ({ value }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <UserMenu value={value} /> : <AuthNav />;
};

export default AppBar;
