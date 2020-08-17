import * as React from "react";

var classNames = require("classnames");

const Hamburger: React.FunctionComponent<{
  active: boolean;
  setActive: () => void;
}> = ({ active, setActive }) => {
  const hamClass = classNames({
    hamburger: !active,
    "hamburger--active": active
  });

  return (
    <button className={hamClass} onClick={() => setActive()}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
