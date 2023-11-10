import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import img1 from 'assets/phoenix/img/gallery/1.png';
import img2 from 'assets/phoenix/img/gallery/2.png';
import img3 from 'assets/phoenix/img/gallery/3.png';
import img5 from 'assets/phoenix/img/gallery/5.png';
import img4 from 'assets/phoenix/img/gallery/4.png';
import img6 from 'assets/phoenix/img/gallery/6.png';
import img7 from 'assets/phoenix/img/gallery/7.png';
import img9 from 'assets/phoenix/img/gallery/9.png';
import img8 from 'assets/phoenix/img/gallery/8.png';
import img10 from 'assets/phoenix/img/gallery/10.png';
import IsotopeNav from 'components/navs/IsotopeNav';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';

type GalleryItemType = {
  img: string;
  className: string;
  category: string[];
};

const galleryItems: GalleryItemType[] = [
  {
    img: img1,
    className: 'col-span-6 col-span-md-4 col-span-lg-3 row-span-2',
    category: ['1', '4']
  },
  {
    img: img2,
    className: 'col-span-6 col-span-md-4 col-span-lg-3 row-span-2',
    category: ['1', '3']
  },
  {
    img: img3,
    className: 'col-span-6 col-span-md-4 col-span-lg-3 row-span-1',
    category: ['1', '2']
  },
  {
    img: img5,
    className: 'col-span-6 col-span-md-4 col-span-lg-3 row-span-2',
    category: ['1', '3']
  },
  {
    img: img4,
    className: 'col-span-6 col-span-md-4 col-span-lg-3 row-span-1',
    category: ['1', '2', '3']
  },
  {
    img: img6,
    className: 'col-span-6 col-span-md-4 col-span-lg-3 row-span-2',
    category: ['1', '2']
  },
  {
    img: img7,
    className: 'col-span-6 col-span-md-4 col-span-lg-3 row-span-1',
    category: ['1', '2']
  },
  {
    img: img9,
    className: 'col-span-6 col-span-md-4 col-span-lg-6 row-span-1',
    category: ['1', '2']
  },
  {
    img: img8,
    className: 'col-span-6 col-span-md-4 col-span-lg-3 row-span-1',
    category: ['1', '4']
  },
  {
    img: img10,
    className: 'col-span-6 col-span-md-4 col-span-lg-6 row-span-1',
    category: ['1', '2']
  }
];

const navItems = [
  {
    eventKey: '1',
    label: 'First'
  },
  {
    eventKey: '2',
    label: 'Second'
  },
  {
    eventKey: '3',
    label: 'Third'
  },
  {
    eventKey: '4',
    label: 'Fourth'
  }
];

const GalleryItem = ({
  galleryItem,
  onClick
}: {
  galleryItem: GalleryItemType;
  onClick: () => void;
}) => {
  return (
    <div
      className={`${galleryItem.className} cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={galleryItem.img}
        alt=""
        className="rounded h-100 w-100 fit-cover"
      />
    </div>
  );
};

const Gallery = () => {
  const [images, setImages] = useState(galleryItems);
  const [selectedCategory, setSelectedCategory] = useState('1');

  const { lightboxProps, openLightbox } = useLightbox(
    images.map(image => image.img)
  );

  const handleNavItemSelect = (category: string | null) => {
    setSelectedCategory(category || '1');
    setImages(
      galleryItems.filter(item =>
        category ? item.category.includes(category) : true
      )
    );
  };

  const handleItemClick = (index: number) => {
    openLightbox(index);
  };

  return (
    <section className="pt-15">
      <div className="container-small position-relative px-lg-7 px-xxl-3">
        <Row className="mb-8 text-center text-sm-start">
          <Col xs={12} className="mb-4">
            <h4 className="text-primary fw-bolder mb-3">Gallery</h4>
            <h2>Some of Our Best Works</h2>
          </Col>
          <Col lg={6}>
            <p>
              Rise like Phoenix focusing only on functionalities for your
              digital products leaving the design for us. Show what you do, with
              our latest admin dashboard. Check our best works and let us know
              what you want to find.
            </p>
          </Col>
          <Col lg={6}>
            <p>
              Want to tell your customers about the details of how and what?
              Tell them with all the posts at one place without them ridirecting
              to another page or site.
            </p>
          </Col>
        </Row>

        <IsotopeNav
          navItems={navItems}
          className="mb-5 justify-content-center justify-content-sm-start w-max-content"
          onSelect={handleNavItemSelect}
        />

        <div className="d-grid grid-cols-4 gap-3">
          {images.map((gallery, index) => (
            <>
              <GalleryItem
                galleryItem={gallery}
                key={gallery.img}
                onClick={() => handleItemClick(index + 1)}
              />
            </>
          ))}
        </div>

        <Lightbox {...lightboxProps} key={selectedCategory} />
      </div>
    </section>
  );
};

export default Gallery;
