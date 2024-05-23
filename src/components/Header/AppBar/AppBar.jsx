import { useAuth } from "../../../hooks/useAuth";

import UserMenu from "../UserMenu/UserMenu";

import AuthNav from "../AuthNav/AuthNav";

const AppBar = ({ value, onClose }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <UserMenu value={value} onClose={onClose} /> : <AuthNav onClose={onClose} />;
};

export default AppBar;
