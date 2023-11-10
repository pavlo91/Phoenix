import { Dispatch, SetStateAction } from 'react';
import { Nav } from 'react-bootstrap';
import blueFront from 'assets/phoenix/img/products/details/blue_front.png';
import blueBack from 'assets/phoenix/img/products/details/blue_back.png';
import blueSide from 'assets/phoenix/img/products/details/blue_side.png';

import redFront from 'assets/phoenix/img/products/details/red_front.png';
import redBack from 'assets/phoenix/img/products/details/red_back.png';
import redSide from 'assets/phoenix/img/products/details/red_side.png';

import greenFront from 'assets/phoenix/img/products/details/green_front.png';
import greenBack from 'assets/phoenix/img/products/details/green_back.png';
import greenSide from 'assets/phoenix/img/products/details/green_side.png';

import purpleFront from 'assets/phoenix/img/products/details/purple_front.png';
import purpleBack from 'assets/phoenix/img/products/details/purple_back.png';
import purpleSide from 'assets/phoenix/img/products/details/purple_side.png';

import silverFront from 'assets/phoenix/img/products/details/silver_front.png';
import silverBack from 'assets/phoenix/img/products/details/silver_back.png';
import silverSide from 'assets/phoenix/img/products/details/silver_side.png';

import yellowFront from 'assets/phoenix/img/products/details/yellow_front.png';
import yellowBack from 'assets/phoenix/img/products/details/yellow_back.png';
import yellowSide from 'assets/phoenix/img/products/details/yellow_side.png';

import orangeFront from 'assets/phoenix/img/products/details/orange_front.png';
import orangeBack from 'assets/phoenix/img/products/details/orange_back.png';
import orangeSide from 'assets/phoenix/img/products/details/orange_side.png';

import classNames from 'classnames';

type Variant = {
  id: string;
  variant: string;
  thumb: string;
  images: string[];
};

const colorVariants: Variant[] = [
  {
    id: 'blue',
    variant: 'Blue',
    thumb: blueFront,
    images: [blueFront, blueBack, blueSide]
  },
  {
    id: 'red',
    variant: 'Red',
    thumb: redFront,
    images: [redFront, redBack, redSide]
  },
  {
    id: 'green',
    variant: 'Green',
    thumb: greenFront,
    images: [greenFront, greenBack, greenSide]
  },
  {
    id: 'purple',
    variant: 'Purple',
    thumb: purpleFront,
    images: [purpleFront, purpleBack, purpleSide]
  },
  {
    id: 'silver',
    variant: 'Silver',
    thumb: silverFront,
    images: [silverFront, silverBack, silverSide]
  },
  {
    id: 'yellow',
    variant: 'Yellow',
    thumb: yellowFront,
    images: [yellowFront, yellowBack, yellowSide]
  },
  {
    id: 'orange',
    variant: 'Orange',
    thumb: orangeFront,
    images: [orangeFront, orangeBack, orangeSide]
  }
];

const ProductColorNav = ({
  selectedVariantKey,
  setSelectedVariantKey
}: {
  selectedVariantKey: string;
  setSelectedVariantKey: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Nav
      className="gap-2"
      activeKey={selectedVariantKey}
      onSelect={selectedKey => setSelectedVariantKey(selectedKey as string)}
    >
      {colorVariants.map(variant => (
        <ProductColorNavItem
          key={variant.id}
          item={variant}
          isActive={variant.id === selectedVariantKey}
        />
      ))}
    </Nav>
  );
};

const ProductColorNavItem = ({
  item,
  isActive
}: {
  item: Variant;
  isActive: boolean;
}) => {
  return (
    <Nav.Item className="">
      <Nav.Link
        eventKey={item.id}
        className={classNames('border rounded-1 p-0', {
          'border-primary': isActive
        })}
      >
        <img src={item.thumb} width={38} alt="" />
      </Nav.Link>
    </Nav.Item>
  );
};

export default ProductColorNav;
