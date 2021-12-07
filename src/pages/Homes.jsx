import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'


export const Home = () => {
  return (
    <Fragment>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="#">SP<i className="fa fa-circle"></i>T</Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
            <li className="active"><Link to='Home.jsx'> HOME </Link></li>
            <li><Link to='/about'> ABOUT </Link></li>
            <li><Link to='/services'> SERVICES </Link></li>
            <li><Link to='/works'> WORKS </Link></li>
            <li><Link data-toggle="modal" data-target="#myModal" to="#myModal"><i className="fa fa-envelope-o"></i></Link></li>
            </ul>
          </div>
          {/* .nav-collapse --> */} 
        </div>
      </div>

      <div id="headerwrap">
        <div className="container">
          <div className="row centered">
          <img src="header-bg.jpg" alt=""/>
            <div className="col-lg-8 col-lg-offset-2">
              
              <h1>It Doesn't Take a Rocket <b>Scientist</b></h1>
              <h2>It Takes a Designer</h2>
              
            </div>
          </div>
        {/* <!-- row --> */} 
        </div>
      {/* <!-- container --> */} 
      </div>
      {/*  <!-- headerwrap --> */} 

      <div className="container w">
        <div className="row centered">
          <br/><br/>
          <div className="col-lg-4">
            <i className="fa fa-heart"></i>
            <h4>DESIGN</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
          </div>
          {/*{/*{/* {/*  <!-- col-lg-4 --> */} 

          <div className="col-lg-4">
            <i className="fa fa-laptop"></i>
            <h4>BOOTSTRAP</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
          </div>
          {/*{/*{/* {/*  <!-- col-lg-4 --> */} 

          <div className="col-lg-4">
            <i className="fa fa-trophy"></i>
            <h4>SUPPORT</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
          </div>
          {/*{/*{/* {/*  <!-- col-lg-4 --> */} 
        </div>
        {/*{/*{/* {/*  <!-- row --> */} *
        <br/>
        <br/>
      </div>
      {/*{/*{/* {/*  <!-- container --> */} 

      {/*{/* {/*  <!-- PORTFOLIO SECTION --> */} 
      <div id="dg">
        <div className="container">
          <div className="row centered">
            <h4>LATEST WORKS</h4>
            <br/>
            <div className="col-lg-4">
              <div className="tilt">
                <Link to="#"><img src="img/p01.png" alt=""/></Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="tilt">
                <Link to="#"><img src="img/p03.png" alt=""/></Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="tilt">
                <Link to="#"><img src="img/p02.png" alt=""/></Link>
              </div>
            </div>
          </div>
        {/*{/* {/*  <!-- row --> */} 
        </div>
        {/*{/* {/*  <!-- container --> */} 
      </div>
      {/*{/* {/*  <!-- DG --> */} 

      {/* {/*  <!-- FEATURE SECTION --> */} 
      <div className="container wb">
        <div className="row centered">
          <br/><br/>
          <div className="col-lg-8 col-lg-offset-2">
            <h4>WE CREATE FIRST CLASS DESIGN</h4>
            <p>By being true to the brand we represent, we elevate the audiences’ relationship to it. Like becomes love becomes a passion. Passion becomes advocacy. And we see the brand blossom from within, creating a whole story the audience embraces. That’s
              when the brand can truly flex its muscles.</p>
            <p><br/><br/></p>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-10 col-lg-offset-1">
            <img className="img-responsive" src="img/munter.png" alt=""/>
          </div>
        </div>
      {/* {/*  <!-- row --> */} 
      </div>
      {/* {/*  <!-- container --> */} 

      <div id="lg">
        <div className="container">
          <div className="row centered">
            <h4>OUR AWESOME CLIENTS</h4>
            <div className="col-lg-2 col-lg-offset-1">
              <img src="img/c01.gif" alt=""/>
            </div>
            <div className="col-lg-2">
              <img src="img/c02.gif" alt=""/>
            </div>
            <div className="col-lg-2">
              <img src="img/c03.gif" alt=""/>
            </div>
            <div className="col-lg-2">
              <img src="img/c04.gif" alt=""/>
            </div>
            <div className="col-lg-2">
              <img src="img/c05.gif" alt=""/>
            </div>
          </div>
        {/* {/*  <!-- row --> */} 
        </div>
      {/* {/*  <!-- container --> */} 
      </div>
      {/* {/*  <!-- dg --> */} 

      <div id="r">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-8 col-lg-offset-2">
              <h4>WE ARE STORYTELLERS. BRANDS ARE OUR SUBJECTS. DESIGN IS OUR VOICE.</h4>
              <p>We believe ideas come from everyone, everywhere. At BlackTie, everyone within our agency walls is a designer in their own right. And there are a few principles we believe—and we believe everyone should believe—about our design craft. These truths
                drive us, motivate us, and ultimately help us redefine the power of design.</p>
            </div>
          </div>
        {/* {/*  <!-- row --> */} 
        </div>
      {/* {/*  <!-- container --> */} 
      </div>

      {/* {/*  <!-- FOOTER --> */} 
      <div id="f">
        <div className="container">
          <div className="row centered">
            <Link to="#"><i className="fa fa-twitter"></i></Link><Link to="#"><i className="fa fa-facebook"></i></Link><Link to="#"><i className="fa fa-dribbble"></i></Link>
          </div>
        {/* {/*  <!-- row --> */} 
        </div>
      {/* {/*  <!-- container --> */} 
      </div>
      {/* {/*  <!-- Footer --> */} 

      {/* {/*  <!-- MODAL FOR CONTACT --> */} 
      {/* {/*  <!-- Modal --> */} 
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
            {/* {/*  <!-- /.modal-content --> */} 
          </div>
          {/* {/*  <!-- /.modal-dialog --> */} 
        </div>
        {/* {/*  <!-- /.modal --> */}

        <div id="copyrights">
          <div className="container">
            <p>
              &copy; Copyrights <br/> <strong>Grupo 7 - NRC 1257</strong>
              <br/>
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
       
  )
}