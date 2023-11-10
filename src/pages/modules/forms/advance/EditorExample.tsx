import PhoenixDocCard from 'components/base/PhoenixDocCard';
import TinymceEditor from 'components/base/TinymceEditor';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';
import React from 'react';

const editorCode = `
import TinymceEditor from 'components/base/TinymceEditor';

function EditorExample(){
  return(
    <TinymceEditor
      options={{
        height: '20rem'
      }}
    />
  )
}
`;

const EditorExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Editor"
        description={`${process.env.REACT_APP_TITLE}-React uses Tinymce React for rich text editor. TinyMCE React component integrates TinyMCE into React projects.`}
        link={{
          text: 'Documentation for React Tinymce',
          url: 'https://github.com/tinymce/tinymce-react'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header noPreview title="Pre Requirement">
            <p className="mt-2 mb-0">
              To use Tinymce editor at first you need to sign up in{' '}
              <a
                href="https://www.tiny.cloud/auth/signup/"
                target="_blank"
                rel="noreferrer"
              >
                Tiny Cloud
              </a>
              . And collect your api key and paste it in .env file variable
              <code> REACT_APP_TINYMCE_APIKEY</code>
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor
              code={`REACT_APP_TINYMCE_APIKEY= your_api_key_here`}
            />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body code={editorCode} scope={{ TinymceEditor }} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default EditorExample;
