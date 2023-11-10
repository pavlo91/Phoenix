import classNames from 'classnames';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { useAppContext } from 'providers/AppProvider';
import { Col, Row } from 'react-bootstrap';

const BackgroundExample = () => {
  const { getThemeColor } = useAppContext();

  return (
    <div>
      <DocPageHeader
        title="Background"
        description="Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Solid colors" noPreview />
          <PhoenixDocCard.Body>
            <Row className="g-0">
              {[
                'primary',
                'secondary',
                'success',
                'info',
                'warning',
                'danger'
              ].map(variant => (
                <Col xs={6} sm={4} lg={3} key={variant}>
                  <div
                    className={classNames(
                      `d-flex flex-center p-3 bg-${variant}`
                    )}
                    style={{ height: '180px' }}
                  >
                    <div className="text-center">
                      <code
                        className={
                          variant === 'secondary' ? 'text-500' : 'text-white'
                        }
                      >
                        .bg-{variant}
                      </code>
                      <br />
                      <code
                        className={
                          variant === 'secondary' ? 'text-500' : 'text-white'
                        }
                      >
                        {getThemeColor(variant)}
                      </code>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Grays" noPreview />
          <PhoenixDocCard.Body>
            <Row className="g-0">
              {[
                'black',
                '1100',
                '1000',
                '900',
                '800',
                '700',
                '600',
                '500',
                '400',
                '300',
                '200',
                '100',
                'soft',
                'white'
              ].map((variant, index) => (
                <Col xs={6} sm={4} lg={3} key={index}>
                  <div
                    className={classNames(
                      `d-flex flex-center p-3 bg-${variant} `,
                      {
                        'border border-300': index > 7
                      }
                    )}
                    style={{ height: '180px' }}
                  >
                    <div className="text-center">
                      <code className={index > 7 ? 'text-black' : 'text-white'}>
                        .bg-{variant}
                      </code>
                      <br />
                      <code className={index > 7 ? 'text-black' : 'text-white'}>
                        {getThemeColor(variant)}
                      </code>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Gradients" noPreview />
          <PhoenixDocCard.Body>
            <Row className="g-0">
              {[
                'primary',
                'secondary',
                'success',
                'info',
                'warning',
                'danger'
              ].map((variant, index) => (
                <Col xs={6} sm={4} lg={3} key={index}>
                  <div
                    className={classNames(
                      `d-flex flex-center p-3 bg-${variant} bg-gradient `,
                      {
                        'border border-300': index > 7
                      }
                    )}
                    style={{ height: '180px' }}
                  >
                    <div className="text-center">
                      <code className={index > 7 ? 'text-black' : 'text-white'}>
                        .bg-{variant}
                      </code>
                      <br />
                      <code className={index > 7 ? 'text-black' : 'text-white'}>
                        .bg-gradient
                      </code>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BackgroundExample;
