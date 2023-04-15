import React from 'react'
import '../EditorComponent/editorComponent.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'



const EditorComponent = (props) => {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

   
    function handleChange(editor,data,value){
        onChange(value);
    }
  return (
    <div className='editComponent__container'>
        <div className="editor-title">
            {displayName}
        </div>
        <div>
            <ControlledEditor 
            onBeforeChange={handleChange}
            value={value}
            className='code-mirror-wrapper controlled-editor'
           
            options={{
                lineWrapping:true,
                theme:'material',
                lint:true,
                mode:language,
                lineNumbers:true

            }}/>
        </div>
    </div>
  )
}

export default EditorComponent