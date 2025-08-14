import React from 'react';

// Banner Component
const Banner = () => (
  <section className="banner-header section-padding bg-img" data-overlay-dark="2" data-background="img/car_model/GrandAvenue/1.jpg">
    <div className="v-middle">
      <div className="container">
        <div className="col-md-12">
          <h1>Grand Avenue</h1>
        </div>
      </div>
    </div>
  </section>
);

// Feature List Component
const FeatureList = () => (
  <ul className="list-unstyled list mb-30">
    <li>
      <div className="list-icon"><span className="ti-check"></span></div>
      <div className="list-text">
        <p>Motorização Turbo Diesel 2.0L</p>
      </div>
    </li>
    <li>
      <div className="list-icon"><span className="ti-check"></span></div>
      <div className="list-text">
        <p>Sistema de tração 4x2 / 4x4 disponível</p>
      </div>
    </li>
    <li>
      <div className="list-icon"><span className="ti-check"></span></div>
      <div className="list-text">
        <p>Design robusto com interior refinado</p>
      </div>
    </li>
  </ul>
);

// Sidebar Features Component
const SidebarFeatures = () => (
  <>
  <div className="item">
    <div className="features"><span><i className="omfi-door" style={{color: "white"}}></i> Portas</span>
      <p>4</p>
    </div>
    <div className="features"><span><i className="omfi-passengers" style={{color: "white"}}></i> Lugares</span>
      <p>5</p>
    </div>
    <div className="features"><span><i className="omfi-transmission" style={{color: "white"}}></i> Transmissão</span>
      <p>Manual / Automática</p>
    </div>
    <div className="features"><span><i className="omfi-luggage" style={{color: "white"}}></i> Bagageira</span>
      <p>Espaçosa / Carga pesada</p>
    </div>
    <div className="features"><span><i className="omfi-condition" style={{color: "white"}}></i> Ar Condicionado</span>
      <p>Sim</p>
    </div>
    <div className="features"><span><i className="fas fa-gas-pump" style={{color: "white"}}></i> Combustível</span>
      <p> Gasóleo (Diesel)</p>
    </div>
    <div className="features"><span><i className="fas fa-bolt" style={{color: "white"}}></i> Potência</span>
      <p> 141 hp (105kW)</p>
    </div>
    <div className="btn-double mt-30">
      <a target="_blank" href="testdrive.html">Test Drive</a>
      <a href="https://wa.me/244928283666" target="_blank">
        <span className="fa-brands fa-whatsapp"></span> WhatsApp
      </a> 
    </div>
  </div>
   </>
);

// Gallery Item Component
const GalleryItem = ({ image, title, alt }) => (
  <div className="col-md-3 gallery-masonry-wrapper single-item">
    <a href={image} className="gallery-masonry-item-img-link img-zoom" title={title}>
      <div className="gallery-box">
        <div className="gallery-img">
          <img src={image} className="img-fluid mx-auto d-block" alt={alt} />
        </div>
      </div>
    </a>
  </div>
);

// Exterior Gallery Component
const ExteriorGallery = () => {
  const exteriorImages = [
    { src: "img/car_model/GrandAvenue/img_0917_0.webp", alt: "Grand Avenue Exterior" },
    { src: "img/car_model/GrandAvenue/img_0922.webp", alt: "Grand Avenue Exterior" },
    { src: "img/car_model/GrandAvenue/img_0944_0.webp", alt: "Grand Avenue Exterior" },
    { src: "img/car_model/GrandAvenue/img_0956_0.webp", alt: "Grand Avenue Exterior" },
    { src: "img/car_model/GrandAvenue/img_0969_0.webp", alt: "Grand Avenue Exterior" },
    { src: "img/car_model/GrandAvenue/img_0801_0.webp", alt: "Grand Avenue Exterior" },
    { src: "img/car_model/GrandAvenue/img_0864_0.webp", alt: "Grand Avenue Exterior" },
    { src: "img/car_model/GrandAvenue/img_0877_0.webp", alt: "Grand Avenue Exterior" }
  ];

  return (
    <div className="row gallery-items mb-60">
      {exteriorImages.map((img, index) => (
        <GalleryItem 
          key={index}
          image={img.src}
          title="Grand Avenue - Exterior"
          alt={img.alt}
        />
      ))}
    </div>
  );
};

