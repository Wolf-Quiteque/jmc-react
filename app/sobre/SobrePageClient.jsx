"use client"
import { useTina } from "tinacms/dist/react";
import React from 'react';

const SobrePageClient = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const pageData = data.sobre;

  return (
    <>
    <section
      className="banner-header section-padding bg-img"
      data-overlay-dark="4"
      data-background={pageData.banner.backgroundImage}
    >
      <div className="v-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6 style={{ color: "#f5b754" }}>{pageData.banner.subtitle}</h6>
              <h1>
                {pageData.banner.title.split(' ')[0]} <span>{pageData.banner.title.split(' ')[1]}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="line-vr-section"></div>

    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content">
              <div className="section-subtitle">{pageData.about.subtitle}</div>
              <div className="section-title">
                {pageData.about.title.split(' ')[0]} {pageData.about.title.split(' ')[1]} {pageData.about.title.split(' ')[2]} {pageData.about.title.split(' ')[3]} <span>{pageData.about.title.split(' ')[4]} {pageData.about.title.split(' ')[5]} {pageData.about.title.split(' ')[6]}</span>
              </div>

              <p>{pageData.about.text1}</p>
              <p>{pageData.about.text2}</p>

              <ul className="list-unstyled list mb-30">
                {pageData.about.features.map((feature, index) => (
                  <li key={index}>
                    <div className="list-icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="list-text">
                      <p>{feature}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mb-30">{pageData.about.text3}</p>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="item">
              <img
                src={pageData.about.image}
                className="img-fluid"
                alt="Frota JMC em Angola"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="line-vr-section"></div>

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
              rel="noopener noreferrer"
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
    </>
  )
};

export default SobrePageClient;
