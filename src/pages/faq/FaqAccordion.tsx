import SearchBox from 'components/common/SearchBox';
import { faqBreadcrumbItems, faqs } from 'data/faq';
import React from 'react';
import { Accordion } from 'react-bootstrap';
import FaqCta from 'components/cta/FaqCta';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const FaqAccordion = () => {
  return (
    <div>
      <PageBreadcrumb items={faqBreadcrumbItems} />
      <h2 className="mb-5">FAQ</h2>
      <h5 className="mb-3">How can we help?</h5>
      <p className="text-700">
        Search for the topic you need help with or{' '}
        <Link to="#!">contact our support</Link>
      </p>
      <SearchBox
        placeholder="Search"
        className="w-100 mb-8"
        style={{ maxWidth: '25rem' }}
      />
      <Accordion className="" defaultActiveKey="0">
        {faqs.map((faq, index) => (
          <Accordion.Item
            className={classNames({
              'border-top border-300': index === 0
            })}
            eventKey={String(index)}
            key={faq.id}
          >
            <Accordion.Header>{faq.title}</Accordion.Header>
            <Accordion.Body
              className="pt-0"
              dangerouslySetInnerHTML={{ __html: faq.details }}
            />
          </Accordion.Item>
        ))}
      </Accordion>
      <FaqCta />
    </div>
  );
};

export default FaqAccordion;