// Interior Gallery Component
const InteriorGallery = () => {
  const interiorImages = [
    { src: "img/car_model/GrandAvenue/interior/1.webp", alt: "Grand Avenue Interior" },
    { src: "img/car_model/GrandAvenue/interior/2.webp", alt: "Grand Avenue Interior" },
    { src: "img/car_model/GrandAvenue/interior/3.webp", alt: "Grand Avenue Interior" },
    { src: "img/car_model/GrandAvenue/interior/4.webp", alt: "Grand Avenue Interior" },
    { src: "img/car_model/GrandAvenue/interior/5.webp", alt: "Grand Avenue Interior" },
    { src: "img/car_model/GrandAvenue/interior/6.webp", alt: "Grand Avenue Interior" },
    { src: "img/car_model/GrandAvenue/interior/7.webp", alt: "Grand Avenue Interior" },
    { src: "img/car_model/GrandAvenue/interior/8.webp", alt: "Grand Avenue Interior" }
  ];

  return (
    <div className="row">
      {interiorImages.map((img, index) => (
        <GalleryItem 
          key={index}
          image={img.src}
          title="Grand Avenue - Interior"
          alt={img.alt}
        />
      ))}
    </div>
  );
};

// Contact Section Component
const ContactSection = () => (
  <section className="lets-talk bg-img bg-fixed section-padding" data-overlay-dark="5" data-background="img/slider/1.webp">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h6 style={{color: "#f5b754"}}>Representante em Angola</h6>
          <h5>Entre em contacto</h5>
          <p>Paragem da Mutamba, via expresse. Para mais informações online, visite nosso site.</p>
          <a href="https://wa.me/244928283666" target="_blank" className="button-1 mt-15 mb-15 mr-10">
            <i className="fa-brands fa-whatsapp"></i> WhatsApp 
          </a>
          <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#0" className="button-2 mt-15 mb-15">
            Contactar Agora <span className="ti-arrow-top-right"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Main Component
const GrandAvenuePage = () => {
  return (
    <>
      <Banner />
      
      {/* Details Section */}
      <section className="car-details section-padding"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row mb-60">
                <div className="col-md-12">
                  <h3>Informações Gerais</h3>
                  <p className="mb-30">
                    A Grand Avenue é uma pick-up robusta e sofisticada, ideal para uso urbano e fora de estrada. 
                    Equipada com um motor 2.0L turbo diesel potente e eficiente, oferece uma condução confortável 
                    aliada a um design moderno. Combinando desempenho, segurança e elegância, é a parceira ideal 
                    para trabalho ou lazer em qualquer estrada de Angola.
                  </p>
                  <div className="text-center mt-30 mb-30"></div>
                  <FeatureList />
                </div>
                <div className="col-md-12">
                  <a href="catalegos/Catalogo Grand Avenue.pdf" target="_blank" className="button-1" download="catalegos/Catalogo Grand Avenue.pdf">
                    Catálago <span className="ti-arrow-down"></span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <div className="sidebar-car">
                <div className="title">
                  <h4 style={{color: "white"}}>Grand Avenue</h4>
                  <p style={{color: "white"}}>Pickup de alto desempenho</p>
                </div>
                <SidebarFeatures />
              </div>
            </div>
          </div>
          
          {/* Exterior Design Section */}
          <div className="row">
            <div className="col-md-12">
              <h3>Design Exterior</h3>
            </div>
          </div>
          <ExteriorGallery />
          
          <div className="col-row">
            <div className="col-md-12">
              <img src="img/car_model/GrandAvenue/card.jpeg" className="img-fluid mx-auto d-block" alt="Grand Avenue" />
            </div>
          </div>
          
          {/* Interior Design Section */}
          <div className="row mt-5">
            <div className="col-md-12">
              <h3>Design Interior</h3>
            </div>
          </div>
          <InteriorGallery />
          
          <div className="col-md-12 mt-5">
            <a href="catalegos/Catalogo Grand Avenue.pdf" target="_blank" className="button-1" download="catalegos/Catalogo Grand Avenue.pdf">
              Catálago <span className="ti-arrow-down"></span>
            </a>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
};

export default GrandAvenuePage;