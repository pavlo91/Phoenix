import { useState } from 'react';

const useLightbox = (sources: string[]) => {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(1);

  const openLightbox = (slideIndex = 1) => {
    setOpen(!open);
    setSlide(slideIndex);
  };
  return {
    lightboxProps: { toggler: open, sources: sources, slide: slide },
    openLightbox
  };
};

export default useLightbox;
