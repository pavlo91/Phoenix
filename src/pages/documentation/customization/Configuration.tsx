import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';

const exampleCode = `
export const initialConfig = {
  isNavbarVerticalCollapsed: false,
  openNavbarVertical: false, // for responsive
  theme: 'light',
  navbarTopAppearance: 'default',
  navbarVerticalAppearance: 'default',
  navbarPosition: 'vertical',
  navbarTopShape: 'default',
  isRTL: false
};`;

const contextCode = `
  import { useAppContext } from 'providers/AppProvider';

  const { config, setConfig } = useAppContext();

  // update any config value
  setConfig({
    theme: 'dark',
    navbarTopShape:'slim'
    // any config value
  });
`;

const Configuration = () => {
  return (
    <div>
      <DocPageHeader
        title="Setting up configuration"
        description="Phoenix-React has a global configuration system. You can change the theme settings with a single global javascript object."
      />
      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Settings configuration" noPreview />
        <PhoenixDocCard.Body>
          <p>
            Control side panel settings from one place. Go to{' '}
            <code>src/config.ts</code> file and set your setting configuration.
            If any config value is already saved in local storage and you want
            to change the default config, please clear the local storage first.
          </p>
          <PhoenixLiveEditor code={exampleCode} />
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Available Options" noPreview />
        <PhoenixDocCard.Body>
          <table className="fs--1 mb-0 table table-bordered">
            <thead className="bg-200 text-900">
              <tr>
                <th className="white-space-nowrap" style={{ width: '20%' }}>
                  Option
                </th>
                <th className="white-space-nowrap" style={{ width: '20%' }}>
                  Type
                </th>
                <th className="white-space-nowrap" style={{ width: '20%' }}>
                  Defaults
                </th>
                <th className="white-space-nowrap">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="white-space-nowrap">
                  isNavbarVerticalCollapsed
                </td>
                <td className="white-space-nowrap">
                  <code>Boolean</code>
                </td>
                <td className="white-space-nowrap">
                  <code>false</code>
                </td>
                <td>
                  Set <code>true</code> to make the vertical navbar stay
                  collapsed when the page loads.{' '}
                </td>
              </tr>

              <tr>
                <td className="white-space-nowrap">openNavbarVertical</td>
                <td>
                  <code>Boolean</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>
                  This option is for showing up the{' '}
                  <code> vertical navbar </code> menus in small screens{' '}
                  <code>(sm to lg)</code>.
                </td>
              </tr>

              <tr>
                <td className="white-space-nowrap">theme</td>
                <td>
                  <code> light | dark</code>
                </td>
                <td className="white-space-nowrap">
                  <code>light</code>
                </td>
                <td>
                  This option is to set the <code> theme </code> mode. Set
                  <code> light </code> or <code> dark </code> to make the
                  default theme mode.
                </td>
              </tr>

              <tr>
                <td className="white-space-nowrap">navbarTopAppearance</td>
                <td className="white-space-nowrap">
                  <code> default | darker </code>
                </td>
                <td className="white-space-nowrap">
                  <code> default </code>
                </td>
                <td>
                  This option is for setting up the{' '}
                  <code> Navbar Top Appearance</code>. To make a darker top
                  navbar (lighter in dark mode) set the value to{' '}
                  <code> darker </code>.
                </td>
              </tr>

              <tr>
                <td className="white-space-nowrap">navbarVerticalAppearance</td>
                <td className="white-space-nowrap">
                  <code> default | darker </code>
                </td>
                <td className="white-space-nowrap">
                  <code> default </code>
                </td>
                <td>
                  This option is for setting up the{' '}
                  <code> Navbar Vertical Appearance</code>. To make a darker
                  vertical navbar (lighter in dark mode) set the value to{' '}
                  <code> darker </code>.
                </td>
              </tr>

              <tr>
                <td className="white-space-nowrap">navbarPosition</td>
                <td className="white-space-nowrap">
                  <code>horizontal | vertical | combo</code>
                </td>
                <td className="white-space-nowrap">
                  <code>vertical</code>
                </td>
                <td>For setting the navbar position.</td>
              </tr>

              <tr>
                <td className="white-space-nowrap">navbarTopShape</td>
                <td className="white-space-nowrap">
                  <code>default | slim</code>
                </td>
                <td className="white-space-nowrap">
                  <code>default</code>
                </td>
                <td>For setting the top navbar shape.</td>
              </tr>
              <tr>
                <td className="white-space-nowrap">isRTL</td>
                <td>
                  <code>Boolean</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>
                  Set <code>true</code> to make the whole layout RTL (Right to
                  Left). Recommended for languages such as Arabic, Hebrew and
                  others.
                </td>
              </tr>
            </tbody>
          </table>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Config Context" noPreview />
        <PhoenixDocCard.Body>
          <p>
            {process.env.REACT_APP_TITLE} React uses{' '}
            <a href="https://legacy.reactjs.org/docs/context.html#reactcreatecontext">
              React context
            </a>{' '}
            to manage config state. To access and update any config value in
            your component use our custom hook <code>useAppContext</code>.
          </p>
          <PhoenixLiveEditor code={contextCode} />
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
    </div>
  );
};

export default Configuration;
