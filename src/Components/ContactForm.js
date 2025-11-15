import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/AppointmentForm.css";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      errors.email = "Email address is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Prepare data object for submission
    const data = {
      fullName,
      email,
      message,
    };

    try {
      // Simulate sending form data (replace with actual endpoint)
      const response = await fetch("https://formspree.io/f/mpwkdgka", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Reset form fields and show success message
        setFullName("");
        setEmail("");
        setMessage("");
        setFormErrors({});
        setIsSubmitted(true);

        toast.success("Message Sent!", {
          position: toast.POSITION.TOP_CENTER,
          onClose: () => setIsSubmitted(false),
        });
      } else {
        // Show error message on failure
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="appointment-form-section">
      {" "}
      {/* Reuse the styling class name */}
      <h1 className="legal-siteTitle">
        {/*<Link to="/">
          CISS <span className="legal-siteSign">+</span>
        </Link>*/}
      </h1>
      <div className="form-container">
        {" "}
        {/* Reuse the styling class name */}
        <h2 className="form-title">
          {" "}
          {/* Reuse the styling class name */}
          <span>Contact Us</span>
        </h2>
        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {formErrors.fullName && (
              <p className="error-message">{formErrors.fullName}</p>
            )}
          </label>

          <br />
          <label>
            Email Address:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {formErrors.email && (
              <p className="error-message">{formErrors.email}</p>
            )}
          </label>

          <br />
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {formErrors.message && (
              <p className="error-message">{formErrors.message}</p>
            )}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Send Message
          </button>

          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Message sent successfully.
          </p>
        </form>
      </div>
      <div className="legal-footer">
        {" "}
        {/* Reuse the styling class name */}
        <p>© 2025-2027 CISS. All rights reserved.</p>
      </div>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
};

export default ContactForm;
