import React from "react";
import emailjs from "emailjs-com";
// import "./css/style.css";

function Form() {
  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_by2fhwb",
        "template_qwtif5q",
        e.target,
        "user_YWPkHqBY81GgADU0UTvIf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className="wrapper">
      <div className="inner w-1/3">
        <form
          onSubmit={sendMail}
          // onSubmit={()=> this.onSubmit}
        >
          <div className="title pt-16 mt-2 mb-16">
            <h1 className="text-blue-900 font-mono dark:text-terminal text-2xl text-center">
              Contact Me!
            </h1>
          </div>
          <label className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              required
            ></input>
            {/* <span>Name of Job</span> */}
            <span className="border"></span>
          </label>
          <label className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              required
            ></input>
            <span className="border"></span>
          </label>
          <label className="form-group">
            <input
              type="textarea"
              className="form-control"
              placeholder="Message"
              name="message"
              required
            ></input>
            {/* <span>Job Description</span> */}
            <span className="border"></span>
          </label>
          <input className="button" type="submit" value="Send Message">
            {/* <i className="zmdi zmdi-arrow-right"></i> */}
          </input>
        </form>
      </div>
    </div>
  );
}

export default Form;
