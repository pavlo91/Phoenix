import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Link } from 'react-router-dom';

const textSelectionCode = `
<>
  <p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
  <p className="user-select-auto">This paragraph has default select behavior.</p>
  <p className="user-select-none">This paragraph will not be selectable when clicked by the user.</p>
</>
`;

const pointerEventsCode = `
<>
  <p>
    <Link className="pe-none" to="#!"> This link </Link>
    can not be clicked.
  </p>
  <p>
    <Link className="pe-auto" to="#!"> This link </Link>{' '}
    can be clicked (this is default behavior).
  </p>
  <p className="pe-none">
    <Link to="#!">This link</Link> can not be clicked because the{' '}
    <code>pointer-events</code> property is inherited from its parent. However,{' '}
    <Link className="pe-auto" to="#!">
      this link
    </Link>{' '}
    has a <code>pe-auto</code> class and can be clicked.
  </p>
</>
`;

const InteractionsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Interactions"
        description="Utility classes that change how users interact with contents of a website."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Text selection"
            description="Change the way in which the content is selected when the user interacts with it."
          />
          <PhoenixDocCard.Body code={textSelectionCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Pointer events">
            <p className="mb-0 text-800">
              Bootstrap provides <code>.pe-none</code> and <code>.pe-auto</code>{' '}
              classes to prevent or add element interactions.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={pointerEventsCode} scope={{ Link }} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default InteractionsExample;
