/* eslint-disable @typescript-eslint/no-explicit-any */
import LiveProvider from './PhoenixLiveProvider';
import { LiveEditor } from 'react-live';

interface PhoenixLiveEditorProps {
  code: string;
  scope?: { [key: string]: any };
}

const PhoenixLiveEditor = (props: PhoenixLiveEditorProps) => {
  return (
    <LiveProvider {...props}>
      <LiveEditor />
    </LiveProvider>
  );
};

export default PhoenixLiveEditor;
