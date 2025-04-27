import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function GallerySlider({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="gallery-slider">
      <img src={images[index]} alt={`Slide ${index + 1}`} />
      <div className="gallery-slider__controls">
        <button onClick={prev}>&#8592;</button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={next}>&#8594;</button>
      </div>
    </div>
  );
}

function WorkSection() {
  const [modalMedia, setModalMedia] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (media) => {
    setModalMedia(media);
    setIsOpen(true);
  };

  const closeModal = () => {
    setModalMedia(null);
    setIsOpen(false);
  };

 const slides = [
  {
    id: 1,
    preview: `${process.env.PUBLIC_URL}/img/beauty.jpg`,
    type: 'video',
    src: `${process.env.PUBLIC_URL}/video/beauty.mp4`,
    alt: 'Beauty Site'
  },
  {
    id: 2,
    preview: `${process.env.PUBLIC_URL}/img/overlay.jpg`,
    type: 'gallery',
    images: [
      `${process.env.PUBLIC_URL}/img/overlay-show.jpg`,
      `${process.env.PUBLIC_URL}/img/overlay-show2.jpg`,
      `${process.env.PUBLIC_URL}/img/overlay-show3.jpg`
    ],
    alt: 'Stream Overlay'
  },
  {
    id: 3,
    preview: `${process.env.PUBLIC_URL}/img/bakery.jpg`,
    type: 'video',
    src: `${process.env.PUBLIC_URL}/video/bakery.mp4`,
    alt: 'Bakery Site'
  },
  {
    id: 4,
    preview: `${process.env.PUBLIC_URL}/img/tree-table.jpg`,
    type: 'video',
    src: `${process.env.PUBLIC_URL}/video/tree-table.mp4`,
    alt: 'Tree Logging Inventory'
  },
  {
    id: 5,
    preview: `${process.env.PUBLIC_URL}/img/table.jpg`,
    type: 'video',
    src: `${process.env.PUBLIC_URL}/video/table.mp4`,
    alt: 'Tournament Table'
  }
];
    
    useEffect(() => {
  if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.animationPlayState = 'paused';
  } else {
      document.body.style.overflow = '';
      document.body.style.animationPlayState = '';
  }

  return () => {
      document.body.style.overflow = '';
      document.body.style.animationPlayState = '';
  };
}, [isOpen]);

  const { t, i18n } = useTranslation();
  
  return (
    <section className="work-section section" id="work">
      <div className="container">
        <h2 className="section__title">{t("work.title") }</h2>
        <div className="banner">
          <div className="banner__slider" style={{ "--quantity": slides.length }}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="banner__slider--item"
                style={{ "--position": index + 1 }}
                onClick={() => openModal(slide)}

              >
                <img src={slide.preview} alt={slide.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="backdrop" onClick={closeModal}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <button className="modal-window__close-button" onClick={closeModal}>&#215;</button>
            {modalMedia.type === 'image' && (
              <img src={modalMedia.src} alt="modal" />
            )}
            {modalMedia.type === 'video' && (
              <video src={modalMedia.src} controls autoPlay />
                      )}
                      {modalMedia.type === 'gallery' && (
                <GallerySlider images={modalMedia.images} />
)}

          </div>
        </div>
      )}
    </section>
  );
}

export default WorkSection;
