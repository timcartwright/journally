import React, { useState } from 'react';

import './App.css';
import { Editor, createEditorState, BLOCK_BUTTONS } from 'medium-draft'
import '../node_modules/medium-draft/lib/index.css';
import mediumDraftExporter from 'medium-draft/lib/exporter';

function App() {
  const [editorState, setEditorState] = useState(createEditorState());
  const renderedHTML = mediumDraftExporter(editorState.getCurrentContent());

  const blockButtons = [{
      label: 'H1',
      style: 'header-one',
      icon: 'header',
      description: 'Heading 1',
    },
    {
      label: 'H2',
      style: 'header-two',
      icon: 'header',
      description: 'Heading 2',
  }].concat(BLOCK_BUTTONS);
  
  return (
    <div className="App" style={{margin: '50px'}}>
      <Editor
        blockButtons={blockButtons}
        editorState={editorState}
        onChange={setEditorState}/>

        <div
          dangerouslySetInnerHTML={{__html: renderedHTML}}
          style ={{
            textAlign: 'left',
            width: '650px',
            margin: '0 auto',
          }}
        />
    </div>
  );
}

export default App;
