import React from 'react';

// Reusable Banner Component
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

// Reusable Feature List Component
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

// Reusable Sidebar Component
const CarSidebar = ({ carName, description, features, whatsappLink, testDriveLink }) => (
  <div className="sidebar-car">
    <div className="title">
      <h4 style={{color: "white"}}>{carName}</h4>
      <p style={{color: "white"}}>{description}</p>
    </div>
    <div className="item">
      {features.map((feature, index) => (
        <div key={index} className="features">
          <span><i className={feature.icon} style={{color: "white"}}></i> {feature.label}</span>
          <p>{feature.value}</p>
        </div>
      ))}
      <div className="btn-double mt-30">
        <a target="_blank" href={testDriveLink}>Test Drive</a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <span className="fa-brands fa-whatsapp"></span> WhatsApp
        </a> 
      </div>
    </div>
  </div>
);

// Reusable Gallery Component
const ImageGallery = ({ images, title, sectionTitle, cols = 4 }) => (
  <>
    <div className="row">
      <div className="col-md-12">
        <h3>{sectionTitle}</h3>
      </div>
    </div>
    <div className={`row gallery-items mb-60`}>
      {images.map((image, index) => (
        <div key={index} className={`col-md-${cols} gallery-masonry-wrapper single-item`}>
          <a 
            href={image.src} 
            className="gallery-masonry-item-img-link img-zoom" 
            title={`${title} - ${sectionTitle}`}
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img 
                  src={image.src} 
                  className="img-fluid mx-auto d-block" 
                  alt={image.alt || `${title} ${sectionTitle}`}
                />
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </>
);

// Reusable Contact Section
const ContactSection = ({ 
  title = "Entre em contacto",
  subtitle = "Representante em Angola",
  description = "Paragem da Mutamba, via expresse. Para mais informações online, visite nosso site.",
  whatsappLink = "https://wa.me/244928283666",
  contactLink = "#0",
  overlayDark = 5,
  backgroundImage = "img/slider/1.webp"
}) => (
  <section 
    className="lets-talk bg-img bg-fixed section-padding" 
    data-overlay-dark={overlayDark} 
    data-background={backgroundImage}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h6 style={{color: "#f5b754"}}>{subtitle}</h6>
          <h5>{title}</h5>
          <p>{description}</p>
          <a 
            href={whatsappLink} 
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
            href={contactLink} 
            className="button-2 mt-15 mb-15"
          >
            Contactar Agora <span className="ti-arrow-top-right"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Main Component
const JMCTouringPage = () => {
  // Data for the JMC Touring model
  const carData = {
    name: "Touring",
    fullName: "JMC Touring",
    description: "SUV Familiar e Robustecido",
    bannerImage: "img/car_model/Touring/banner-jmc-1-jpg.webp",
    promoImage: "img/car_model/Touring/jmcc.webp",
    generalInfo: `A JMC Touring é um veículo utilitário esportivo (SUV) projetado para oferecer conforto, robustez e versatilidade. 
      Com um design moderno e interior espaçoso, é ideal para famílias e profissionais que buscam desempenho e capacidade 
      tanto em ambientes urbanos quanto em estradas mais desafiadoras em Angola. Equipada com tecnologia avançada e 
      sistemas de segurança, a Touring garante uma condução suave e segura.`,
    features: [
      "Motor turbo eficiente e potente",
      "Suspensão independente para maior conforto",
      "Tecnologia de conectividade com multimídia"
    ],
    sidebarFeatures: [
      { icon: "omfi-door", label: "Portas", value: "5" },
      { icon: "omfi-passengers", label: "Lugares", value: "5-15 (depende da versão)" },
      { icon: "omfi-transmission", label: "Transmissão", value: "Manual / Automática (6 velocidades)" },
      { icon: "omfi-luggage", label: "Bagageira", value: "Até 1.050L (assentos rebatidos)" },
      { icon: "omfi-condition", label: "Ar Condicionado", value: "Climatizado digital" },
      { icon: "fas fa-gas-pump", label: "Combustível", value: "Diesel (2.0L Turbo)" },
      { icon: "fas fa-bolt", label: "Potência", value: "163 hp / 375 Nm de torque" }
    ],
    whatsappLink: "https://wa.me/244928283666",
    testDriveLink: "testdrive.html",
    exteriorImages: [
      { src: "img/car_model/Touring/exterior/1.webp", alt: "JMC Touring Exterior" },
      { src: "img/car_model/Touring/exterior/2.webp", alt: "JMC Touring Exterior" },
      { src: "img/car_model/Touring/exterior/3.webp", alt: "JMC Touring Exterior" },
      { src: "img/car_model/Touring/exterior/4.webp", alt: "JMC Touring Exterior" }
    ],
    interiorImages: [
      { src: "img/car_model/Touring/interior/1.webp", alt: "JMC Touring Interior" },
      { src: "img/car_model/Touring/interior/2.webp", alt: "JMC Touring Interior" },
      { src: "img/car_model/Touring/interior/3.webp", alt: "JMC Touring Interior" },
      { src: "img/car_model/Touring/interior/4.webp", alt: "JMC Touring Interior" },
      { src: "img/car_model/Touring/interior/5.webp", alt: "JMC Touring Interior" },
      { src: "img/car_model/Touring/interior/6.webp", alt: "JMC Touring Interior" },
      { src: "img/car_model/Touring/interior/7.webp", alt: "JMC Touring Interior" },
      { src: "img/car_model/Touring/interior/8.webp", alt: "JMC Touring Interior" }
    ]
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
                  <p className="mb-30">{carData.generalInfo}</p>
                  <div className="text-center mt-30 mb-30"></div>
                  <FeatureList features={carData.features} />
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <CarSidebar
                carName={carData.fullName}
                description={carData.description}
                features={carData.sidebarFeatures}
                whatsappLink={carData.whatsappLink}
                testDriveLink={carData.testDriveLink}
              />
            </div>
          </div>
          
          {/* Exterior Gallery */}
          <ImageGallery
            images={carData.exteriorImages}
            title={carData.fullName}
            sectionTitle="Design Exterior"
          />
          
          {/* Promo Image */}
          <div className="col-row">
            <div className="col-md-12">
              <img 
                src={carData.promoImage} 
                className="img-fluid mx-auto d-block" 
                alt={carData.fullName}
              />
            </div>
          </div>
          
          {/* Interior Gallery */}
          <ImageGallery
            images={carData.interiorImages}
            title={carData.fullName}
            sectionTitle="Design Interior"
          />
        </div>
      </section>
      
      <ContactSection />
    </>
  );
};

export default JMCTouringPage;