import * as React from "react";

const Hamburger = () => {
  // change redux state to open or close navigation
  const [hamActive, setHamActive] = React.useState(false);
  const hamClass = `hamburger${hamActive ? "--active" : ""}`;

  return (
    <button className={hamClass} onClick={() => setHamActive(!hamActive)}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
