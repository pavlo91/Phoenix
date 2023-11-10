import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import TinymceEditor from 'components/base/TinymceEditor';
import EmailLayout from 'layouts/EmailLayout';
import { Card, Col, Form, Row } from 'react-bootstrap';

const Compose = () => {
  return (
    <EmailLayout page="compose">
      <Col>
        <Card className="email-content">
          <Card.Body>
            <form className="d-flex flex-column h-100">
              <Row className="g-3 mb-2">
                <Col xs={4}>
                  <Form.Control type="email" placeholder="To" />
                </Col>
                <Col xs={4}>
                  <Form.Control type="email" placeholder="CC" />
                </Col>
                <Col xs={4}>
                  <Form.Control type="email" placeholder="BCC" />
                </Col>
                <Col xs={12}>
                  <Form.Control type="text" placeholder="Subject" />
                </Col>
              </Row>
              <div className="mb-3 flex-1">
                <TinymceEditor
                  options={{
                    height: '100%'
                  }}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <div>
                    <Button className="p-0">
                      <label
                        className="text-900 fs-9 cursor-pointer"
                        htmlFor="attachments"
                      >
                        <FontAwesomeIcon icon="paperclip" />
                      </label>
                    </Button>
                    <Form.Control
                      className="d-none"
                      type="file"
                      id="attachments"
                    />
                  </div>

                  <div>
                    <Button className="p-0">
                      <label
                        className="text-900 fs-9 cursor-pointer"
                        htmlFor="images"
                      >
                        <FontAwesomeIcon icon="image" />
                      </label>
                    </Button>
                    <Form.Control
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="images"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <Button
                    variant="link"
                    className="text-900 fs-10 text-decoration-none"
                  >
                    Discard
                  </Button>
                  <Button
                    variant="primary"
                    className="fs-10"
                    type="submit"
                    endIcon={<FontAwesomeIcon icon="paper-plane" />}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </Card.Body>
        </Card>
      </Col>
    </EmailLayout>
  );
};

export default Compose;
