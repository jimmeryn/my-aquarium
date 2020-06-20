import * as React from "react";
import Title from "./Title";
import LoginDropdown from "./LoginDropdown";
const TopNav: React.FunctionComponent = () => {
  return (
    <div className="top-nav">
      <Title />
      <LoginDropdown />
    </div>
  );
};
export default TopNav;
