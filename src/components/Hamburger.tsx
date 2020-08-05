import * as React from "react";

var classNames = require("classnames");

const Hamburger: React.FunctionComponent<{
  active: boolean;
  setActive: any;
}> = ({ active, setActive }) => {
  const hamClass = classNames({
    hamburger: !active,
    "hamburger--active": active
  });

  return (
    <button className={hamClass} onClick={() => setActive(!active)}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
