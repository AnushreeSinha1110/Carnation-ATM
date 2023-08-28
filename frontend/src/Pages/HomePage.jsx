import "../styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { MDBIcon } from 'mdb-react-ui-kit';


function HomePage() {
    return ( <div class="Home">
         
          {/* <nav class="nav-clr navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}

<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo"><a href="#">Carnation</a></h1>
    
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>

          {/* <li><a class="getstarted scrollto" href="/">Login</a></li> */}
          <li> <Link class="getstarted scrollto" to ={`/adminlogin`}>Login</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

<section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>Welcome to the Carnation Bank</h1>
      <h2>We are team of experts, helps you regarging your financial and investment problems</h2>
    </div>

  </div>
</div>

</section>

    {/* <div class="container justify-content-center">
            <h1>Welcome to the Carnation Bank</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, unde accusantium aperiam magnam repudiandae odit, vitae tempora numquam incidunt consequuntur tenetur. Veritatis voluptatibus, ab asperiores molestias excepturi quia id rem!</h3>
   
    </div> */}

    <section id="about" class="about section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
            
About Us

Welcome to Carnation Bank, your trusted partner in financial excellence. Established with a vision to empower individuals, businesses, and communities, we have been at the forefront of delivering innovative banking solutions since 2023.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>Customer Centric Approach</li>
              <li><i class="ri-check-double-line"></i> Technology and Innovations</li>
              <li><i class="ri-check-double-line"></i>Security and Trust</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
            At Carnation, our mission is to provide unparalleled financial services that cater to the diverse needs of our customers. We strive to foster financial growth and security, enabling dreams and ambitions to become reality. Through our ethical practices and dedication, we aim to contribute positively to the financial well-being of individuals and the progress of businesses.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>Welcome to the ATM Banking Services offered by Carnation. We understand that your financial needs are diverse and dynamic, which is why we've designed a range of services to make your banking experience convenient, secure, and efficient.</p>
        </div>

        <div class="row">
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">ATM Cash Withdrawals</a></h4>
              <p>Our extensive network of ATMs allows you to access your funds whenever you need them.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4><a href="">Balance Inquiries</a></h4>
              <p>Stay on top of your finances with our Balance Inquiry service.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4><a href="">Fund Transfers</a></h4>
              <p>Our Fund Transfer service through ATM Banking lets you move money securely and swiftly.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-layer"></i></div>
              <h4><a href="">Pin Management</a></h4>
              <p>Keep your accounts secure by managing your PIN through our ATM PIN Management service.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="member d-flex align-items-start">
              <div class="member-info">
                <h4>Gyanendra Shukla</h4>
                <span>Program Associate</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
          
              </div>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="member d-flex align-items-start">
              <div class="member-info">
                <h4>Avirup Bhattacharyya</h4>
                <span>Program Associate</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
        
              </div>
            </div>
          </div>

          <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="member-info">
                <h4>Anushree Sinha</h4>
                <span>Program Associate</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>

              </div>
            </div>
          </div>

          <div class="col-lg-4 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="member d-flex align-items-start">
              <div class="member-info">
                <h4>Ameya D. Kurme</h4>
                <span>Program Associate</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mt-4" data-aos="zoom-in" data-aos-delay="500">
            <div class="member d-flex align-items-start">
              <div class="member-info">
                <h4>Arun Nagar</h4>
                <span>Program Associate</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
        </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <footer id="footer">

<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-4 col-md-6 footer-contact">
        <h3>Carnation</h3>
        <p>
          Wells Fargo Center <br/>
          Bengaluru, 560103<br/>
          Karnataka, India <br/><br/>
          <strong>Phone:</strong> +1 5589 55488 55<br/>
          <strong>Email:</strong> info@example.com<br/>
        </p>
      </div>

      <div class="col-lg-4 col-md-6 footer-links flink1">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#team">Team</a></li>

        </ul>
      </div>

      <div class="col-lg-4 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Managing Customer Details</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Manageing Customer Accounts</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Records of Transactions</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Cheque Payment</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Online Banking</a></li>
        </ul>
      </div>

    </div>
  </div>
</div>

<div class="container footer-bottom clearfix">
  <div class="copyright">
    &copy; Copyright <strong><span>Carnation</span></strong>. All Rights Reserved
  </div>
  <div class="credits">

    Designed by <a href="#team">Carnation Team</a>
  </div>
</div>
</footer>
     </div> );
}

export default HomePage;