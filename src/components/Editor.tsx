import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import React, { useState } from 'react';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

interface EditorProps {
  displayName: string;
  language: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<EditorProps> = ({ displayName, language, value, onChange }) => {
  const [open, setOpen] = useState(true);

  function handleChange(editor: object, data: object, value: string) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>

      <ControlledEditor 
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lineNumbers: true,
          lint: true,
          mode: language,
          theme: 'material'
        }}
      />
    </div>
  );
}

export default Editor;