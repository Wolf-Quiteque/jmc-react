import React from "react";

const CarListingPage = () => {
  return (
    <>
      {/* Banner Section */}
      <section
        className="banner-header section-padding bg-img"
        data-overlay-dark="5"
        data-background="img/slider/11.webp"
        style={{ backgroundImage: 'url("img/slider/11.webp")' }}
      >
        <div className="v-middle">
          <div className="container">
            <div className="col-md-12 text-center">
              <h6 style={{ color: "#f5b754" }}>Explora</h6>
              <h1>
                <span>Máxima</span> Versatilidade
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
                    <div className="form-group">
                      <input type="radio" id="jmc1" name="radio-group_brand" />
                      <label htmlFor="jmc1">JMC</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="radio"
                        id="jingma1"
                        name="radio-group_brand"
                      />
                      <label htmlFor="jingma1">Jingma</label>
                    </div>
                  </div>

                  <h5>Tipo de Veículo</h5>
                  <div className="filter-radio-group">
                    {[
                      { id: "pickup1", label: "Pick-ups" },
                      { id: "commercial1", label: "Comerciais" },
                      { id: "bus1", label: "Autocarros" },
                      { id: "truck1", label: "Camiões" },
                    ].map((item) => (
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
                    {[
                      { id: "auto1", label: "Automática" },
                      { id: "manual1", label: "Manual" },
                    ].map((item) => (
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
                    {[
                      { id: "motor1", label: "2.0L Turbo" },
                      { id: "motor2", label: "2.3L Turbo" },
                      { id: "motor3", label: "2.5L Turbo" },
                      { id: "motor4", label: "2.8L Diesel" },
                      { id: "motor5", label: "3.0L Diesel" },
                    ].map((item) => (
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
                    {[
                      { id: "pass1", label: "3-5 Passageiros" },
                      { id: "pass2", label: "15 Passageiros" },
                      { id: "pass3", label: "23 Passageiros" },
                      { id: "pass4", label: "30 Passageiros" },
                    ].map((item) => (
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
                {/* Example Car Card */}
                {[
                  {
                    img: "img/blog/8.webp",
                    title: "VIGUS",
                    features: [
                      ["fas fa-horse-head", "Potência", "163 CV (Diesel 2.0L)"],
                      [
                        "omfi-transmission",
                        "Transmissão",
                        "Automática 6 velocidades",
                      ],
                      ["fas fa-bolt", "Torque", "375 Nm @ 1.800rpm"],
                    ],
                  },
                  {
                    img: "img/blog/6.webp",
                    title: "GRAND AVENUE",
                    features: [
                      ["fas fa-horse-head", "Potência", "190 CV (Gasolina 2.0T)"],
                      [
                        "omfi-transmission",
                        "Transmissão",
                        "Automática 8 velocidades",
                      ],
                      ["fas fa-bolt", "Torque", "350 Nm @ 1.500rpm"],
                    ],
                  },
                ].map((car, index) => (
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
                                <i className={feat[0]}></i> {feat[1]}
                              </span>
                              <p>{feat[2]}</p>
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
        data-background="img/slider/2.webp"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-15">
              <div className="section-subtitle" style={{ color: "#f5b754" }}>
                Visite-nos
              </div>
              <div className="section-title">
                Agende a Sua Visita ao Showroom
              </div>
              <p className="text-light mb-30">
                Estamos localizados na Via Expressa, junto à paragem da Mutamba,
                Luanda. Preencha o formulário e teremos todo o prazer em
                recebê-lo.
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

export default CarListingPage;
