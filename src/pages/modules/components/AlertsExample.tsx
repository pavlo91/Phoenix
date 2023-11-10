import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
() => {
  return (
    <>
      {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map(
        variant => (
          <Alert key={variant} variant={"soft-" + variant}>
            This is a {variant} alert—check it out!
          </Alert>
        )
      )}
    </>
  );
}
`;

const outlineCode = `
() => {
  return (
    <>
      {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map(
        variant => (
          <Alert key={variant} variant={"outline-" + variant}>
            This is a {variant} alert—check it out!
          </Alert>
        )
      )}
    </>
  );
}
`;

const phoenixAlertCode = `
() => {
  return (
    <>
      {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map(
        variant => (
          <Alert key={variant} variant={"phoenix-" + variant}>
            This is a {variant} alert—check it out!
          </Alert>
        )
      )}
    </>
  );
}
`;

const solidAlertCode = `
() => {
  return (
    <>
      {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map(
        variant => (
          <Alert key={variant} variant={variant} className='text-white'>
            This is a {variant} alert—check it out!
          </Alert>
        )
      )}
    </>
  );
}
`;

const dismissCode = `
() => {
  const [show, setShow] = useState(true);
  
  if (show) {
    return (
      <Alert variant="danger" className='text-white' onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}`;

const additionalContentCode = `
<Alert variant="success" className='text-white'>
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>`;

const AlertsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Alerts"
        description="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
        link={{
          text: 'Alerts on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/components/alerts/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Alert Soft" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Outline" />
          <PhoenixDocCard.Body code={outlineCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Phoenix Alerts" />
          <PhoenixDocCard.Body code={phoenixAlertCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Solid Alerts" />
          <PhoenixDocCard.Body code={solidAlertCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Additional content"
            description="Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy."
          />
          <PhoenixDocCard.Body code={additionalContentCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Dismissing">
            <p className="mb-0">
              Add the <code>dismissible</code> prop to add a functioning dismiss
              button to the Alert.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={dismissCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default AlertsExample;
