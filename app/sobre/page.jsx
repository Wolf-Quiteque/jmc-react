export default function page() {
  return (
    <>
    <section
  className="banner-header section-padding bg-img"
  data-overlay-dark="4"
  data-background="/img/slider/3.webp"
>
  <div className="v-middle">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h6 style={{ color: "#f5b754" }}>JMC ANGOLA</h6>
          <h1>
            Sobre <span>Nós</span>
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
          <div className="section-subtitle">JMC ANGOL</div>
          <div className="section-title">
            Somos mais do que <span>um representante oficial</span> da JMC
          </div>

          <p>
            A JMC ANGOL é o representante oficial da JMC em Angola, comprometida
            em oferecer soluções automotivas de excelência. Com ampla experiência
            no setor, garantimos veículos comerciais robustos e serviços
            pós-venda de alta qualidade.
          </p>

          <p>
            Nossa missão vai além da comercialização — buscamos construir
            parcerias de confiança com cada cliente. Para isso, contamos com uma
            rede de assistência técnica autorizada, peças originais e uma equipa
            especializada para prestar suporte completo.
          </p>

          <ul className="list-unstyled list mb-30">
            <li>
              <div className="list-icon">
                <i className="fa fa-check"></i>
              </div>
              <div className="list-text">
                <p>Venda de veículos comerciais JMC com certificação oficial</p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <i className="fa fa-check"></i>
              </div>
              <div className="list-text">
                <p>Serviço de pós-venda e manutenção autorizada</p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <i className="fa fa-check"></i>
              </div>
              <div className="list-text">
                <p>Peças originais e suporte técnico especializado</p>
              </div>
            </li>
            <li>
              <div className="list-icon">
                <i className="fa fa-check"></i>
              </div>
              <div className="list-text">
                <p>Soluções personalizadas para a sua frota empresarial</p>
              </div>
            </li>
          </ul>

          <p className="mb-30">
            Na JMC ANGOL, você encontra toda a estrutura necessária para adquirir,
            manter e equipar veículos confiáveis que acompanham o ritmo do seu
            negócio em Angola.
          </p>
        </div>
      </div>
      <div className="col-md-5 offset-md-1">
        <div className="item">
          <img
            src="img/about3.webp"
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
  data-background="/img/slider/1.webp"
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
}
