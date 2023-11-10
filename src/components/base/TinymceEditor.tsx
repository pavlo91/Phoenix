import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { getColor } from 'helpers/utils';
import { IProps } from '@tinymce/tinymce-react/lib/cjs/main/ts/components/Editor';
import { useAppContext } from 'providers/AppProvider';

interface TinymceEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  options?: IProps['init'];
}

const TinymceEditor = ({
  value,
  onChange,
  options = { height: '50vh' }
}: TinymceEditorProps) => {
  const {
    config: { theme }
  } = useAppContext();
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const handleEditorFocus = () => {
    const editorContainer = editorRef.current?.editorContainer;
    editorContainer?.classList.add('editor-focused');
  };

  const handleEditorBlur = () => {
    const editorContainer = editorRef.current?.editorContainer;
    editorContainer?.classList.remove('editor-focused');
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.dom.addStyle(
        `body{color: ${getColor(
          theme === 'dark' ? 'white' : 'black'
        )} !important;}`
      );
    }
  }, [theme]);

  return (
    <Editor
      onFocus={handleEditorFocus}
      onBlur={handleEditorBlur}
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={value}
      onEditorChange={onChange}
      apiKey={process.env.REACT_APP_TINYMCE_APIKEY}
      init={{
        skin: 'oxide',
        menubar: false,
        content_style: `
        body { 
          color: ${getColor('black')} 
        }
        .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
          color: ${getColor('gray-400')};
          font-weight: 400;
          font-size: 12.8px;
        }
        `,
        statusbar: false,
        plugins: ['link', 'image', 'lists', 'table', 'media'],
        theme_advanced_toolbar_align: 'center',
        // directionality: getItemFromStore('phoenixIsRTL') ? 'rtl' : 'ltr',
        toolbar: [
          { name: 'history', items: ['undo', 'redo'] },
          {
            name: 'formatting',
            items: ['bold', 'italic', 'underline', 'strikethrough']
          },
          {
            name: 'alignment',
            items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify']
          },
          { name: 'list', items: ['numlist', 'bullist'] },
          { name: 'link', items: ['link'] }
        ],
        ...options
      }}
    />
  );
};

export default TinymceEditor;
