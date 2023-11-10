import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import generic5 from 'assets/phoenix/img/generic/5.jpg';
import generic6 from 'assets/phoenix/img/generic/6.jpg';
import generic7 from 'assets/phoenix/img/generic/7.jpg';
import generic8 from 'assets/phoenix/img/generic/8.jpg';
import generic9 from 'assets/phoenix/img/generic/9.jpg';
import generic28 from 'assets/phoenix/img/generic/28.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const exampleCode = `
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic6}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic7}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic8}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
`;

const customStyledCode = `
<Carousel
  className='theme-slider'
  indicators={false}
  nextIcon={
    <FontAwesomeIcon icon="angle-right" />
  }
  prevIcon={
    <FontAwesomeIcon icon="angle-left" />
  }
>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic6}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic7}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic8}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
`;

const withCaptionsCode = `
<Carousel className='light'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-white">First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic28}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-white">Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic9}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-white">Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
`;

const fadeCode = `
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic8}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic7}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic6}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
`;

const controlledCode = `
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={generic6}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={generic7}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={generic8}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
`;

const intervalCode = `
<Carousel className='light'>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={generic6}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-white">First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={generic7}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-white">Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic8}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-white">Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
`;

const BootstrapCarousel = () => {
  return (
    <div>
      <DocPageHeader
        title="Carousel"
        description="A slideshow component for cycling through elements—images or slides of text—like a carousel."
        link={{
          text: 'Carousels on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/carousel/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic Example" />
          <PhoenixDocCard.Body
            code={exampleCode}
            scope={{ generic6, generic7, generic8 }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Controlled" />
          <PhoenixDocCard.Body
            code={controlledCode}
            scope={{ generic6, generic7, generic8 }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Styled Example" />
          <PhoenixDocCard.Body
            code={customStyledCode}
            scope={{ generic6, generic7, generic8, FontAwesomeIcon }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="With Captions" />
          <PhoenixDocCard.Body
            code={withCaptionsCode}
            scope={{ generic5, generic28, generic9 }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Crossfade" />
          <PhoenixDocCard.Body
            code={fadeCode}
            scope={{ generic6, generic7, generic8 }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Individual Item Intervals">
            <p className="mb-0">
              You can specify individual intervals for each carousel item via
              the <code>interval</code>
              prop.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={intervalCode}
            scope={{ generic6, generic7, generic8 }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BootstrapCarousel;
