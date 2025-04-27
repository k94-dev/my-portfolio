import React from "react";
import { useTranslation } from 'react-i18next';

function VideoPlayer() {
  const { t, i18n } = useTranslation();

  return (
    <section className='hero-section section' id="hero">
              <div className="hero-section__video-container">
    <video className="hero-section__video-container--video" muted loop>
              <source src={`${process.env.PUBLIC_URL}/video/main.mp4`} type="video/mp4" />
               Your browser does not support the video tag.
      </video>
      <h1 className="hero-section__title">{t('hero.title')}</h1>
          </div>
        </section>
  );
}

export default VideoPlayer;
