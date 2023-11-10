import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';
import React from 'react';

const addIconCode = `import { library } from '@fortawesome/fontawesome-svg-core'
import { faGulp } from '@fortawesome/free-brands-svg-icons' // module
import { faCheckSquare, faHome } from '@fortawesome/free-solid-svg-icons' // module
 
library.add(faGulp, faCheckSquare, faHome)`;

const individualAddIconCode = `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />`;

const exampleCode = `
<div>
  <div>
    <FontAwesomeIcon icon="home" className="text-success fs-5 me-3" />
    <FontAwesomeIcon icon="home" className="text-success fs-6 me-3" />
    <FontAwesomeIcon icon="home" className="text-success fs-7" />
  </div>
  <div className='mt-3'>
    <FontAwesomeIcon icon={['fab', 'facebook']} className="text-facebook fs-5 me-3" />
    <FontAwesomeIcon icon={['fab', 'twitter']} className="text-twitter fs-5 me-3"/>
    <FontAwesomeIcon icon={['fab', 'youtube']} className="text-youtube fs-5 me-3"/>
  </div>
</div>`;

const FontAwesome = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="React Fontawesome"
        description="Font Awesome 6 React component using SVG with JS"
        link={{
          text: 'React Fontawesome Documentation',
          url: `https://fontawesome.com/v5/docs/web/use-with/react`
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Usage" noPreview />
          <PhoenixDocCard.Body>
            <p>
              For adding new icon, go to <code>src/helpers/initFA.ts</code>{' '}
              file. We initialize all fontawesome icons here for globally use.
              Import your icon from your desired icon module and then pass it to{' '}
              <code>library.add()</code> function.
            </p>
            <PhoenixLiveEditor code={addIconCode} />
            <p className="my-3">
              you can explicitly import icons into each component for individual
              use.
            </p>
            <PhoenixLiveEditor code={individualAddIconCode} />
            <p className="mb-0 mt-3">
              For better understanding you can visit{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fontawesome.com/v6/docs/web/use-with/react/"
              >
                fontawesome usage
              </a>
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body code={exampleCode} scope={{ FontAwesomeIcon }} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FontAwesome;
