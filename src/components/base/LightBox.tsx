import FsLightbox, { FsLightboxProps } from 'fslightbox-react';

interface LightBoxProps extends FsLightboxProps {
  toggler: boolean;
  slide?: number;
  sources: string[];
}

const Lightbox = ({ toggler, slide = 1, sources, ...rest }: LightBoxProps) => {
  return (
    <FsLightbox
      toggler={toggler}
      sources={sources}
      slide={slide}
      type="image"
      {...rest}
    />
  );
};

export default Lightbox;
