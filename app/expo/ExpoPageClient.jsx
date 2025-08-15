"use client"
import { useTina } from "tinacms/dist/react";
import React from "react";

const ExpoPageClient = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const pageData = data.expo;

  return (
    <>
      {/* Banner Section */}
      <section
        className="banner-header section-padding bg-img"
        data-overlay-dark="5"
        data-background={pageData.banner.backgroundImage}
        style={{ backgroundImage: `url("${pageData.banner.backgroundImage}")` }}
      >
        <div className="v-middle">
          <div className="container">
            <div className="col-md-12 text-center">
              <h6 style={{ color: "#f5b754" }}>{pageData.banner.subtitle}</h6>
              <h1>
                <span>{pageData.banner.title}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="cars4 section-padding">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 mb-30">
              <div className="sidebar-list">
                <div className="search">
                  <form>
                    <input
                      type="text"
                      name="search"
                      placeholder="Pesquisar veículos ..."
                    />
                    <button type="submit">
                      <i className="ti-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
                <div className="item">
                  <h5>Selecionar Marca</h5>
                  <div className="filter-radio-group">
                    {pageData.sidebar.brands.map((brand) => (
                      <div className="form-group" key={brand.id}>
                        <input type="radio" id={brand.id} name="radio-group_brand" />
                        <label htmlFor={brand.id}>{brand.label}</label>
                      </div>
                    ))}
                  </div>

                  <h5>Tipo de Veículo</h5>
                  <div className="filter-radio-group">
                    {pageData.sidebar.vehicleTypes.map((item) => (
                      <div className="form-group" key={item.id}>
                        <input
                          type="radio"
                          id={item.id}
                          name="radio-group_type"
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                      </div>
                    ))}
                  </div>

                  <h5>Transmissão</h5>
                  <div className="filter-radio-group">
                    {pageData.sidebar.transmissions.map((item) => (
                      <div className="form-group" key={item.id}>
                        <input
                          type="radio"
                          id={item.id}
                          name="radio-group_transmission"
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                      </div>
                    ))}
                  </div>

                  <h5>Motor</h5>
                  <div className="filter-radio-group">
                    {pageData.sidebar.engines.map((item) => (
                      <div className="form-group" key={item.id}>
                        <input
                          type="radio"
                          id={item.id}
                          name="radio-group_engine"
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                      </div>
                    ))}
                  </div>

                  <h5>Capacidade de Passageiros</h5>
                  <div className="filter-radio-group">
                    {pageData.sidebar.passengerCapacities.map((item) => (
                      <div className="form-group" key={item.id}>
                        <input
                          type="radio"
                          id={item.id}
                          name="radio-group_passengers"
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-8 col-md-12 car-list">
              <div className="row">
                {pageData.cars.map((car, index) => (
                  <div className="col-lg-6 col-md-12 mb-30" key={index}>
                    <div className="item">
                      <figure>
                        <img src={car.img} alt={car.title} className="img-fluid" />
                      </figure>
                      <div className="content">
                        <div className="cont">
                          <h3>{car.title}</h3>
                          {car.features.map((feat, i) => (
                            <div className="features" key={i}>
                              <span>
                                <i className={feat.icon}></i> {feat.label}
                              </span>
                              <p>{feat.value}</p>
                            </div>
                          ))}
                          <div className="book mt-30">
                            <a href="car-details.html" className="button-1">
                              Detalhes
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="row">
                <div className="col-md-12 mt-30 text-center">
                  <ul className="pagination-wrap">
                    <li>
                      <a href="#">
                        <i className="ti-angle-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
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
              <div className="section-title">
                {pageData.booking.title}
              </div>
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
    </>
  );
};

export default ExpoPageClient;
