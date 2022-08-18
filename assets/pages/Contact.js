import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_blog", e.target, "0mYNgIHlrb051iSYX")
      .then(
        (response) => {
          Swal.fire({
            icon: "success",
            title: "Email sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response.text);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "An error occurred",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="pl-2 text-start">
      <h2 className="py-5">Hi there! Let connect</h2>
      <form className="text-start" onSubmit={sendEmail}>
        <div className="form-group d-flex justify-content-center mb-3">
          <label className=" control-label px-5 " name="name">
            Name:
          </label>
          <input type="text" id="name" className="form-control " />
        </div>

        <div className="form-group d-flex justify-content-center mb-3">
          <label className="control-label px-5" name="email">
            Email address:
          </label>

          <input type="email" id="email" className="form-control" />
        </div>

        <div className="form-group d-flex justify-content-center mb-3">
          <label className="control-label px-5 " name="message">
            Message:
          </label>

          <textarea id="message" rows="4" className="form-control "></textarea>
        </div>

        {/* <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="checkbox"
            checked
          />
          <label className="form-check-label" htmlfor="checkbox">
            Send me a copy of this message
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary w-25 mb-3">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
