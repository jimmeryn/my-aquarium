import * as React from "react";
import Title from "./Title";
import LoginDropdown from "./LoginDropdown";
import Hamburger from "./Hamburger";
const TopNav: React.FunctionComponent = () => {
  return (
    <div className="top-nav">
      <Hamburger />
      <Title />
      <LoginDropdown />
    </div>
  );
};
export default TopNav;
