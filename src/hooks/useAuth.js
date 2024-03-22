import { useSelector } from "react-redux";

const useAuth = () => {
  const { user, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!user.email,
    isRefreshing: !!token,
    name: user.name,
    email: user.email,
    token,
    id,
  };
};

export default useAuth;