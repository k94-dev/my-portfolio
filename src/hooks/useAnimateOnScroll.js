import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useAnimateOnScroll = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
    });

    sr.reveal('.home-section__data, .about-section__img');
    sr.reveal('.home-section__img, .about-section__subtitle, .about-section__text', { delay: 400 });
    sr.reveal('.home-section__social--icon',{ interval: 200}); 
    sr.reveal('span, .skills-section__img', { interval: 200 });
  }, []);
};

export default useAnimateOnScroll;