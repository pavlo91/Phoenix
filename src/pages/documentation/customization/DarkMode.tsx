import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { useAppContext } from 'providers/AppProvider';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import ThemeToggler from 'components/common/ThemeToggler';
import PhoenixDocProvider from 'providers/PhoenixDocProvider';

const darkModeExampleCode = `
import { useAppContext } from 'providers/AppProvider';
import FeatherIcon from 'feather-icons-react';

const DarkModeExample = () => {
  const {
    config: { theme },
    setConfig
  } = useAppContext(); // import AppContext from 'src/context/Context.js'
  
  return (
    <Row>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Checkbox </h5>
        <Form.Check
          type="checkbox"
          id="themeToggleCheckBox"
          label="Dark mode"
          onChange={e => setConfig({ theme: e.target.checked ? 'dark' : 'light' })}
          checked={theme === 'dark'}
        />
      </Col>

      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Switch Input</h5>
        <Form.Check
          type="switch"
          id="themeToggleSwitch"
          label="Dark mode"
          onChange={e => setConfig({ theme: e.target.checked ? 'dark' : 'light' })}
          checked={theme === 'dark'}
        />
      </Col>

      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Radio Button</h5>
        <Form.Group>
          <Form.Check
            inline
            type="radio"
            id="lightRadioButton"
            label="Light"
            name="themeToggleRadio"
            checked={theme === 'light'}
            onChange={() => setConfig({ theme: 'light' })}
          />
          <Form.Check
            inline
            type="radio"
            id="darkRadioButton"
            label="Dark"
            name="themeToggleRadio"
            checked={theme === 'dark'}
            onChange={() => setConfig({ theme: 'dark' })}
          />
        </Form.Group>
      </Col>

      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Custom Icon</h5>
        <ThemeToggler />
      </Col>
    </Row>
  );
};
render(<DarkModeExample />);
`;

const lightCode = `
  <Card bg='100' className="light">
    <Card.Body>
      <p className="mb-0 text-700">
        <b>This element will retain it's color if you switch between light and dark mode.</b>
      </p>
    </Card.Body>
  </Card>
`;

const darkCode = `
  <Card bg='100' className="dark">
    <Card.Body>
      <p className="mb-0 text-700">
        <b>This element will retain it's color if you switch between light and dark mode.</b>
      </p>
    </Card.Body>
  </Card>
`;

const dark__Code = `
  <Card bg='light' className="dark__bg-primary">
    <Card.Body>
      <p className="mb-0 dark__text-white">
        <span className="fw-bold">
          The background will be primary and text color will be white in dark mode.
        </span>
      </p>
    </Card.Body>
  </Card>
`;

const DarkMode = () => {
  return (
    <div>
      <DocPageHeader title="Dark Mode">
        <p className="lead text-700">
          It’s effortless to switch Dark Mode in {process.env.REACT_APP_TITLE}
          -React. You can enable Dark Mode by default or create a Dark/Light
          switch if you want. To set the default mode "Dark", please see the
          <Link to="/documentation/customization/configuration">
            {' '}
            configuration page
          </Link>
        </p>
      </DocPageHeader>
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Toggle Dark Mode"
            description={`Toggling dark mode is very easy in ${process.env.REACT_APP_TITLE}-React. You can toggle dark or light mode by using checkbox, radio input, switch input and custom icon component.`}
          />
          <PhoenixDocCard.Body
            code={darkModeExampleCode}
            noInline
            scope={{ FeatherIcon, useAppContext, ThemeToggler }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Modify Dark colors" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-0 text-800">
              You can find all the variables used to create the dark mode in
              <code> src/assets/phoenix/scss/theme/root/_dark.scss </code> file. If you
              want to override a variable, copy that variable to{' '}
              <code> src/assets/phoenix/scss/_user-variables.scss </code> file and
              update it as you see fit. After changing the variable build your
              scss again.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard noProvider className="mb-4">
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Using the Dark className" noPreview />
            <PhoenixDocCard.Body>
              <h6 className="fs-8 mb-3">
                You can keep a style constant regardless of current (light or
                dark) mode
              </h6>
              <p className="mb-2">
                If you want a component to retain it’s color (light or dark) as
                it is regardless of the current mode, you can use the following
                classeNames -
              </p>
              <p className="mb-2">
                <code> .light </code> - It will keep the color light even if the
                current mode is dark
              </p>
              <p>
                <code> .dark </code> - It will keep the color dark even if the
                current mode is light
              </p>

              <Row className="mb-5">
                <Col sm={6}>
                  <PhoenixDocCard>
                    <PhoenixDocCard.Header />
                    <PhoenixDocCard.Body code={lightCode} />
                  </PhoenixDocCard>
                </Col>
                <Col sm={6}>
                  <PhoenixDocCard>
                    <PhoenixDocCard.Header />
                    <PhoenixDocCard.Body code={darkCode} />
                  </PhoenixDocCard>
                </Col>
              </Row>

              <h6 className="fs-8 mb-3">
                Override Background and Text color only for dark mode
              </h6>
              <p className="mb-2">
                If you want to use a different text color or background color
                rather than the default dark theme color for any element, you
                can use the special "dark" classeNames:
              </p>
              <ul className="mb-2">
                <li>
                  <code>dark__bg-* </code>
                </li>
                <li>
                  <code>dark__text-* </code>
                </li>
              </ul>
              <p>The following element illustrates the example:</p>

              <PhoenixDocCard className="mb-4">
                <PhoenixDocCard.Header />
                <PhoenixDocCard.Body code={dark__Code} />
              </PhoenixDocCard>
            </PhoenixDocCard.Body>
          </PhoenixDocProvider>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default DarkMode;
