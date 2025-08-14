import React from 'react';

const BannerHeader = () => (
  <section className="banner-header section-padding bg-img" data-overlay-dark="5" data-background="img/car_model/GrandAvenue/card.jpeg">
    <div className="v-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6>Our Portfolio</h6>
            <h1>Image Gallery</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DividerLine = () => (
  <div className="line-vr-section"></div>
);

const GalleryFilter = () => (
  <ul className="gallery-filter">
    <li className="active" data-filter="*">Todos</li>
    <li data-filter=".pickups">PICK Ups</li>
    <li data-filter=".carrihos">Carrinho</li>
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

const GallerySection = () => {
  const galleryItems = [
    { src: "img/gallery/1.jpg", category: "luxurycars" },
    { src: "img/gallery/2.jpg", category: "sportcars" },
    { src: "img/gallery/3.jpg", category: "sportcars" },
    { src: "img/gallery/4.jpg", category: "suv" },
    { src: "img/gallery/5.jpg", category: "suv" },
    { src: "img/gallery/6.jpg", category: "luxurycars" },
    { src: "img/gallery/7.jpg", category: "sportcars" },
    { src: "img/gallery/8.jpg", category: "suv" },
    { src: "img/gallery/9.jpg", category: "luxurycars" },
    { src: "img/car_model/CarringPlus/car.webp", category: "luxurycars" },
    { src: "img/car_model/Touring/jmcc.webp", category: "luxurycars" },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <GalleryFilter />
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

const GalleryPage = () => (
  <>
    <BannerHeader />
    <DividerLine />
    <GallerySection />
  </>
);

export default GalleryPage;