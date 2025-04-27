import { useEffect } from 'react';

const useScrollSpy = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 262;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector(
          `.header-nav__link[href*=${sectionId}]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (sectionLink) sectionLink.classList.add('active-link');
        } else {
          if (sectionLink) sectionLink.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);
  }, []);
};

export default useScrollSpy;
