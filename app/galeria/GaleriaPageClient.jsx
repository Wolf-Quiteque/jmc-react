"use client"
import { useTina } from "tinacms/dist/react";
import React from 'react';

const BannerHeader = ({ banner }) => (
  <section className="banner-header section-padding bg-img" data-overlay-dark="5" data-background={banner.backgroundImage}>
    <div className="v-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6>{banner.subtitle}</h6>
            <h1>{banner.title}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DividerLine = () => (
  <div className="line-vr-section"></div>
);

const GalleryFilter = ({ filters }) => (
  <ul className="gallery-filter">
    {filters.map((filter, index) => (
      <li key={index} className={index === 0 ? "active" : ""} data-filter={filter.filter}>{filter.label}</li>
    ))}
  </ul>
);

const GalleryItem = ({ imageSrc, category, title = "" }) => (
  <div className={`col-lg-4 col-md-6 single-item ${category} mb-15`}>
    <a href={imageSrc} title={title} className="gallery-masonry-item-img-link img-zoom">
      <div className="gallery-box">
        <div className="gallery-img">
          <img src={imageSrc} className="img-fluid mx-auto d-block" alt="" />
        </div>
        <div className="bottom-fade"></div>
        <div className="gallery-detail"></div>
      </div>
    </a>
  </div>
);

const GallerySection = ({ filters, galleryItems }) => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <GalleryFilter filters={filters} />
          </div>
        </div>
        <div className="row gallery-items">
          {galleryItems.map((item, index) => (
            <GalleryItem 
              key={index}
              imageSrc={item.src}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const GaleriaPageClient = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const pageData = data.galeria;

  return (
    <>
      <BannerHeader banner={pageData.banner} />
      <DividerLine />
      <GallerySection filters={pageData.filters} galleryItems={pageData.galleryItems} />
    </>
  );
};

export default GaleriaPageClient;
