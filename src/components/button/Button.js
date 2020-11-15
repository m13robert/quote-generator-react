import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const { btnStyle, text, icon, onHover, ...rest } = props;

  return (
    <>
      <button
        {...rest}
        style={btnStyle ? btnStyle : {}}
        className="button"
        onMouseEnter={onHover}
      >
        {text} {icon && <i className={icon} />}
      </button>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};
