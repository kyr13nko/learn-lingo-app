import { useState } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "../../../store/slices/userSlice";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });

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
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
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
        Sign Up
      </button>
    </form>
  );
};

export default RegistrationForm;
