import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import { UilHome } from '@iconscout/react-unicons';

const individualIconCode = `
import { UilHome } from '@iconscout/react-unicons';

const element = <UilHome />
`;

const fullPackageCode = `
import * as Unicons from '@iconscout/react-unicons';

const element = <Unicons.UilHome />
`;

const ExampleCode = `
import { UilHome } from '@iconscout/react-unicons';
import * as Unicons from '@iconscout/react-unicons';

<div>
  <div className="mb-3">
    <UilHome className="text-success me-2" size={32} />
    <UilHome className="text-success me-2" size={24} />
    <UilHome className="text-success" size={16} />
  </div>
  <div>
    <Unicons.UilFacebook className="text-primary me-2" />
    <Unicons.UilTwitter className="text-info me-2" />
    <Unicons.UilYoutube className="text-danger" />
  </div>
</div>
`;

const sdfdsfdd = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="React Unicons"
        description="Pixel-perfect vector icons as React Components."
        link={{
          text: 'Unicons Documentation',
          url: `https://github.com/Iconscout/react-unicons`
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Usage" noPreview />
          <PhoenixDocCard.Body>
            <p>Use individual icons</p>
            <PhoenixLiveEditor code={individualIconCode} />
            <p className="pt-3">Usage as full Package</p>
            <PhoenixLiveEditor code={fullPackageCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body
            code={ExampleCode}
            scope={{ Unicons, UilHome }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default sdfdsfdd;
