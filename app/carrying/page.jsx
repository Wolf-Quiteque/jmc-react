import React from 'react';

// Reusable Components (can be in separate files)
const Banner = ({ backgroundImage, title, overlayDark = 2 }) => (
  <section 
    className="banner-header section-padding bg-img" 
    data-overlay-dark={overlayDark} 
    data-background={backgroundImage}
  >
    <div className="v-middle">
      <div className="container">
        <div className="col-md-12">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  </section>
);

const FeatureList = ({ features }) => (
  <ul className="list-unstyled list mb-30">
    {features.map((feature, index) => (
      <li key={index}>
        <div className="list-icon"><span className="ti-check"></span></div>
        <div className="list-text">
          <p dangerouslySetInnerHTML={{ __html: feature }} />
        </div>
      </li>
    ))}
  </ul>
);

const VehicleSidebar = ({ vehicle, features, whatsappLink, testDriveLink, catalogLink }) => (
  <div className="sidebar-car">
    <div className="title">
      <h4 style={{color: "white"}}>{vehicle.name}</h4>
      <p style={{color: "white"}}>{vehicle.description}</p>
    </div>
    <div className="item">
      {features.map((feature, index) => (
        <div key={index} className="features">
          <span><i className={feature.icon} style={{color: "white"}}></i> {feature.label}</span>
          <p>{feature.value}</p>
        </div>
      ))}
      <div className="btn-double mt-30">
        <a target="_blank" href={testDriveLink} rel="noopener noreferrer">Test Drive</a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <span className="fa-brands fa-whatsapp"></span> WhatsApp
        </a> 
      </div>
    </div>
  </div>
);

