import React from 'react';

// Banner Component
const Banner = ({ backgroundImage, title }) => (
  <section className="banner-header section-padding bg-img" data-overlay-dark="2" data-background={backgroundImage}>
    <div className="v-middle">
      <div className="container">
        <div className="col-md-12">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  </section>
);

// Feature List Component
const FeatureList = ({ features }) => (
  <ul className="list-unstyled list mb-30">
    {features.map((feature, index) => (
      <li key={index}>
        <div className="list-icon"><span className="ti-check"></span></div>
        <div className="list-text">
          <p>{feature}</p>
        </div>
      </li>
    ))}
  </ul>
);

// Sidebar Features Component
const SidebarFeatures = ({ carName, description, features, whatsappLink, testDriveLink }) => (
  <div className="sidebar-car">
    <div className="title">
      <h4 style={{color: "white"}}>{carName}</h4>
      <p style={{color: "white"}}>{description}</p>
    </div>
    <div className="item">
      {features.map((feature, index) => (
        <div key={index} className="features">
          <span>
            <i className={feature.icon} style={{color: "white"}}></i> {feature.label}
          </span>
          <p>{feature.value}</p>
        </div>
      ))}
      <div className="btn-double mt-30">
        <a target="_blank" href={testDriveLink}>Test Drive</a>
        <a href={whatsappLink} target="_blank">
          <span className="fa-brands fa-whatsapp"></span> WhatsApp
        </a> 
      </div>
    </div>
  </div>
);

// Gallery Component
const Gallery = ({ images, title, sectionTitle }) => (
  <>
    <div className="row">
      <div className="col-md-12">
        <h3>{sectionTitle}</h3>
      </div>
    </div>
    <div className="row gallery-items mb-60">
      {images.map((image, index) => (
        <div key={index} className="col-md-3 gallery-masonry-wrapper single-item">
          <a href={image.src} className="gallery-masonry-item-img-link img-zoom" title={title}>
            <div className="gallery-box">
              <div className="gallery-img">
                <img src={image.src} className="img-fluid mx-auto d-block" alt={image.alt} />
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </>
);

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
const VigusPage = () => {
  // Data for the Vigus model
  const carData = {
    name: "Vigus",
    description: "Pickup de alto desempenho",
    bannerImage: "img/car_model/Vigus/car.jpg",
    generalInfo: "A Vigus é uma pick-up robusta e sofisticada, ideal para uso urbano e fora de estrada. Equipada com um motor 2.0L turbo diesel potente e eficiente, oferece uma condução confortável aliada a um design moderno. Combinando desempenho, segurança e elegância, é a parceira ideal para trabalho ou lazer em qualquer estrada de Angola.",
    features: [
      "Motorização Turbo Diesel 2.0L",
      "Sistema de tração 4x2 / 4x4 disponível",
      "Design robusto com interior refinado"
    ],
    sidebarFeatures: [
      { icon: "omfi-door", label: "Portas", value: "4" },
      { icon: "omfi-passengers", label: "Lugares", value: "5" },
      { icon: "omfi-transmission", label: "Transmissão", value: "Manual / Automática" },
      { icon: "omfi-luggage", label: "Bagageira", value: "Espaçosa / Carga pesada" },
      { icon: "omfi-condition", label: "Ar Condicionado", value: "Sim" },
      { icon: "fas fa-gas-pump", label: "Combustível", value: "Gasóleo (Diesel)" },
      { icon: "fas fa-bolt", label: "Potência", value: "141 hp (105kW)" }
    ],
    whatsappLink: "https://wa.me/244928283666",
    testDriveLink: "testdrive.html",
    catalogLink: "catalegos/Catalogo Vigus.pdf",
    exteriorImages: [
      { src: "img/car_model/Vigus/extorior/1.webp", alt: "Vigus Exterior" },
      { src: "img/car_model/Vigus/extorior/2.webp", alt: "Vigus Exterior" },
      { src: "img/car_model/Vigus/extorior/3.webp", alt: "Vigus Exterior" },
      { src: "img/car_model/Vigus/extorior/4.webp", alt: "Vigus Exterior" }
    ],
    interiorImages: [
      { src: "img/car_model/Vigus/interior/1.webp", alt: "Vigus Interior" },
      { src: "img/car_model/Vigus/interior/2.webp", alt: "Vigus Interior" },
      { src: "img/car_model/Vigus/interior/3.webp", alt: "Vigus Interior" },
      { src: "img/car_model/Vigus/interior/4.webp", alt: "Vigus Interior" },
      { src: "img/car_model/Vigus/interior/5.webp", alt: "Vigus Interior" },
      { src: "img/car_model/Vigus/interior/6.webp", alt: "Vigus Interior" },
      { src: "img/car_model/Vigus/interior/7.webp", alt: "Vigus Interior" },
      { src: "img/car_model/Vigus/interior/8.webp", alt: "Vigus Interior" }
    ],
    promoImage: "img/car_model/Vigus/vigus.avif"
  };

  return (
    <>
      <Banner 
        backgroundImage={carData.bannerImage} 
        title={carData.name} 
      />
      
      {/* Details Section */}
      <section className="car-details section-padding"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row mb-60">
                <div className="col-md-12">
                  <h3>Informações Gerais</h3>
                  <p className="mb-30">
                    {carData.generalInfo}
                  </p>
                  <div className="text-center mt-30 mb-30"></div>
                  <FeatureList features={carData.features} />
                </div>
                <div className="col-md-12">
                  <a href={carData.catalogLink} target="_blank" className="button-1" download={carData.catalogLink}>
                    Catálago <span className="ti-arrow-down"></span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <SidebarFeatures 
                carName={carData.name}
                description={carData.description}
                features={carData.sidebarFeatures}
                whatsappLink={carData.whatsappLink}
                testDriveLink={carData.testDriveLink}
              />
            </div>
          </div>
          
          {/* Exterior Gallery */}
          <Gallery 
            images={carData.exteriorImages}
            title={`${carData.name} - Exterior`}
            sectionTitle="Design Exterior"
          />
          
          <div className="col-row">
            <div className="col-md-12">
              <img src={carData.promoImage} className="img-fluid mx-auto d-block" alt={carData.name} />
            </div>
          </div>
          
          {/* Interior Gallery */}
          <div className="row mt-5">
            <div className="col-md-12">
              <h3>Design Interior</h3>
            </div>
          </div>
          <div className="row">
            {carData.interiorImages.map((image, index) => (
              <div key={index} className="col-md-3 gallery-masonry-wrapper single-item">
                <a href={image.src} className="gallery-masonry-item-img-link img-zoom" title={`${carData.name} - Interior`}>
                  <div className="gallery-box">
                    <div className="gallery-img">
                      <img src={image.src} className="img-fluid mx-auto d-block" alt={image.alt} />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          <div className="col-md-12 mt-5">
            <a href={carData.catalogLink} target="_blank" className="button-1" download={carData.catalogLink}>
              Catálago <span className="ti-arrow-down"></span>
            </a>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
};

export default VigusPage;