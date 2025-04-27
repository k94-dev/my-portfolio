import { useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function useVideoScroll() {
  useEffect(() => {
    console.clear();
    $('video').addClass('video-background');

    const video = document.querySelector(".video-background");
    const src = video?.currentSrc || video?.src;

    if (!video || !src) return;

    const once = (el, event, fn, opts) => {
      const onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    };

    once(document.documentElement, "touchstart", () => {
      video.play();
      video.pause();
    });

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".hero-section__video-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: video.duration || 1 }
      );
    });

    // setTimeout(() => {
    //   if (window.fetch) {
    //     fetch(src)
    //       .then((res) => res.blob())
    //       .then((blob) => {
    //         const blobURL = URL.createObjectURL(blob);
    //         const t = video.currentTime;

    //         once(document.documentElement, "touchstart", () => {
    //           video.play();
    //           video.pause();
    //         });

    //         video.setAttribute("src", blobURL);
    //         video.currentTime = t + 0.01;
    //       });
    //   }
    // }, 1000);
  }, []);
}
