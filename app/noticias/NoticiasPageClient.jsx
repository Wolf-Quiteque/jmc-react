"use client"
import { useTina } from "tinacms/dist/react";
import React from 'react';

const NoticiasPageClient = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const pageData = data.noticias;

  return (
      <>
      <section
        className="banner-header section-padding bg-img"
        data-overlay-dark="6"
        data-background={pageData.banner.backgroundImage}
      >
        <div className="v-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h6 style={{ color: "#f5b754" }}>{pageData.banner.subtitle}</h6>
                <h1>{pageData.banner.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="line-vr-section"></div>

      <section className="blog1 section-padding">
        <div className="container">
          <div className="row">
            {pageData.posts.map((post, index) => (
              <div className="col-lg-4 col-md-6 mb-45" key={index}>
                <div className="item">
                  <div className="img">
                    <img src={post.image} alt="" />
                  </div>
                  <div className="wrapper">
                    <div className="date">
                      <a href="#">{post.date}</a>
                    </div>
                    <div className="con">
                      <div className="category">
                        <a href="#">
                          <i className="ti-user"></i>
                          {post.author}
                        </a>
                        <a href="#">
                          <i className="ti-comment"></i>
                          {post.comments}
                        </a>
                      </div>
                      <div className="text">
                        <a href={post.link}>{post.title}</a>
                      </div>
                      <a href={post.link} className="icon-btn">
                        <i className="ti-arrow-top-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="lets-talk bg-img bg-fixed section-padding"
        data-overlay-dark="5"
        data-background={pageData.contactSection.backgroundImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h6 style={{ color: "#f5b754" }}>{pageData.contactSection.subtitle}</h6>
              <h5>{pageData.contactSection.title}</h5>
              <p>{pageData.contactSection.text}</p>
              <a
                href={pageData.contactSection.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="button-1 mt-15 mb-15 mr-10"
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
                  <form method="post" action="#0" className="form1 contact__form clearfix">
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
                            <select className="select2 select" style={{ width: "100%" }}>
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
                            <select className="select2 select" style={{ width: "100%" }}>
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
                            <select className="select2 select" style={{ width: "100%" }}>
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
    </>
  )
};

export default NoticiasPageClient;
