import { useState } from "react";
import "../stylesheets/Newsletter.css";
import emailjs from "emailjs-com";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { from_name: "ShopeSphere", message: email },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setMessage("Subscription successful!");
          setEmail("");
        },
        () => {
          setMessage("Failed to subscribe. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="news">
        <div className="news-text">
          <h2>Newsletter</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default Newsletter;
