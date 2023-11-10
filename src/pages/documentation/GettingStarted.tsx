import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';

const serveCode = `
  npm install -g serve
  serve -s build
`;

const GettingStarted = () => {
  return (
    <div>
      <DocPageHeader className="mb-4" title="Getting Started">
        <p className="mb-0">
          Welcome to the ReactJS version of the{' '}
          <a
            href="https://themes.getbootstrap.com/product/phoenix-admin-dashboard-webapp-template/"
            target="_blank"
            rel="noopener noreferrer"
          >
            original {process.env.REACT_APP_TITLE} theme{' '}
          </a>
          . This doc will guide you to understand how{' '}
          <strong>{process.env.REACT_APP_TITLE}-React</strong> theme is
          organized, basics of how to customize, and how to compile from the
          source code if you want.
        </p>
      </DocPageHeader>
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Running in Local environment"
            noPreview
          />
          <PhoenixDocCard.Body>
            <p>
              This project is scaffolded using{' '}
              <a
                href="https://create-react-app.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create React App
              </a>
              .
            </p>
            <ol className="mb-0 ps-3">
              <li>
                Install{' '}
                <a
                  href="https://nodejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Node.js
                </a>{' '}
                if you do not already have it installed on your machine.
              </li>
              <li>
                Open the “{process.env.REACT_APP_NAME}-react-v
                {process.env.REACT_APP_VERSION}” directory with your cmd or
                terminal
              </li>
              <li>
                Run <code>npm i</code>
                <br />
                This command will download all the necessary dependencies for{' '}
                {process.env.REACT_APP_NAME} in the <code>node_modules</code>{' '}
                directory.
              </li>
              <li>
                Run <code>npm start</code>. A local web server will start at{' '}
                <code>http://localhost:3000</code>
              </li>
            </ol>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Creating a Production Build"
            noPreview
          />
          <PhoenixDocCard.Body>
            <p>
              After you done your customization, when you are ready to build,
              Edit <code>homapage</code> in your <code>package.json</code> file
              to change asset files relative paths. For more information visit{' '}
              <a
                href="https://create-react-app.dev/docs/deployment/#building-for-relative-paths"
                target="_blank"
                rel="noreferrer"
              >
                Create React App Doc.
              </a>{' '}
              Then Run <code>npm run build</code> command in your project
              directory to make the Production build.
            </p>
            <p>
              This will create an optimized production build by compililing,
              merging and minifying all the source files as necessary and will
              put them in the <code>build/</code> folder.
            </p>
            <p>
              To run the production build locally run the following commands:
            </p>
            <PhoenixLiveEditor code={serveCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default GettingStarted;
