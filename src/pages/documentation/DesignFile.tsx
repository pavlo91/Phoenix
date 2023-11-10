import PhoenixDocCard from 'components/base/PhoenixDocCard';
import React from 'react';

const DesignFile = () => {
  return (
    <div>
      <h2 className="mb-4 lh-sm">Design</h2>
      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Figma file" noPreview />
        <PhoenixDocCard.Body>
          <h5 className="mb-2">To play with the design:</h5>
          <ul>
            <li>
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                Download Figma
              </a>
            </li>
            <li>
              Open the Figma link from the <code>README.md</code>
            </li>
            <li>
              This file is <code>"read-only". </code>So, to customize the design
              on your own, you have to duplicate the Figma file and start the
              editing process on the copied file.
            </li>
          </ul>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
    </div>
  );
};

export default DesignFile;
