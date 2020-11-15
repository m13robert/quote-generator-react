import React, { useState, useEffect } from "react";
import Text from "../text/Text";
import Button from "../button/Button";

const API_URL =
  "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
const PROXY = "https://cors-anywhere.herokuapp.com/";

export default function Quote() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.quoteText} - ${quote.quoteAuthor}`;
    window.open(twitterUrl, "_blank");
  };

  const getQuote = async () => {
    setDisabled(true);
    try {
      const res = await fetch(PROXY + API_URL);
      const data = await res.json();
      setQuote(data);
      setLoading(false);
      setDisabled(false);
    } catch (err) {
      setQuote({
        quote: {
          quoteText: "Whoops, couldn't retrieve quote",
          quoteAuthor: "Not Found",
        },
      });
      setLoading(false);
      console.log("whoops, couldn't retrieve quote");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  if (loading) return <div className="loader"></div>;

  return (
    <div style={styles.quoteContainer} id="quote-container">
      {/* Quote  */}
      <div
        style={
          quote.quoteText.length < 120 ? styles.quoteText : styles.longQuote
        }
      >
        <i className="fa fa-quote-left" />
        <Text text={quote.quoteText} />
      </div>

      {/* Author */}
      <div style={styles.quoteAuthor}>
        <Text text={quote.quoteAuthor ? quote.quoteAuthor : "Unknown"} />
      </div>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <Button
          title="Tweet this quote!"
          icon="fab fa-twitter"
          id="twitter"
          onClick={tweetQuote}
        />
        <Button
          id="new-quote"
          text="New quote"
          disabled={disabled}
          onClick={() => getQuote()}
        />
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
