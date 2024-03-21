import logo from "../../../assets/ukraine.svg";

import { LogoText, LogoWrapper } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logo} alt="logotype" width="28px" height="28px" />
      <LogoText>LearnLingo</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
