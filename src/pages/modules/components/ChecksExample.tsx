import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <Form.Check 
    type='checkbox'
    id='defaultCheckbox'
    label='Default Checkbox'
  />
  <Form.Check 
    type='checkbox'
    id='checkedCheckbox'
    label='Checked Checkbox'
    defaultChecked
  />
  <Form.Check 
    type='checkbox'
    id='disabledCheckbox'
    label='Disabled Checkbox'
    disabled
  />
</>
`;
const reverseCode = `
<>
  <Form.Check 
    reverse
    type='checkbox'
    id='defaultCheckbox'
    label='Default Checkbox'
  />
  <Form.Check 
    reverse
    type='checkbox'
    id='checkedCheckbox'
    label='Checked Checkbox'
    defaultChecked
  />
  <Form.Check 
    reverse
    type='checkbox'
    id='disabledCheckbox'
    label='Disabled Checkbox'
    disabled
  />
</>
`;
const radioExampleCode = `
<>
  <Form.Check 
    type='radio'
    id='defaultRadio'
    label='Default Radios'
    name='radio'
  />
  <Form.Check 
    type='radio'
    id='checkedRadio'
    label='Default Checked Radios'
    defaultChecked
    name='radio'
  />
  <Form.Check 
    type='radio'
    id='disabledRadio'
    label='Disabled Radio'
    disabled
    name='radio'
  />
</>
`;
const switchesCode = `
<>
  <Form.Check 
    type='switch'
    id='defaultSwitch'
    label='Default switch checkbox input'
  />
  <Form.Check 
    type='switch'
    id='checkedSwitch'
    label='Checked switch checkbox input'
    defaultChecked
  />
  <Form.Check 
    type='switch'
    id='defaultDisableSwitch'
    label='Default switch checkbox input'
    disabled 
  />
  <Form.Check 
    type='switch'
    id='checkedDisableSwitch'
    label='Checked switch checkbox input'
    defaultChecked
    disabled
  />
</>
`;
const inlineCheckboxCode = `
<>
  <Form.Check
    inline
    type='checkbox'
    id='item1Check'
    label='Item 1'
  />
  <Form.Check
    inline 
    type='checkbox'
    id='item2Check'
    label='Item 2'
    defaultChecked
  />
  <Form.Check
    inline 
    type='checkbox'
    id='item3Check'
    label='Item 3'
    disabled
  />
</>
`;
const inlineRadioCode = `
<>
  <Form.Check
    inline
    type='radio'
    id='item1Radio'
    label='Item 1'
    name='inline-radio'
  />
  <Form.Check
    inline 
    type='radio'
    id='item2Radio'
    label='Item 2'
    defaultChecked
    name='inline-radio'
  />
  <Form.Check
    inline 
    type='radio'
    id='item3Radio'
    label='Item 3'
    disabled
    name='inline-radio'
  />
</>
`;
const customRenderCode = `
<>
  {['checkbox', 'radio'].map((type) => (
    <div key={type} className="mb-3">
      <Form.Check type={type} id={'check-api-' + type }>
        <Form.Check.Input type={type} isValid />
        <Form.Check.Label>{'Custom api' + type }</Form.Check.Label>
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
      </Form.Check>
    </div>
  ))}
</>
`;

const ChecksExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Checks and radios"
        description="Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS."
        link={{
          text: 'Checks and radios on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/forms/checks-radios/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Checks" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Radios" />
          <PhoenixDocCard.Body code={radioExampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Switches">
            <p className="mb-0">
              A switch has the markup of a custom checkbox but uses{' '}
              <code>type="switch"</code>
              to render a toggle switch. Switches also support the same
              customizable children as <code>&lt;FormCheck&gt;</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={switchesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Check Inline">
            <p className="mb-0">
              Group checkboxes on the same horizontal row by adding the{' '}
              <code>inline</code> prop.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={inlineCheckboxCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Radio Inline">
            <p className="mb-0">
              Group radio on the same horizontal row by adding the{' '}
              <code>inline</code> prop.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={inlineRadioCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Reverse">
            <p className="mb-0">
              Put your checkboxes, radios, and switches on the opposite side
              with the <code>reverse</code> prop.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={reverseCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Custom rendering">
            <p className="mb-0">
              When you need tighter control, or want to customize how the{' '}
              <code>FormCheck</code> component renders, it may better to use its
              constituent parts directly.
            </p>
            <p className="mb-0">
              By provided <code>children</code> to the <code>FormCheck</code>{' '}
              you can forgo the default rendering and handle it yourself. (You
              can still provide an <code>id</code> to the <code>FormCheck</code>{' '}
              or
              <code>FormGroup</code> and have it propagate to the label and
              input).
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={customRenderCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ChecksExample;
