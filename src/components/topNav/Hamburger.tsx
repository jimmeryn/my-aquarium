import * as React from "react";

const Hamburger = () => {
  const [hamActive, setHamActive] = React.useState(false);
  const hamClass = `hamburger${hamActive ? "--active" : ""}`;
  const menuClass = `dropdown${hamActive ? "--active" : ""}`;
  const [activeButton, setActiveButton] = React.useState(0);

  return (
    <button className={hamClass} onClick={() => setHamActive(!hamActive)}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
