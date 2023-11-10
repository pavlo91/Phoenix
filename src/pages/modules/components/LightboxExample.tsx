import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import useLightbox from 'hooks/useLightbox';
import DocPagesLayout from 'layouts/DocPagesLayout';
import img11 from 'assets/phoenix/img/gallery/11.png';
import img12 from 'assets/phoenix/img/gallery/12.png';
import img13 from 'assets/phoenix/img/gallery/13.png';
import img9 from 'assets/phoenix/img/gallery/9.png';
import img10 from 'assets/phoenix/img/gallery/10.png';
import img24 from 'assets/phoenix/img/gallery/24.png';
import Lightbox from 'components/base/LightBox';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';

const useLightboxCode = `
import Lightbox from 'components/base/LightBox';
import useLightbox from 'hooks/useLightbox';

function LightboxExample () {
  const [attachments] = useState([img9, img10, img11, img12, img13]);
  const { lightboxProps, openLightbox } = useLightbox(attachments);

  return (
    <div>
      <Lightbox {...lightboxProps} />

      <Row className="g-2 g-md-3">
        {attachments.map((img, index) => (
          <Col key={img} xs={6}>
            <img
              src={img}
              alt=""
              className="w-100 rounded-3 cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};`;

const galleryCode = `
import Lightbox from 'components/base/LightBox';
import useLightbox from 'hooks/useLightbox';

function SocialPhotos () {
  const [attachments] = useState([img9, img10, img11, img12, img13]);
  const { lightboxProps, openLightbox } = useLightbox(attachments);
  return (
    <div>
      <Lightbox {...lightboxProps} />
      <Row className="g-2 g-md-3">
        {attachments.map((img, index) => (
          <Col key={img} xs={
            index === 0 ? 6 : index === 1 ? 6 : 4
          }>
            <img
              src={img}
              alt=""
              className="w-100 rounded-3 cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};`;

const simpleImageCode = `
import Lightbox from 'components/base/LightBox';
import useLightbox from 'hooks/useLightbox';

function SocialPhotos () {
  const { lightboxProps, openLightbox } = useLightbox([img24]);
  return (
    <div>
      <Lightbox {...lightboxProps} />
      <Row className="g-3">
          <Col xs={4}>
            <img
              src={img24}
              alt=""
              className="w-100 rounded-3 cursor-pointer"
              onClick={() => openLightbox(1)}
            />
          </Col>
      </Row>
    </div>
  );
};`;

const LightboxExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Lightbox"
        description={`${process.env.REACT_APP_TITLE}-React uses FsLightbox-react for lightbox. React FsLightbox is a flexible lightbox component for displaying images in a React project.`}
        link={{
          text: 'FsLightbox-react Documentation',
          url: 'https://github.com/banthagroup/fslightbox-react'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="useLightbox Hook" noPreview />
          <PhoenixDocCard.Body>
            <div>
              <p className="mb-2">
                The <code>useLightbox</code> custom hook is used to implement
                FsLightbox feature within {process.env.REACT_APP_TITLE} React.
                The <code>useLightbox</code> hook simplifies the code needed for
                this functionality, promoting better code organization and
                maintainability.
              </p>
              <h5 className="mb-2">How to use :</h5>
              <p className="mb-2">
                Begin by importing the useLightbox custom hook at the top of
                your component file:
              </p>
              <div className="mb-3">
                <PhoenixLiveEditor
                  code={`import useLightbox from 'hooks/useLightbox';`}
                />
              </div>
              <p className="mb-2">
                After that, initialize the <code>useLightbox</code> hook by
                passing in the array of image sources as a parameter. This setup
                process enables the <code>lightbox</code> functionality and
                grants access to the <code>lightboxProps</code> and{' '}
                <code>openLightbox</code> properties and functions. The{' '}
                <code>lightboxProps</code> object, obtained from the hook,
                includes vital properties required to configure the{' '}
                <code>Lightbox</code> component. Meanwhile, the{' '}
                <code>openLightbox</code> function empowers you to activate the
                lightbox view for a specific image. You can activate this
                function by providing the index of the image you intend to
                display."
              </p>
              <PhoenixLiveEditor code={useLightboxCode} />
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Gallery" />
          <PhoenixDocCard.Body
            code={galleryCode}
            scope={{
              useLightbox,
              Lightbox,
              img11,
              img12,
              img9,
              img10,
              img13
            }}
          />
        </PhoenixDocCard>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Simple Image" />
          <PhoenixDocCard.Body
            code={simpleImageCode}
            scope={{
              useLightbox,
              Lightbox,
              img24
            }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default LightboxExample;
