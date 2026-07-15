import React from "react";

function Contact() {
  const [input, setInput] = "";
  const [message, setMessage] = "";
  const handleSub = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-file">
      <h1>Contact Me</h1>
      <form onClick={handleSub}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />{" "}
        <br />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
