"use client"
import { useTina } from "tinacms/dist/react";
import React from 'react';

// Banner Component
const Banner = ({ banner }) => (
  <section className="banner-header section-padding bg-img" data-overlay-dark="2" data-background={banner.backgroundImage}>
    <div className="v-middle">
      <div className="container">
        <div className="col-md-12">
          <h1>{banner.title}</h1>
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
const SidebarFeatures = ({ sidebar }) => (
  <>
  <div className="item">
    {sidebar.features.map((feature, index) => (
      <div className="features" key={index}>
        <span><i className={feature.icon} style={{color: "white"}}></i> {feature.label}</span>
        <p>{feature.value}</p>
      </div>
    ))}
    <div className="btn-double mt-30">
      <a target="_blank" href={sidebar.testDriveLink}>Test Drive</a>
      <a href={sidebar.whatsappLink} target="_blank">
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
const ExteriorGallery = ({ gallery }) => {
  return (
    <div className="row gallery-items mb-60">
      {gallery.images.map((img, index) => (
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
const InteriorGallery = ({ gallery }) => {
  return (
    <div className="row">
      {gallery.images.map((img, index) => (
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
const ContactSection = ({ contact }) => (
  <section className="lets-talk bg-img bg-fixed section-padding" data-overlay-dark="5" data-background={contact.backgroundImage}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h6 style={{color: "#f5b754"}}>{contact.subtitle}</h6>
          <h5>{contact.title}</h5>
          <p>{contact.text}</p>
          <a href={contact.whatsappLink} target="_blank" className="button-1 mt-15 mb-15 mr-10">
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
const GrandAvenuePageClient = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const pageData = data.grand_avenue;

  return (
    <>
      <Banner banner={pageData.banner} />
      
      {/* Details Section */}
      <section className="car-details section-padding"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row mb-60">
                <div className="col-md-12">
                  <h3>{pageData.generalInfo.title}</h3>
                  <p className="mb-30">
                    {pageData.generalInfo.text}
                  </p>
                  <div className="text-center mt-30 mb-30"></div>
                  <FeatureList features={pageData.generalInfo.features} />
                </div>
                <div className="col-md-12">
                  <a href={pageData.generalInfo.catalogLink} target="_blank" className="button-1" download={pageData.generalInfo.catalogLink}>
                    Catálago <span className="ti-arrow-down"></span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <div className="sidebar-car">
                <div className="title">
                  <h4 style={{color: "white"}}>{pageData.sidebar.title}</h4>
                  <p style={{color: "white"}}>{pageData.sidebar.subtitle}</p>
                </div>
                <SidebarFeatures sidebar={pageData.sidebar} />
              </div>
            </div>
          </div>
          
          {/* Exterior Design Section */}
          <div className="row">
            <div className="col-md-12">
              <h3>{pageData.exteriorGallery.title}</h3>
            </div>
          </div>
          <ExteriorGallery gallery={pageData.exteriorGallery} />
          
          <div className="col-row">
            <div className="col-md-12">
              <img src={pageData.promoImage} className="img-fluid mx-auto d-block" alt="Grand Avenue" />
            </div>
          </div>
          
          {/* Interior Design Section */}
          <div className="row mt-5">
            <div className="col-md-12">
              <h3>{pageData.interiorGallery.title}</h3>
            </div>
          </div>
          <InteriorGallery gallery={pageData.interiorGallery} />
          
          <div className="col-md-12 mt-5">
            <a href={pageData.generalInfo.catalogLink} target="_blank" className="button-1" download={pageData.generalInfo.catalogLink}>
              Catálago <span className="ti-arrow-down"></span>
            </a>
          </div>
        </div>
      </section>
      
      <ContactSection contact={pageData.contactSection} />
    </>
  );
};

export default GrandAvenuePageClient;
