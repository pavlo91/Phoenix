import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
  <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" className="border-top border-300">
    <Accordion.Header>How long does it take to ship my order?</Accordion.Header>
    <Accordion.Body className="pt-0">
      <strong>This is the first item's accordion body.</strong>
      It is shown by default, until the collapse plugin adds the appropriate classes
      that we use to style each element. These classes control the overall appearance,
      as well as the showing and hiding via CSS transitions. You can modify any of this
      with custom CSS or overriding our default variables. It's also worth noting that
      just about any HTML can go within the <code>accordion-body</code>, though the
      transition does limit overflow.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How long does it take to ship my order?</Accordion.Header>
    <Accordion.Body className="pt-0">
      <strong>This is the second item's accordion body.</strong>
      It is hidden by default, until the collapse plugin adds the appropriate classes
      that we use to style each element. These classes control the overall appearance,
      as well as the showing and hiding via CSS transitions. You can modify any of this
      with custom CSS or overriding our default variables. It's also worth noting that
      just about any HTML can go within the <code>accordion-body</code>, though the
      transition does limit overflow.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>How long does it take to ship my order?</Accordion.Header>
    <Accordion.Body className="pt-0">
      <strong>This is the third item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or
      overriding our default variables. It's also worth noting that just about any HTML
      can go within the <code>accordion-body</code>, though the transition does limit
      overflow.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
`;

const AccordionExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Accordion"
        description="Build vertically collapsing accordions in combination with the Collapse component"
        link={{
          text: 'Accordion on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/accordion/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Accordion Example" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default AccordionExample;
