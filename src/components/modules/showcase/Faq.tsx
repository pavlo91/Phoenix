import classNames from 'classnames';
import { showcaseFaqs } from 'data/showcase';
import { Accordion, Col, Row } from 'react-bootstrap';

const Faq = () => {
  return (
    <section className="pt-9 pt-sm-14">
      <div className="container-small">
        <Row className="flex-center">
          <Col xs={12} xl={7}>
            <h2 className="text-center mb-6 mb-sm-10">
              Frequently asked questions
            </h2>
            <Accordion className="border-top" defaultActiveKey="0">
              {showcaseFaqs.map((faq, index) => (
                <Accordion.Item
                  className={classNames('border-bottom border-200')}
                  eventKey={String(index)}
                  key={faq.id}
                >
                  <Accordion.Button className="fs-7">
                    {faq.question}
                  </Accordion.Button>
                  <Accordion.Body className="pt-0">{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Faq;
