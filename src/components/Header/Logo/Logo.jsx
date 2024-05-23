import { useNavigate } from "react-router-dom";

import logo from "../../../assets/images/ukraine.svg";

import { LogoText, LogoWrapper } from "./Logo.styled";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <LogoWrapper onClick={() => navigate("/")}>
      <img src={logo} alt="logotype" width="28px" height="28px" />
      <LogoText>LearnLingo</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