const GallerySection = ({ title, images, cols = 4 }) => (
  <>
    <div className="row">
      <div className="col-md-12">
        <h3>{title}</h3>
      </div>
    </div>
    <div className="row gallery-items mb-60">
      {images.map((image, index) => (
        <div key={index} className={`col-md-${cols} gallery-masonry-wrapper single-item`}>
          <a href={image.src} className="gallery-masonry-item-img-link img-zoom" title={image.title}>
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

const ContactSection = () => (
  <section className="lets-talk bg-img bg-fixed section-padding" data-overlay-dark="5" data-background="img/slider/1.webp">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h6 style={{color: "#f5b754"}}>Representante em Angola</h6>
          <h5>Entre em contacto</h5>
          <p>Paragem da Mutamba, via expresse. Para mais informações online, visite nosso site.</p>
          <a href="https://wa.me/244928283666" target="_blank" className="button-1 mt-15 mb-15 mr-10" rel="noopener noreferrer">
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
const JMCCarringPage = () => {
  // Vehicle data
  const vehicleData = {
    name: "JMC Carring",
    model: "Carring",
    description: "Pickup Comercial com Refrigerador",
    bannerImage: "img/car_model/Carring/carring.webp",
    promoImage: "img/car_model/Carring/picture2.png",
    generalInfo: `O JMC Carring é um veículo comercial robusto e prático, projetado para transporte de carga e trabalho pesado. 
      Equipado com uma carroceria versátil e opção de refrigerador integrado, é ideal para negócios que exigem 
      refrigeração de produtos (como alimentos ou medicamentos). Com motorização econômica e chassi resistente, 
      oferece confiabilidade em estradas urbanas e rurais em Angola.`,
    features: [
      "<strong>Motor 2.2L Turbo Diesel</strong> (125HP e 285Nm) — Econômico e durável",
      "<strong>Carroceria com refrigerador</strong> — Temperatura controlada para carga perecível",
      "<strong>Capacidade de carga até 1.200kg</strong> — Chassi reforçado para trabalho pesado"
    ],
    sidebarFeatures: [
      { icon: "fas fa-cogs", label: "Motor", value: "2.2L Turbo Diesel" },
      { icon: "fas fa-tachometer-alt", label: "Potência", value: "125HP" },
      { icon: "fas fa-bolt", label: "Torque", value: "285Nm" },
      { icon: "omfi-transmission", label: "Transmissão", value: "Manual (5 velocidades)" },
      { icon: "fas fa-car", label: "Tração", value: "4x2 (RWD)" },
      { icon: "fas fa-weight-hanging", label: "Carga Máx.", value: "1.200kg" },
      { icon: "fas fa-snowflake", label: "Refrigerador", value: "Sim (0°C a 10°C)" }
    ],
    whatsappLink: "https://wa.me/244928283666",
    testDriveLink: "testdrive.html",
    catalogLink: "catalegos/Catálogo Caminhão refrigerador.pdf",
    exteriorImages: [
      { src: "img/car_model/Carring/exterior/1.png", alt: "JMC Carring Exterior", title: "JMC Carring - Exterior" },
      { src: "img/car_model/Carring/exterior/2.png", alt: "JMC Carring Exterior", title: "JMC Carring - Exterior" },
      { src: "img/car_model/Carring/exterior/3.png", alt: "JMC Carring Exterior", title: "JMC Carring - Exterior" },
      { src: "img/car_model/Carring/exterior/4.png", alt: "JMC Carring Exterior", title: "JMC Carring - Exterior" }
    ],
    interiorImages: [
      { src: "img/car_model/Carring/interior/1.jpg", alt: "JMC Carring Interior", title: "JMC Carring - Interior" },
      { src: "img/car_model/Carring/interior/3.jpg", alt: "JMC Carring Interior", title: "JMC Carring - Interior" },
      { src: "img/car_model/Carring/interior/4.jpg", alt: "JMC Carring Interior", title: "JMC Carring - Interior" },
      { src: "img/car_model/Carring/interior/2.jpg", alt: "JMC Carring Interior", title: "JMC Carring - Interior" }
    ]
  };

  return (
    <>
      <Banner 
        backgroundImage={vehicleData.bannerImage} 
        title={vehicleData.model}
      />
      
      <section className="car-details section-padding"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row mb-60">
                <div className="col-md-12">
                  <h3>Informações Gerais</h3>
                  <p className="mb-30">{vehicleData.generalInfo}</p>
                  <div className="text-center mt-30 mb-30"></div>
                  <FeatureList features={vehicleData.features} />
                </div>
              </div>
              <div className="col-md-12">
                <a 
                  href={vehicleData.catalogLink} 
                  target="_blank" 
                  className="button-1" 
                  download={vehicleData.catalogLink}
                  rel="noopener noreferrer"
                >
                  Catálago <span className="ti-arrow-down"></span>
                </a>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-12">
              <VehicleSidebar
                vehicle={{
                  name: vehicleData.name,
                  description: vehicleData.description
                }}
                features={vehicleData.sidebarFeatures}
                whatsappLink={vehicleData.whatsappLink}
                testDriveLink={vehicleData.testDriveLink}
                catalogLink={vehicleData.catalogLink}
              />
            </div>
          </div>
          
          <GallerySection 
            title="Design Exterior" 
            images={vehicleData.exteriorImages} 
          />
          
          <div className="col-row">
            <div className="col-md-12">
              <img 
                src={vehicleData.promoImage} 
                className="img-fluid mx-auto d-block" 
                alt={vehicleData.name} 
              />
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-md-12">
              <h3>Design Interior</h3>
            </div>
          </div>
          <div className="row">
            {vehicleData.interiorImages.map((image, index) => (
              <div key={index} className="col-md-3 gallery-masonry-wrapper single-item">
                <a href={image.src} className="gallery-masonry-item-img-link img-zoom" title={image.title}>
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
            <a 
              href={vehicleData.catalogLink} 
              target="_blank" 
              className="button-1" 
              download={vehicleData.catalogLink}
              rel="noopener noreferrer"
            >
              Catálago <span className="ti-arrow-down"></span>
            </a>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
};

export default JMCCarringPage;