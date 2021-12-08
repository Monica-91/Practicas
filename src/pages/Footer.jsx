import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Fragment>
      {/* {/*  <!-- FOOTER --> */}
      <div id="f">
        <div className="container">
          <div className="row centered">
            <Link to="#">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-dribbble"></i>
            </Link>
          </div>
          {/* {/*  <!-- row --> */}
        </div>
        {/* {/*  <!-- container --> */}
      </div>
      {/* {/*  <!-- Footer --> */}

      {/* {/*  <!-- MODAL FOR CONTACT --> */}
      {/* {/*  <!-- Modal --> */}
      <div
        className="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title" id="myModalLabel">
                contact us
              </h4>
            </div>
            <div className="modal-body">
              <div className="row centered">
                <p>We are available 24/7, so don't hesitate to contact us.</p>
                <p>
                  Somestreet Ave, 987
                  <br /> London, UK.
                  <br /> +44 8948-4343
                  <br /> contact@example.com
                </p>

                <form
                  className="contact-form php-mail-form"
                  role="form"
                  action="contactform/contactform.php"
                  method="POST"
                >
                  <div className="form-group">
                    <label for="contact-name">Your Name</label>
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      id="contact-name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <label for="contact-email">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="contact-email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <label for="contact-subject">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="contact-subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validate"></div>
                  </div>

                  <div className="form-group">
                    <label for="contact-message">Your Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="contact-message"
                      placeholder="Your Message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                    ></textarea>
                    <div className="validate"></div>
                  </div>

                  <div className="loading"></div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>

                  <div className="form-send">
                    <button type="submit" className="btn btn-large">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* {/*  <!-- /.modal-content --> */}
        </div>
        {/* {/*  <!-- /.modal-dialog --> */}
      </div>
      {/* {/*  <!-- /.modal --> */}

      <div id="copyrights">
        <div className="container">
          <p>
            &copy; Copyrights <br /> <strong>Grupo 8 - NRC 1257</strong>
            <br />
            <strong>MISION TIC 2022</strong>
          </p>
        </div>
      </div>

      {/*  <!-- JavaScript Libraries --> */}
      <script src="lib/jquery/jquery.min.js"></script>
      <script src="lib/bootstrap/js/bootstrap.min.js"></script>
      <script src="lib/php-mail-form/validate.js"></script>
      <script src="lib/chart/chart.js"></script>

      {/*  <!-- Template Main Javascript File --> */}
      <script src="js/main.js"></script>
    </Fragment>
  );
};
