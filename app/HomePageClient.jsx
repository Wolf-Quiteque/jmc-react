"use client"
import { useTina } from "tinacms/dist/react";
import React from 'react';

const HomePageClient = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const pageData = data.home;

  return (
    <>
      <header className="header">
        <div className="video-fullscreen-wrap">
          <div className="video-fullscreen-video" data-overlay-dark="2">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              width="100%"
            >
              <source
                src={pageData.header.videoUrl}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="v-middle">
            <div className="container">
              <div className="row"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="process-number mt--120 mb-60">
        <div className="container">
          <div className="row">
            {pageData.process.map((item, index) => (
              <div className="col-lg-4 col-md-12 mb-30" key={index}>
                <div className="item">
                  <div className="con">
                    <div className="no">{item.number}</div>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="content">
                <div className="section-subtitle">{pageData.about.subtitle}</div>
                <div className="section-title">
                  {pageData.about.title.split(' ').slice(0, 4).join(' ')} <span>{pageData.about.title.split(' ').slice(4).join(' ')}</span>
                </div>
                <p className="mb-30">
                  {pageData.about.text}
                </p>
                <ul className="list-unstyled list mb-30">
                  {pageData.about.features.map((feature, index) => (
                    <li key={index}>
                      <div className="list-icon"><span className="ti-check"></span></div>
                      <div className="list-text">
                        <p>{feature}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a href={pageData.about.link} className="button-1">
                  Saber Mais <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 col-md-12">
              <div className="item">
                <img src={pageData.about.image} className="img-fluid" alt="" />
                <div className="curv-butn icon-bg">
                  <a href={pageData.about.videoLink} className="vid">
                    <div className="icon">
                      <i className="ti-control-play"></i>
                    </div>
                  </a>
                  <div className="br-left-top">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1b1b1b"
                      ></path>
                    </svg>
                  </div>
                  <div className="br-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1b1b1b"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="line-vr-section"></div>

      <section
        data-scroll-index="1"
        className="background bg-img bg-fixed section-padding"
        data-overlay-dark="5"
        data-background={pageData.filda.backgroundImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-15">
              <div className="section-subtitle" style={{ color: "#f5b754" }}>
                {pageData.filda.subtitle}
              </div>
              <div className="section-title">{pageData.filda.title}</div>
              <p className="text-light mb-30">
                {pageData.filda.text}
              </p>
            </div>
          </div>

          <div className="row gallery-items">
            {pageData.filda.images.map((image, index) => (
              <div className="col-lg-4 col-md-6 single-item luxurycars mb-15" key={index}>
                <a
                  href={image}
                  title=""
                  className="gallery-masonry-item-img-link img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      <img
                        src={image}
                        className="img-fluid mx-auto d-block"
                        alt=""
                      />
                    </div>
                    <div className="bottom-fade"></div>
                    <div className="gallery-detail"></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cars3 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">{pageData.carFleet.subtitle}</div>
              <div className="section-title">
                {pageData.carFleet.title.split(' ').slice(0, 3).join(' ')} <span>{pageData.carFleet.title.split(' ').slice(3).join(' ')}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                {pageData.carFleet.cars.map((car, index) => (
                  <div className="item" key={index}>
                    <a href={car.link} className="img">
                      <img src={car.image} alt={car.name} className="img-fluid" />
                      <div className="bottom-fade"></div>
                      <div className="arrow"><i className="ti-arrow-right"></i></div>
                    </a>
                    <div className="info">
                      <div className="title"><a href={car.link}>{car.name}</a></div>
                      <div className="details">
                        {car.features.map((feature, i) => (
                          <span key={i}><i className={feature.icon}></i> {feature.text}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <a
                href={pageData.carFleet.catalogLink}
                target="_blank"
                className="button-1"
                download={pageData.carFleet.catalogLink}
              >
                Catálago <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        data-scroll-index="1"
        className="background bg-img bg-fixed section-padding"
        data-overlay-dark="5"
        data-background={pageData.booking.backgroundImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-15">
              <div className="section-subtitle" style={{ color: "#f5b754" }}>
                {pageData.booking.subtitle}
              </div>
              <div className="section-title">{pageData.booking.title}</div>
              <p className="text-light mb-30">
                {pageData.booking.text}
              </p>
            </div>
          </div>
          <div className="booking-inner clearfix">
            <form action="#" method="post" className="form1 brdr clearfix">
              <div className="col2 c3">
                <div className="input1_wrapper">
                  <label>Nome Completo</label>
                  <div className="input1_inner">
                    <input
                      type="text"
                      name="nome"
                      className="form-control input"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col2 c4">
                <div className="input1_wrapper">
                  <label>Telefone / E-mail</label>
                  <div className="input1_inner">
                    <input
                      type="text"
                      name="contato"
                      className="form-control input"
                      placeholder="Telefone ou E-mail"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col1 c1">
                <div className="input1_wrapper">
                  <label>Data Desejada</label>
                  <div className="input1_inner">
                    <input
                      type="text"
                      name="data_visita"
                      className="form-control input datepicker"
                      placeholder="Selecione a data"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col2 c5">
                <div className="select1_wrapper">
                  <label>Veículo de Interesse</label>
                  <div className="select1_inner">
                    <select
                      name="modelo"
                      className="select2 select"
                      style={{ width: "100%" }}
                      required
                    >
                      <option value="">Escolha um modelo</option>
                      <option value="Grand Avenue">JMC Grand Avenue</option>
                      <option value="Vigus">JMC Vigus</option>
                      <option value="Carrying">JMC Carrying</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col1 c2">
                <div className="input1_wrapper">
                  <label>Hora Preferida</label>
                  <div className="input1_inner">
                    <input
                      type="time"
                      name="hora_visita"
                      className="form-control input"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col3 c6">
                <button type="submit" className="booking-button">
                  Agendar Visita
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="line-vr-section"></div>

      <section className="cars3 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">{pageData.truckFleet.subtitle}</div>
              <div className="section-title">
                {pageData.truckFleet.title.split(' ').slice(0, 3).join(' ')} <span>{pageData.truckFleet.title.split(' ').slice(3).join(' ')}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                {pageData.truckFleet.trucks.map((truck, index) => (
                  <div className="item" key={index}>
                    <a href={truck.link} className="img">
                      <img src={truck.image} alt={truck.name} className="img-fluid" />
                      <div className="bottom-fade"></div>
                      <div className="arrow">
                        <i className="ti-arrow-right"></i>
                      </div>
                    </a>
                    <div className="info">
                      <div className="title">
                        <a href={truck.link}>{truck.name}</a>
                      </div>
                      <div className="details">
                        {truck.features.map((feature, i) => (
                          <span key={i}>
                            <i className={feature.icon}></i> {feature.text}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="line-vr-section"></div>

      <section className="blog2 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">{pageData.blog.subtitle}</div>
              <div className="section-title">
                {pageData.blog.title.split(' ')[0]} <span>{pageData.blog.title.split(' ')[1]}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                {pageData.blog.posts.map((post, index) => (
                  <div className="item" key={index}>
                    <img
                      src={post.image}
                      className="img-fluid"
                      alt={post.title}
                    />
                    <div className="bottom-fade"></div>
                    <div className="title">
                      <h6>{post.category}</h6>
                      <h4>{post.title}</h4>
                    </div>
                    <div className="curv-butn icon-bg">
                      <a
                        href={post.link}
                        className="vid"
                      >
                        <div className="icon">
                          <i className="icon-show">
                            <span>
                              {post.date.split(' ')[0]}<br />
                              <i>{post.date.split(' ')[1]}</i>
                            </span>
                          </i>
                          <i className="ti-arrow-top-right icon-hidden"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="lets-talk bg-img bg-fixed section-padding"
        data-overlay-dark="5"
        data-background={pageData.contact.backgroundImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h6 style={{ color: "#f5b754" }}>{pageData.contact.subtitle}</h6>
              <h5>{pageData.contact.title}</h5>
              <p>
                {pageData.contact.text}
              </p>
              <a
                href={pageData.contact.whatsappLink}
                target="_blank"
                className="button-1 mt-15 mb-15 mr-10"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
              <a
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                href="#0"
                className="button-2 mt-15 mb-15"
              >
                Contactar Agora <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageClient;
