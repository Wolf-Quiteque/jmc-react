

export default function Home() {
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
          src="https://res.cloudinary.com/dtfx1jpkq/video/upload/q_auto,f_auto/JMC_Grand_Avenue___Conquer_the_Wild_pxtk30"
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
      <div className="col-lg-4 col-md-12 mb-30">
        <div className="item">
          <div className="con">
            <div className="no">1</div>
            <h5>Escolha Um Carro</h5>
            <p>Veja a nossa gama de carros, encontre o seu carro perfeito para os próximos anos.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mb-30">
        <div className="item">
          <div className="con">
            <div className="no">2</div>
            <h5>Entre em Contacto</h5>
            <p>A nossa equipa de consultores está pronta para o ajudar com o processo de compra.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mb-30">
        <div className="item">
          <div className="con">
            <div className="no">3</div>
            <h5>Desfrute da Viatura</h5>
            <p>Receba a chave e desfrute do seu carro. Garantimos a sua satisfação.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="about section-padding">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-12 mb-30">
        <div className="content">
          <div className="section-subtitle">JMC Motors Angola</div>
          <div className="section-title">
            Muito mais que <span>venda de veículos comerciais</span>
          </div>
          <p className="mb-30">
            Somos o representante oficial da JMC em Angola, trazendo robustez, fiabilidade e
            economia em cada pick-up, SUV ou veículo comercial leve. A nossa missão é garantir
            soluções personalizadas e suporte contínuo para clientes e empresas.
          </p>
          <ul className="list-unstyled list mb-30">
            <li>
              <div className="list-icon"><span className="ti-check"></span></div>
              <div className="list-text">
                <p>Pick-ups potentes e duráveis</p>
              </div>
            </li>
            <li>
              <div className="list-icon"><span className="ti-check"></span></div>
              <div className="list-text">
                <p>espaçosos com garantia de fábrica</p>
              </div>
            </li>
            <li>
              <div className="list-icon"><span className="ti-check"></span></div>
              <div className="list-text">
                <p>Serviço e manutenção autorizada</p>
              </div>
            </li>
          </ul>
          <a href="sobre.html" className="button-1">
            Saber Mais <span className="ti-arrow-top-right"></span>
          </a>
        </div>
      </div>

      <div className="col-lg-5 offset-lg-1 col-md-12">
        <div className="item">
          <img src="/img/about.webp" className="img-fluid" alt="" />
          <div className="curv-butn icon-bg">
            <a href="https://www.youtube.com/watch?v=LP472BC8hT8" className="vid">
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
  data-background="img/maxresdefault.jpg"
>
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center mb-15">
        <div className="section-subtitle" style={{ color: "#f5b754" }}>
          Visite-nos
        </div>
        <div className="section-title">FILDA 2025 - JMC ANGOLA</div>
        <p className="text-light mb-30">
          A experiência na FILDA foi incrível com a presença da JMC ANGOLA!
          Inovação, potência e estilo que marcaram o evento.
        </p>
      </div>
    </div>

    <div className="row gallery-items">
      <div className="col-lg-4 col-md-6 single-item luxurycars mb-15">
        <a
          href="img/filda/1.webp"
          title=""
          className="gallery-masonry-item-img-link img-zoom"
        >
          <div className="gallery-box">
            <div className="gallery-img">
              <img
                src="/img/filda/1.webp"
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
            <div className="bottom-fade"></div>
            <div className="gallery-detail"></div>
          </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6 single-item sportcars mb-15">
        <a
          href="img/filda/2.webp"
          title=""
          className="gallery-masonry-item-img-link img-zoom"
        >
          <div className="gallery-box">
            <div className="gallery-img">
              <img
                src="/img/filda/2.webp"
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
            <div className="bottom-fade"></div>
            <div className="gallery-detail"></div>
          </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6 single-item sportcars mb-15">
        <a
          href="img/filda/3.webp"
          title=""
          className="gallery-masonry-item-img-link img-zoom"
        >
          <div className="gallery-box">
            <div className="gallery-img">
              <img
                src="/img/filda/3.webp"
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
            <div className="bottom-fade"></div>
            <div className="gallery-detail"></div>
          </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6 single-item suv mb-15">
        <a
          href="img/filda/4.webp"
          title=""
          className="gallery-masonry-item-img-link img-zoom"
        >
          <div className="gallery-box">
            <div className="gallery-img">
              <img
                src="/img/filda/4.webp"
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
            <div className="bottom-fade"></div>
            <div className="gallery-detail"></div>
          </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6 single-item suv mb-15">
        <a
          href="img/filda/5.webp"
          title=""
          className="gallery-masonry-item-img-link img-zoom"
        >
          <div className="gallery-box">
            <div className="gallery-img">
              <img
                src="/img/filda/5.webp"
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
            <div className="bottom-fade"></div>
            <div className="gallery-detail"></div>
          </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6 single-item suv mb-15">
        <a
          href="img/filda/6.webp"
          title=""
          className="gallery-masonry-item-img-link img-zoom"
        >
          <div className="gallery-box">
            <div className="gallery-img">
              <img
                src="/img/filda/6.webp"
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
            <div className="bottom-fade"></div>
            <div className="gallery-detail"></div>
          </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6 single-item suv mb-15">
        <a
          href="img/filda/7.webp"
          title=""
          className="gallery-masonry-item-img-link img-zoom"
        >
          <div className="gallery-box">
            <div className="gallery-img">
              <img
                src="/img/filda/7.webp"
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
            <div className="bottom-fade"></div>
            <div className="gallery-detail"></div>
          </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6 single-item suv mb-15">
        <a
          href="img/filda/8.webp"
          title=""
          className="gallery-masonry-item-img-link img-zoom"
        >
          <div className="gallery-box">
            <div className="gallery-img">
              <img
                src="/img/filda/8.webp"
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
            <div className="bottom-fade"></div>
            <div className="gallery-detail"></div>
          </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6 single-item suv mb-15">
        <a
          href="img/filda/9.webp"
          title=""
          className="gallery-masonry-item-img-link img-zoom"
        >
          <div className="gallery-box">
            <div className="gallery-img">
              <img
                src="/img/filda/9.webp"
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
            <div className="bottom-fade"></div>
            <div className="gallery-detail"></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>


<section className="cars3 section-padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center mb-30">
        <div className="section-subtitle">Escolha o Seu Modelo</div>
        <div className="section-title">Frota de <span>Carros JMC</span></div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="owl-carousel owl-theme">
          <div className="item">
            <a href="vigus.html" className="img">
              <img src="/img/blog/8.webp" alt="JMC Vigus" className="img-fluid" />
              <div className="bottom-fade"></div>
              <div className="arrow"><i className="ti-arrow-right"></i></div>
            </a>
            <div className="info">
              <div className="title"><a href="vigus.html">VIGUS</a></div>
              <div className="details">
                <span><i className="omfi-passengers"></i> 5 Lugares</span>
                <span><i className="omfi-transmission"></i> Automático 6v</span>
                <span><i className="omfi-luggage"></i> 1.1T Carga</span>
              </div>
            </div>
          </div>

          <div className="item">
            <a href="grand-avenue.html" className="img">
              <img src="/img/blog/6.webp" alt="JMC Grand Avenue" className="img-fluid" />
              <div className="bottom-fade"></div>
              <div className="arrow"><i className="ti-arrow-right"></i></div>
            </a>
            <div className="info">
              <div className="title"><a href="grand-avenue.html">GRAND AVENUE</a></div>
              <div className="details">
                <span><i className="omfi-passengers"></i> 5 Lugares</span>
                <span><i className="omfi-transmission"></i> Automático 8v</span>
                <span><i className="fas fa-gas-pump"></i> Diesel</span>
              </div>
            </div>
          </div>

          <div className="item">
            <a href="touring.html" className="img">
              <img src="/img/car_model/Touring/touring.webp" alt="JMC Touring" className="img-fluid" />
              <div className="bottom-fade"></div>
              <div className="arrow"><i className="ti-arrow-right"></i></div>
            </a>
            <div className="info">
              <div className="title"><a href="touring.html">TOURING</a></div>
              <div className="details">
                <span><i className="omfi-passengers"></i> 15 Lugares</span>
                <span><i className="omfi-transmission"></i> Manual 6v</span>
                <span><i className="omfi-luggage"></i> 580L Porta-malas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-md-12 text-center">
        <a
          href="Catálogo JMC Português  com preços.pdf"
          target="_blank"
          className="button-1"
          download="Catálogo JMC Português  com preços.pdf"
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
  data-background="img/slider/2.webp"
>
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center mb-15">
        <div className="section-subtitle" style={{ color: "#f5b754" }}>
          Visite-nos
        </div>
        <div className="section-title">Agende a Sua Visita ao Showroom</div>
        <p className="text-light mb-30">
          Estamos localizados na Via Expressa, junto à paragem da Mutamba,
          Luanda. Preencha o formulário e teremos todo o prazer em recebê-lo.
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
        <div className="section-subtitle">Escolha o Seu Modelo</div>
        <div className="section-title">
          Frota de <span>Caminhões JMC</span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="owl-carousel owl-theme">
          <div className="item">
            <a href="carryingplus.html" className="img">
              <img
                src="/img/car_model/CarringPlus/carringplus.webp"
                alt="JMC Carring Plus"
                className="img-fluid"
              />
              <div className="bottom-fade"></div>
              <div className="arrow">
                <i className="ti-arrow-right"></i>
              </div>
            </a>
            <div className="info">
              <div className="title">
                <a href="carryingplus.html">CARRING PLUS</a>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-snowflake"></i> -18°C Refrigeração
                </span>
                <span>
                  <i className="fas fa-weight-hanging"></i> 3.5T Carga
                </span>
                <span>
                  <i className="omfi-transmission"></i> Manual 5v
                </span>
              </div>
            </div>
          </div>

          <div className="item">
            <a href="carrying.html" className="img">
              <img
                src="/img/car_model/Carring/carringsale.webp"
                alt="JMC Carring"
                className="img-fluid"
              />
              <div className="bottom-fade"></div>
              <div className="arrow">
                <i className="ti-arrow-right"></i>
              </div>
            </a>
            <div className="info">
              <div className="title">
                <a href="carrying.html">CARRING</a>
              </div>
              <div className="details">
                <span>
                  <i className="omfi-passengers"></i> 2 Lugares (cabina)
                </span>
                <span>
                  <i className="fas fa-truck-loading"></i> 15m³ Carga
                </span>
                <span>
                  <i className="omfi-engine"></i> 2.4L Turbo Diesel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  data-scroll-index="1"
  className="background bg-img bg-fixed section-padding"
  data-overlay-dark="5"
  data-background="img/slider/2.webp"
>
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center mb-15">
        <div className="section-subtitle" style={{ color: '#f5b754' }}>Visite-nos</div>
        <div className="section-title">Agende a Sua Visita ao Showroom</div>
        <p className="text-light mb-30">
          Estamos localizados na Via Expressa, junto à paragem da Mutamba, Luanda. Preencha o formulário e teremos todo o prazer em recebê-lo.
        </p>
      </div>
    </div>
    <div className="booking-inner clearfix">
      <form action="#" method="post" className="form1 brdr clearfix">
        <div className="col2 c3">
          <div className="input1_wrapper">
            <label>Nome Completo</label>
            <div className="input1_inner">
              <input type="text" name="nome" className="form-control input" placeholder="Seu nome completo" required />
            </div>
          </div>
        </div>
        <div className="col2 c4">
          <div className="input1_wrapper">
            <label>Telefone / E-mail</label>
            <div className="input1_inner">
              <input type="text" name="contato" className="form-control input" placeholder="Telefone ou E-mail" required />
            </div>
          </div>
        </div>
        <div className="col1 c1">
          <div className="input1_wrapper">
            <label>Data Desejada</label>
            <div className="input1_inner">
              <input type="text" name="data_visita" className="form-control input datepicker" placeholder="Selecione a data" required />
            </div>
          </div>
        </div>
        <div className="col2 c5">
          <div className="select1_wrapper">
            <label>Veículo de Interesse</label>
            <div className="select1_inner">
              <select name="modelo" className="select2 select" style={{ width: '100%' }} required>
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
              <input type="time" name="hora_visita" className="form-control input" required />
            </div>
          </div>
        </div>
        <div className="col3 c6">
          <button type="submit" className="booking-button">Agendar Visita</button>
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
        <div className="section-subtitle">Escolha o Seu Modelo</div>
        <div className="section-title">Frota de <span>Caminhões JMC</span></div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="owl-carousel owl-theme">
          <div className="item">
            <a href="carryingplus.html" className="img">
              <img src="/img/car_model/CarringPlus/carringplus.webp" alt="JMC Carring Plus" className="img-fluid" />
              <div className="bottom-fade"></div>
              <div className="arrow"><i className="ti-arrow-right"></i></div>
            </a>
            <div className="info">
              <div className="title"><a href="carryingplus.html">CARRING PLUS</a></div>
              <div className="details">
                <span><i className="fas fa-snowflake"></i> -18°C Refrigeração</span>
                <span><i className="fas fa-weight-hanging"></i> 3.5T Carga</span>
                <span><i className="omfi-transmission"></i> Manual 5v</span>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="carrying.html" className="img">
              <img src="/img/car_model/Carring/carringsale.webp" alt="JMC Carring" className="img-fluid" />
              <div className="bottom-fade"></div>
              <div className="arrow"><i className="ti-arrow-right"></i></div>
            </a>
            <div className="info">
              <div className="title"><a href="carrying.html">CARRING</a></div>
              <div className="details">
                <span><i className="omfi-passengers"></i> 2 Lugares (cabina)</span>
                <span><i className="fas fa-truck-loading"></i> 15m³ Carga</span>
                <span><i className="omfi-engine"></i> 2.4L Turbo Diesel</span>
              </div>
            </div>
          </div>
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
        <div className="section-subtitle">Nosso Blog</div>
        <div className="section-title">
          Últimas <span>Notícias</span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="owl-carousel owl-theme">
          <div className="item">
            <img
              src="https://omo-oss-image.thefastimg.com/portal-saas/pg2024091816575240554/cms/image/b12510d8-5206-4e1c-86ab-bef647e4f13c.jpg_1180xaf.jpg"
              className="img-fluid"
              alt="JMC na Expo do Oriente Médio"
            />
            <div className="bottom-fade"></div>
            <div className="title">
              <h6>Expansão Global</h6>
              <h4>JMC marca presença na Expo do Oriente Médio</h4>
            </div>
            <div className="curv-butn icon-bg">
              <a
                href="https://www.jmcg-global.com/news/2/"
                className="vid"
              >
                <div className="icon">
                  <i className="icon-show">
                    <span>
                      09<br />
                      <i>Mai</i>
                    </span>
                  </i>
                  <i className="ti-arrow-top-right icon-hidden"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="item">
            <img
              src="https://i.ytimg.com/vi/5YF5InQHXjI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAs6LZ8MFbenqaJjxYl0V03tJ1pYg"
              className="img-fluid"
              alt="JMC no Quênia"
            />
            <div className="bottom-fade"></div>
            <div className="title">
              <h6>Expansão Africana</h6>
              <h4>JMC entra no mercado do Quênia com novos modelos</h4>
            </div>
            <div className="curv-butn icon-bg">
              <a
                href="https://english.news.cn/africa/20250328/a9e92d192705413ebd5569f1abe4fc32/c.html"
                className="vid"
              >
                <div className="icon">
                  <i className="icon-show">
                    <span>
                      28<br />
                      <i>Mar</i>
                    </span>
                  </i>
                  <i className="ti-arrow-top-right icon-hidden"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="item">
            <img
              src="https://www.chinatrucks.org/uploadfile/2025/0424/20250424090551280.jpg"
              className="img-fluid"
              alt="JMC e Bosch na Auto Shanghai"
            />
            <div className="bottom-fade"></div>
            <div className="title">
              <h6>Inovação Tecnológica</h6>
              <h4>
                JMC e Bosch apresentam solução de caminhão leve na Auto Shanghai
              </h4>
            </div>
            <div className="curv-butn icon-bg">
              <a
                href="https://www.chinavehicle.org/news/50781.html"
                className="vid"
              >
                <div className="icon">
                  <i className="icon-show">
                    <span>
                      24<br />
                      <i>Abr</i>
                    </span>
                  </i>
                  <i className="ti-arrow-top-right icon-hidden"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="item">
            <img
              src="https://www.chinatrucks.com/uploadfile/2024/1115/20241115043434568.jpg"
              className="img-fluid"
              alt="Lançamento da plataforma elétrica da JMC"
            />
            <div className="bottom-fade"></div>
            <div className="title">
              <h6>Mobilidade Sustentável</h6>
              <h4>
                JMC lança plataforma de veículos comerciais elétricos na Auto
                Guangzhou
              </h4>
            </div>
            <div className="curv-butn icon-bg">
              <a
                href="https://www.marklines.com/en/news/318036"
                className="vid"
              >
                <div className="icon">
                  <i className="icon-show">
                    <span>
                      15<br />
                      <i>Nov</i>
                    </span>
                  </i>
                  <i className="ti-arrow-top-right icon-hidden"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="item">
            <img
              src="https://www.autohebdo.fr/app/uploads/2024/03/DPPI_00124002_1102.jpg"
              className="img-fluid"
              alt="JMC no Grand Prêmio do Bahrein"
            />
            <div className="bottom-fade"></div>
            <div className="title">
              <h6>Presença no Esporte</h6>
              <h4>
                JMC participa como veículo oficial no Grande Prêmio do Bahrein
              </h4>
            </div>
            <div className="curv-butn icon-bg">
              <a
                href="https://www.chinaevs.org/news/2025/1030.html"
                className="vid"
              >
                <div className="icon">
                  <i className="icon-show">
                    <span>
                      09<br />
                      <i>Mai</i>
                    </span>
                  </i>
                  <i className="ti-arrow-top-right icon-hidden"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  className="lets-talk bg-img bg-fixed section-padding"
  data-overlay-dark="5"
  data-background="img/slider/1.webp"
>
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h6 style={{ color: "#f5b754" }}>Representante em Angola</h6>
        <h5>Entre em contacto</h5>
        <p>
          Paragem da Mutamba, via expresse. Para mais informações online, visite
          nosso site.
        </p>
        <a
          href="https://wa.me/244928283666"
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
}
