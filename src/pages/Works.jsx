import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

export const Works = () => {
    return (
        <Fragment>
            {/* <!--  Fixed navbar --> */}
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">SP<i className="fa fa-circle"></i>T</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="services.html">SERVICES</a></li>
                        <li className="active"><a href="works.html">WORKS</a></li>
                        <li><a data-toggle="modal" data-target="#myModal" href="#myModal"><i className="fa fa-envelope-o"></i></a></li>
                        </ul>
                    </div>
                    {/* <!-- /.nav-collapse --> */}
                </div>
            </div>

            <div id="blue">
                <div className="container">
                    <div className="row centered">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h4>WE WORK HARD TO ACHIEVE EXCELLENCE</h4>
                            <p>AND WE ARE HAPPY TO DO IT</p>
                        </div>
                    </div>
                    {/* <!--  row --> */}
                </div>
                {/* <!--  container --> */}
            </div>
            {/* <!--   bluewrap --> */}

            <div className="container desc">
                <div className="row">
                    <br/><br/>
                    <div className="col-lg-6 centered">
                        <img src="img/p03.png" alt=""/>
                    </div>
                    {/* <!--  col-lg-6 --> */}
                    <div className="col-lg-6">
                        <h4>CLIENT NAME</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>
                        <i className="fa fa-circle-o"></i> Mobile Design<br/>
                        <i className="fa fa-circle-o"></i> Web Design<br/>
                        <i className="fa fa-circle-o"></i> Development<br/>
                        <i className="fa fa-link"></i> <a href="#">Example.com</a>
                        </p>
                    </div>
                </div>
                {/* <!--  row --> */}

                <br/><br/>
                <hr/>
                <br/><br/>

                <div className="row">
                    <div className="col-lg-6 centered">
                        <img src="img/p01.png" alt=""/>
                    </div>
                    {/* <!--  col-lg-6 --> */}
                    <div className="col-lg-6">
                        <h4>CLIENT NAME</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>
                        <i className="fa fa-circle-o"></i> Mobile Design<br/>
                        <i className="fa fa-circle-o"></i> Web Design<br/>
                        <i className="fa fa-circle-o"></i> Development<br/>
                        <i className="fa fa-link"></i> <a href="#">Example.com</a>
                        </p>
                    </div>
                </div>
                {/* <!--  row --> */}<br/>

                <br/><br/>
                <hr/>
                <br/><br/>
                <div className="row">
                    <div className="col-lg-6 centered">
                        <img src="img/p02.png" alt=""/>
                    </div>
                    {/* <!--  col-lg-6 --> */}
                    <div className="col-lg-6">
                        <h4>CLIENT NAME</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>
                        <i className="fa fa-circle-o"></i> Mobile Design<br/>
                        <i className="fa fa-circle-o"></i> Web Design<br/>
                        <i className="fa fa-circle-o"></i> Development<br/>
                        <i className="fa fa-link"></i> <a href="#">Example.com</a>
                        </p>
                    </div>
                </div>
                {/* <!--  row --> */}
                <br/><br/>
            </div>
            {/* <!--  container --> */}<br/>

            <div id="r">
                <div className="container">
                    <div className="row centered">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h4>WE ARE STORYTELLERS. BRANDS ARE OUR SUBJECTS. DESIGN IS OUR VOICE.</h4>
                            <p>We believe ideas come from everyone, everywhere. At OurCompany, everyone within our agency walls is a designer in their own right. And there are a few principles we believe—and we believe everyone should believe—about our design craft. These truths
                            drive us, motivate us, and ultimately help us redefine the power of design.</p>
                        </div>
                    </div>
                    {/* <!--  row --> */}
                </div>
                {/* <!--  container --> */}
            </div>

            {/* <!--  FOOTER --> */}
            <div id="f">
                <div className="container">
                    <div className="row centered">
                        <a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-dribbble"></i></a>

                    </div>
                    {/* <!--  row --> */}
                </div>
                {/* <!--  container --> */}
            </div>
            {/* <!--  Footer --> */}<br/>

            {/* <!--  MODAL FOR CONTACT --> */}
            {/* <!--  Modal --> */}
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel">contact us</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row centered">
                                <p>We are available 24/7, so don't hesitate to contact us.</p>
                                <p>
                                Somestreet Ave, 987<br/> London, UK.<br/> +44 8948-4343<br/> contact@example.com
                                </p>

                                <form className="contact-form php-mail-form" role="form" action="contactform/contactform.php" method="POST">

                                    <div className="form-group">
                                        <label for="contact-name">Your Name</label>
                                        <input type="name" name="name" className="form-control" id="contact-name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <label for="contact-email">Your Email</label>
                                        <input type="email" name="email" className="form-control" id="contact-email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <label for="contact-subject">Subject</label>
                                        <input type="text" name="subject" className="form-control" id="contact-subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
                                        <div className="validate"></div>
                                    </div>

                                    <div className="form-group">
                                        <label for="contact-message">Your Message</label>
                                        <textarea className="form-control" name="message" id="contact-message" placeholder="Your Message" rows="5" data-rule="required" data-msg="Please write something for us"></textarea>
                                        <div className="validate"></div>
                                    </div>

                                    <div className="loading"></div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>

                                    <div className="form-send">
                                        <button type="submit" className="btn btn-large">Send Message</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!--  /.modal-content --> */}
                </div>
                {/* <!--  /.modal-dialog --> */}
            </div>
            {/* <!--  /.modal --> */}<br/>

            <div id="copyrights">
                <div className="container">
                    <p>
                    &copy; Copyrights <br/> <strong>Grupo 7 - NRC 1257</strong>
                    <br/>
                    <strong>MISION TIC 2022</strong>
                    </p>
                </div>
            </div>

            {/* <!--  JavaScript Libraries --> */}
            <script src="lib/jquery/jquery.min.js"></script>
            <script src="lib/bootstrap/js/bootstrap.min.js"></script>
            <script src="lib/php-mail-form/validate.js"></script>
            <script src="lib/chart/chart.js"></script>

            {/* <!--  Template Main Javascript File --> */}
            <script src="js/main.js"></script>

        </Fragment>
    )
}