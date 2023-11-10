import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';

const themeColorCode = `
    //*-----------------------------------------------
    //|   Theme Colors
    //-----------------------------------------------*/

    $primary: $blue !default; 
    $secondary: $gray-900 !default;
    $success: $green !default;
    $info: $cyan !default;
    $warning: $yellow !default;
    $danger: $red !default;
    $light: $gray-100 !default;
    $dark: $gray-1100 !default;        
`;

const darkThemeColorCode = `
    //*-----------------------------------------------
    //|   Dark theme colors
    //-----------------------------------------------*/

    $dark-theme-colors: (
        'primary': $blue-300,
        'secondary': $secondary,
        'success': $green-300,
        'info': $cyan-300,
        'warning': $orange-300,
        'danger': $red-300,
        'light': rgba(map-get($dark-grays, '200'), 0.25),
        'dark': $light
    ) !default;

    $dark-grays: (
      'soft': $dark-gray-soft,
      '100': $gray-1000,
      '200': $gray-900,
      '300': #373e53,
      '400': $gray-800,
      '500': $gray-700,
      '600': $gray-500,
      '700': $gray-500,
      '800': #949db5,
      '900': $gray-400,
      '1000': $gray-300,
      '1100': $gray-200
    ) !default;
`;

const themeUsedColorsCode = `
    // Theme used colors

    $theme-used-colors: (
        'primary-soft': $blue-soft,
        'primary-100': $blue-100,
        'primary-200': $blue-200,
        'primary-300': $blue-300,
        'primary-500': $blue-500,
        'primary-600': $blue-600,
        'warning-soft': $orange-soft,
        'warning-100': $orange-100,
        'warning-200': $orange-200,
        'warning-300': $orange-300,
        'warning-500': $orange-500,
        'warning-600': $orange-600,
        'danger-300': $red-300,
        'danger-100': $red-100,
        'danger-200': $red-200,
        'danger-500': $red-500,
        'danger-600': $red-600,
        'success-100': $green-100,
        'success-200': $green-200,
        'success-300': $green-300,
        'success-500': $green-500,
        'success-600': $green-600,
        'info-100': $cyan-100,
        'info-200': $cyan-200,
        'info-300': $cyan-300,
        'info-500': $cyan-500,
        'info-600': $cyan-600
    ) !default;

    // Dark theme used color

    $dark-theme-used-colors: (
        'primary-soft': $blue-soft,
        'primary-100': #1d2332,
        'primary-200': $blue-200,
        'primary-300': $blue-300,
        'primary-500': $blue-400,
        'primary-600': $blue-600,
        'warning-soft': $orange-soft,
        'warning-100': #272528,
        'warning-200': $orange-200,
        'warning-300': $orange-300,
        'warning-500': $orange-400,
        'warning-600': $orange-600,
        'danger-300': $red-300,
        'danger-200': $red-200,
        'danger-100': #262026,
        'danger-500': $red-500,
        'danger-600': $red-600,
        'success-100': #1e2628,
        'success-200': $green-200,
        'success-300': $green-300,
        'success-500': $green-400,
        'success-600': $green-600,
        'info-100': $dark-info-100,
        'info-200': $cyan-200,
        'info-300': $cyan-300,
        'info-500': $cyan-400,
        'info-600': $cyan-600
    ) !default;
    
`;

const usingCssVariablesCode = `
      /*-----------------------------------------------
      |   Theme Styles
      -----------------------------------------------*/
      $success: #00d27a;
      $danger: #e63757;
      :root, :root.light, :root .light {
        --phoenix-primary:  #{$success};
        --phoenix-primary-rgb: #{to-rgb($success)};
        ...
        ...
        ...
      }
      .dark{
        --phoenix-primary: #{$danger};
        --phoenix-primary-rgb: #{to-rgb($danger)};
        .card{
          --phoenix-card-bg: #{$success};
        }
      }
`;

