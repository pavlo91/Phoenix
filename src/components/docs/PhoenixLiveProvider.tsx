import React, { PropsWithChildren } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { LiveProvider } from 'react-live';
import { defaultProps } from 'prism-react-renderer';
import { transformTSCode } from 'helpers/utils';

export interface PhoenixLiveProviderProps {
  code?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scope?: { [key: string]: any };
  noInline?: boolean;
  transformCode?: (code: string) => string | Promise<string>;
}

const PhoenixLiveProvider = ({
  children,
  code,
  noInline,
  scope,
  transformCode
}: PropsWithChildren<PhoenixLiveProviderProps>) => {
  return (
    <LiveProvider
      code={code}
      scope={{ ...ReactBootstrap, ...React, ...scope }}
      noInline={noInline}
      transformCode={
        transformCode
          ? transformCode
          : code => transformTSCode(code.replace(/^import.*$/gm, ''))
      }
      language="jsx"
      {...defaultProps}
    >
      {children}
    </LiveProvider>
  );
};

export default PhoenixLiveProvider;
