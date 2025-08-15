import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JMC ANGOLA - Pick-ups & Carrinhos",
  description:
    "Representante oficial da JMC em Angola com soluções em pick-ups,  e veículos comerciais. Confiabilidade e economia garantidas.",
  openGraph: {
    title: "JMC ANGOLA - Pick-ups & Carrinhos",
    description:
      "Somos o representante oficial da JMC em Angola, trazendo robustez, fiabilidade e economia em cada pick-up, SUV ou veículo comercial leve. A nossa missão é garantir soluções personalizadas e suporte contínuo para clientes e empresas.",
    url: "https://jmcangola.com",
    type: "website",
    images: [
      "https://res.cloudinary.com/dtfx1jpkq/image/upload/f_auto,q_auto,w_1200/v1749281795/confornto_qac4wz.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JMC ANGOLA",
    description: "Somos o representante oficial da JMC em Angola...",
    images: [
      "https://res.cloudinary.com/dtfx1jpkq/image/upload/f_auto,q_auto,w_1200/v1749281795/confornto_qac4wz.png",
    ],
  },
  icons: {
    shortcut: "/img/favicon1.png",
  },
  alternates: {
    canonical: "https://jmcangola.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/img/favicon1.png" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" />
    <link rel="stylesheet" href="/css/plugins.css" />  
    <link rel="stylesheet" href="/css/style.css" />

       </head>
      <body>
           <div className="preloader-bg"></div>
    <div id="preloader">
        <div id="preloader-status">
            <div className="preloader-position loader"> <span></span> </div>
        </div>
    </div>

<div className="mobile-buttons-container">
  <a
    href="testdrive.html"
    className="mobile-float-button test-drive-button"
    style={{ cursor: "pointer" }}
  >
    <div className="icon">
      <img src="/img/icon.webp" style={{ height: "20px" }} />
    </div>
  </a>
  <a
    href="https://wa.me/244928283666"
    target="_blank"
    className="mobile-float-button whatsapp-button"
    style={{ cursor: "pointer" }}
  >
    <div className="icon">
      <i className="fa-brands fa-whatsapp text-white"></i>
    </div>
  </a>
  <div className="progress-wrap cursor-pointer">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</div>

<nav className="navbar navbar-expand-lg">
  <div className="container">
    <div className="logo-wrapper">
      <a className="logo" href="/">
        <img
          src="/img/logo.webp"
          className="logo-img"
          alt=""
          style={{ height: "40px", width: "200px" }}
        />
      </a>
    </div>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon">
        <i className="fa-solid fa-bars"></i>
      </span>
    </button>

    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            MODELOS <i className="ti-angle-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="/grand-avenue" className="dropdown-item">
                <span>GRAND AVENUE</span>
              </a>
            </li>
            <li>
              <a href="/vigus" className="dropdown-item">
                <span>VIGUS</span>
              </a>
            </li>
            <li>
              <a href="/touring" className="dropdown-item">
                <span>TOURING</span>
              </a>
            </li>
            <li>
              <a href="/carrying" className="dropdown-item">
                <span> CARRING (refrigerador) </span>
              </a>
            </li>
            <li>
              <a href="/carrying" className="dropdown-item">
                <span>CARRING PLUS </span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/sobre">
            SOBRE
          </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="campanha//">
            CAMPANHAS
          </a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/noticias">
            NOTÍCIAS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/expo">
            EXPO
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/galeria">
            GALERIA
          </a>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            PT <i className="ti-angle-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="/" className="dropdown-item">
                <span>Português</span>
              </a>
            </li>
            <li>
              <a href="#index-en" className="dropdown-item">
                <span>English</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="navbar-right">
        <a href="testdrive.html" className="wrap" style={{ cursor: "pointer" }}>
          <div className="icon">
            <img src="/img/icon.webp" style={{ height: "20px" }} />
          </div>
          <div className="text">
            <p>Vamos experimentar?</p>
            <h5>Test Drive</h5>
          </div>
        </a>

        <a
          href="https://wa.me/244928283666"
          target="_blank"
          className="wrap"
          style={{ cursor: "pointer" }}
        >
          <div className="icon">
            <i className="fa-brands fa-whatsapp text-white"></i>
          </div>
        </a>
      </div>
    </div>
  </div>
</nav>

        {children}

        <footer className="footer clearfix">
  <div className="container">
    <div className="first-footer">
      <div className="row">
        <div className="col-md-12">
          <div className="links dark footer-contact-links">
            <div className="footer-contact-links-wrapper">
              <div className="footer-contact-link-wrapper">
                <div className="image-wrapper footer-contact-link-icon">
                  <div className="icon-footer">
                    <i className="flaticon-phone-call"></i>
                  </div>
                </div>
                <div className="footer-contact-link-content">
                  <h6>Ligue para nós</h6>
                  <p>+244 928 283 666 / +244 926 267 111</p>
                </div>
              </div>
              <div className="footer-contact-links-divider"></div>
              <div className="footer-contact-link-wrapper">
                <div className="image-wrapper footer-contact-link-icon">
                  <div className="icon-footer">
                    <i className="omfi-envelope"></i>
                  </div>
                </div>
                <div className="footer-contact-link-content">
                  <h6>Escreva para nós</h6>
                  <p>info@jmc-angola.com</p>
                </div>
              </div>
              <div className="footer-contact-links-divider"></div>
              <div className="footer-contact-link-wrapper">
                <div className="image-wrapper footer-contact-link-icon">
                  <div className="icon-footer">
                    <i className="omfi-location"></i>
                  </div>
                </div>
                <div className="footer-contact-link-content">
                  <h6>Endereço</h6>
                  <p>Paragem da Mutamba, via expresse, Luanda, Angola</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="second-footer">
      <div className="row">
        <div className="col-md-4 widget-area">
          <div className="widget clearfix">
            <div className="footer-logo">
              <img
                src="/img/logo-jmc.png"
                alt="JMC Angola"
                style={{ height: "60px", width: "auto" }}
              />
            </div>
            <div className="widget-text">
              <p>
                Representante oficial JMC Motors em Angola. Entre em contato
                para aluguel e vendas.
              </p>
              <div className="social-icons">
                <ul className="list-inline">
                  <li>
                    <a href="https://wa.me/244928283666" target="_blank">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/share/1BXMSBpHVe/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/jmc_angola/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/jmc-angola/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 offset-md-1 widget-area">
          <div className="widget clearfix usful-links">
            <h3 className="widget-title">Links Rápidos</h3>
            <ul>
              <li>
                <a href="/sobre">Sobre</a>
              </li>
              <li>
                <a href="#cars.html">Carros</a>
              </li>
              <li>
                <a href="#car-types.html">Tipos de Carro</a>
              </li>
              <li>
                <a href="#team.html">Equipe</a>
              </li>
              <li>
                <a href="#contact.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-4 widget-area">
          <div className="widget clearfix">
            <h3 className="widget-title">Subscreva</h3>
            <p>
              Quer ser notificado sobre os nossos serviços? Inscreva-se e
              enviaremos uma notificação por e-mail.
            </p>
            <div className="widget-newsletter">
              <form action="#">
                <input
                  type="email"
                  placeholder="Endereço de Email"
                  required
                />
                <button type="submit">
                  <i className="ti-arrow-top-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bottom-footer-text">
      <div className="row copyright">
        <div className="col-md-12">
          <p className="mb-0">
            &copy;2025 <a href="#">Md Corporation</a>. Todos direitos reservados.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

<div
  className="modal fade"
  id="exampleModal"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Booking Form
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <div className="booking-box">
          <div className="booking-inner clearfix">
            <form
              method="post"
              action="#0"
              className="form1 contact__form clearfix"
            >
              <div className="row">
                <div className="col-12">
                  <div
                    className="alert alert-success contact__msg"
                    style={{ display: "none" }}
                    role="alert"
                  >
                    Your message was sent successfully.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name *"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone *"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="select1_wrapper">
                    <label>Choose Car Type</label>
                    <div className="select1_inner">
                      <select
                        className="select2 select"
                        style={{ width: "100%" }}
                      >
                        <option value="0">Choose Car Type</option>
                        <option value="1">All</option>
                        <option value="2">Luxury Cars</option>
                        <option value="3">Sport Cars</option>
                        <option value="4"></option>
                        <option value="5">Convertible</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="select1_wrapper">
                    <label>Pick Up Location</label>
                    <div className="select1_inner">
                      <select
                        className="select2 select"
                        style={{ width: "100%" }}
                      >
                        <option value="0">Pick Up Location</option>
                        <option value="1">Dubai</option>
                        <option value="2">Abu Dhabi</option>
                        <option value="3">Sharjah</option>
                        <option value="4">Alain</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="input1_wrapper">
                    <label>Pick Up Date</label>
                    <div className="input1_inner">
                      <input
                        type="text"
                        className="form-control input datepicker"
                        placeholder="Pick Up Date"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="select1_wrapper">
                    <label>Drop Off Location</label>
                    <div className="select1_inner">
                      <select
                        className="select2 select"
                        style={{ width: "100%" }}
                      >
                        <option value="0">Drop Off Location</option>
                        <option value="1">Alain</option>
                        <option value="2">Sharjah</option>
                        <option value="3">Abu Dhabi</option>
                        <option value="4">Dubai</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="input1_wrapper">
                    <label>Return Date</label>
                    <div className="input1_inner">
                      <input
                        type="text"
                        className="form-control input datepicker"
                        placeholder="Return Date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="Additional Note"
                  ></textarea>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="booking-button mt-15">
                    Rent Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  {/* Load jQuery first */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-migrate-3.4.1.min.js" strategy="beforeInteractive" />
        
        {/* Then load the rest in order */}
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />

        {/* Other plugins can be deferred */}
        <Script src="/js/modernizr-2.6.2.min.js" strategy="afterInteractive" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.isotope.v3.0.2.js" strategy="afterInteractive" />
        <Script src="/js/scrollIt.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.stellar.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.js" strategy="afterInteractive" />
        <Script src="/js/select2.js" strategy="afterInteractive" />
        <Script src="/js/datepicker.js" strategy="afterInteractive" />
        <Script src="/js/YouTubePopUp.js" strategy="afterInteractive" />
        <Script src="/js/vegas.slider.min.js" strategy="afterInteractive" />
        <Script src="/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