const Styling = () => {
  return (
    <div>
      <DocPageHeader
        title="Styling"
        description="We recommend you customize your theme styles using the user style files. You can customize the theme’s styles with the following approaches:"
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Edit SCSS" />
          <PhoenixDocCard.Body className="text-800">
            <p>
              You can add your own SCSS and override the theme style in the{' '}
              <code>user.scss</code> file.
            </p>
            <div className="border rounded-1 bg-white px-3 py-2 mt-4 mb-3">
              <code>user.scss</code>
            </div>
            <p>
              To make broader changes to the design of the theme, such as
              changing the color scheme or font sizes, use{' '}
              <code>src/assets/phoenix/scss/_user-variables.scss</code>. Any variable
              from <code>node_modules/bootstrap/scss/_variables.scss</code> or{' '}
              <code>src/assets/phoenix/scss/theme/_variables.scss</code> can be
              overridden with your own value.
            </p>

            <div className="border rounded-1 bg-white px-3 py-2 mt-4 mb-3">
              <code>_user-variables.scss</code>
            </div>
            <p>
              To remove bootstrap components, update{' '}
              <code>src/scss/_bootstrap.scss</code> file.
            </p>
            <div className="border rounded-1 bg-white px-3 py-2 mt-4 mb-3">
              <code>_bootstrap.scss</code>
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Changing theme colors" />
          <PhoenixDocCard.Body className="text-800">
            <p>
              You can bring your necessary variable colors form{' '}
              <code>src/scss/theme/_colors.scss </code> and paste it into{' '}
              <code> src/scss/_user-variables.scss </code> then update variables
              as your necessity. We recommend to follow this approach.
            </p>
            <p>
              Light mode is default theme style in {process.env.REACT_APP_TITLE}
              . So, if you update any bootstrap’s SCSS variables, it will effect
              in Light mode. If you want to update any color, find the
              corresponding variable for the color and place theme to
              _user-variables.scss file.
            </p>
            <PhoenixLiveEditor code={themeColorCode} />

            <p className="mt-3">
              If you want to update any theme colors for dark mode, update{' '}
              <code>$dark-theme-colors</code> variable and to update the grays
              colors you have to update the <code>$dark-grays </code>variable.
            </p>
            <PhoenixLiveEditor code={darkThemeColorCode} />

            <h6 className="mt-4 fs-7 mb-2 fw-semi-bold">All Colors</h6>
            <p className="mb-1">
              All <strong>{process.env.REACT_APP_TITLE}</strong> colors are
              available as Sass variables and Sass map in{' '}
              <code>src/scss/theme/_colors.scss </code>file. To avoid increased
              file sizes, we don’t create text or background color classes for
              each of these variables. Instead, we choose a subset of these
              colors for a theme palette.
            </p>
            <p>
              You'll find all the colors used in the theme in a sass map name{' '}
              <code>$theme-used-colors </code>in{' '}
              <code>src/scss/theme/_colors.scss </code>file. If you want to use
              any <strong>{process.env.REACT_APP_TITLE} </strong>color to
              generate <code>text/bg </code>
              utility class, Add the color variable in{' '}
              <code>$theme-used-colors </code>map. If you want to add/change
              color for dark mode, update the{' '}
              <code>$dark-theme-used-colors </code>map.{' '}
            </p>
            <PhoenixLiveEditor code={themeUsedColorsCode} />
            <h4 className="mt-4 mb-2">Using CSS variable:</h4>
            <p>
              To update theme color with this approach, you have to update CSS
              variable for both modes. If you change any color you have to
              assign its corresponding RGB color too. Please note that sometimes
              you may need to update corresponding component's CSS variable. For
              example:
            </p>
            <PhoenixLiveEditor code={usingCssVariablesCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Compiling SCSS" />
          <PhoenixDocCard.Body>
            <p>
              Run <code>npm run build:css</code> command in your project
              directory to compile scss. This will compile all the SCSS files
              from <code>src/assets/phoenix/scss/</code> directory and generate{' '}
              <code> theme.min.css </code>,<code> theme-rtl.min.css </code>,{' '}
              <code> user.min.css </code> <code> user-rtl.min.css </code>files
              in <code>public/css/</code> directory. Reload your browser to see
              the changes.
            </p>
            <p>
              <strong>
                You can also use the SCSS watcher to automatically compile and
                reload your browser every time you save your SCSS files by
                running the command
              </strong>
              <code> npm run watch:css </code>
              <strong> in a separate terminal window while running</strong>{' '}
              <code>npm start</code> <strong> in another.</strong>
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default Styling;
