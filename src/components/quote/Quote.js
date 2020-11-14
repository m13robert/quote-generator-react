import React, { useState, useEffect } from "react";
import Text from "../text/Text";
import Button from "../button/Button";

const API_URL =
  "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
const PROXY = "https://cors-anywhere.herokuapp.com/";

export default function Quote() {
  const [bgColor, setBgColor] = useState("");
  const [quote, setQuote] = useState("");

  const twitter = {
    twitterButton: {
      backgroundColor: `${bgColor}`,
    },
  };

  const getQuote = async () => {
    try {
      const res = await fetch(PROXY + API_URL);
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.log("whoops, couldn't retrieve quote");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div style={styles.quoteContainer} id="quote-container">
      {/* Quote  */}
      <div style={styles.quoteText}>
        <i className="fa fa-quote-left" />
        <Text text={quote.quoteText} />
      </div>

      {/* Author */}
      <div style={styles.quoteAuthor}>
        <Text text={quote.quoteAuthor} />
      </div>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <Button
          title="Tweet this quote!"
          icon="fab fa-twitter"
          onMouseOver={() => setBgColor("#38a1f3")}
          onMouseLeave={() => setBgColor("#333")}
          style={twitter.twitterButton}
          id="twitter"
        />
        <Button id="new-quote" text="New quote" onClick={getQuote} />
      </div>
    </div>
  );
}

const styles = {
  quoteContainer: {
    width: "auto",
    maxWidth: "900px",
    padding: "20px 30px",
    borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0 10px 10px 10px rgba(0, 0, 0, 0.2)",
  },
  quoteText: {
    fontSize: "2.75rem",
  },
  longQuote: {
    fontSize: "2rem",
  },
  quoteAuthor: {
    marginTop: "15px",
    fontSize: "2rem",
    fontWeight: "400",
    fontStyles: "italic",
  },
  buttonContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
  },
};
