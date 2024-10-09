import React, { useEffect, useRef } from 'react'

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

const Testimonial = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initCarousel = () => {
      if (carouselRef.current && window.jQuery && window.jQuery.fn.owlCarousel) {
        window.jQuery(carouselRef.current).owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 3
            }
          }
        });
      } else {
        setTimeout(initCarousel, 100);
      }
    };

    initCarousel();

    return () => {
      if (carouselRef.current && window.jQuery && window.jQuery.fn.owlCarousel) {
        window.jQuery(carouselRef.current).owlCarousel('destroy');
      }
    };
  }, []);

  return (
    <section id="testimonial" className="py-20 bg-[#111111]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Testimonials</h2>
        <div ref={carouselRef} className="owl-carousel">
          <div className="item">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-white mb-4">"Robert is an exceptional developer. His attention to detail and problem-solving skills are outstanding."</p>
              <h4 className="text-xl font-semibold text-main-color">John Doe</h4>
              <p className="text-gray-400">CEO, Tech Corp</p>
            </div>
          </div>
          <div className="item">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-white mb-4">"Working with Robert was a pleasure. He delivered the project on time and exceeded our expectations."</p>
              <h4 className="text-xl font-semibold text-main-color">Jane Smith</h4>
              <p className="text-gray-400">Project Manager, Design Studio</p>
            </div>
          </div>
          <div className="item">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-white mb-4">"Robert's expertise in web development is impressive. He created a beautiful and functional website for us."</p>
              <h4 className="text-xl font-semibold text-main-color">Mike Johnson</h4>
              <p className="text-gray-400">Owner, Local Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial