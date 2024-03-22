import { useState } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "../../../store/slices/userSlice";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            user: { name: user.displayName, email: user.email },
            token: user.accessToken,
            id: user.uid,
          })
        );
      })
      .catch(console.error);
  };

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" onClick={handleClick}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
