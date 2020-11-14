import React from "react";
import PropTypes from "prop-types";

export default function Text({ text }) {
  return <span id="quote">{text}</span>;
}

Text.propTypes = {
  text: PropTypes.string,
};
