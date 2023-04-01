import '../Editor/editor.css'
import { useState } from 'react';
import EditorComponent from '../EditorComponent/EditorComponent';

function Editor() {
    const [html,setHtml]=useState('');
    const [css,setCss]=useState('');
    const [javascript,setJavascript]=useState('');

    const srcDoc=`<html><style>${css}</style><body>${html}</body><script>${javascript}<script>
    <html>`

  return (
<div className='main'>
    
  <div >
  <h2>Code</h2>
  <div className='editor__container'>
   <EditorComponent language='xml' displayName='HTML'  value={html} onChange={setHtml} />
   <EditorComponent language='css' displayName='CSS' value={css} onChange={setCss} />
   <EditorComponent language='javascript' displayName='JAVASCRIPT' value={javascript} onChange={setJavascript} />
   </div>
  </div>
  
   <div className='output__container'>
   <h2>Output</h2>
   <iframe  srcDoc={srcDoc} title="output" sandbox='allow-scripts' width="100%" height="100%" frameborder='0'  >
      
   </iframe>
    </div>
</div>


  );
}

export default Editor;