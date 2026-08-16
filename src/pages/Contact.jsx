import React, { useState } from "react";

function Contact() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSub = (e) => {
    e.preventDefault();
    // TODO: send input + message somewhere (e.g. email service or backend)
    console.log({ input, message });
  };

  return (
    <div className="contact-file" id="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSub}>
        <input
          type="text"
          placeholder="Your name or email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
