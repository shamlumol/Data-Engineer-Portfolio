import React from "react";
import { CSSTransition } from "react-transition-group";
import "../App.css";

const PageTransition = ({ children, inProp }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={800} // duration of animation
      classNames="shutter"
      unmountOnExit
    >
      <div className="page-transition-wrapper">{children}</div>
    </CSSTransition>
  );
};

export default PageTransition;
