import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const { text, icon, onHover, ...rest } = props;

  return (
    <>
      <button {...rest} style={styles.button} onMouseEnter={onHover}>
        {text} {icon && <i className={icon} />}
      </button>
    </>
  );
}

const styles = {
  button: {
    cursor: "point",
    fontSize: "1.2rem",
    height: "2.5rem",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    background: "#333",
    outline: "none",
    padding: "0.5rem 1.8rem",
    boxShadow: "0 0.3rem rgba(121, 121, 121, 0.65)",
    "&:hover": {
      filter: "brightness(110%)",
    },
    "&:active": {
      transform: "translate(0, 0.3rem)",
      boxShadow: "0 0.1rem rgba(255, 255, 255, 0.65)",
    },
  },
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};
