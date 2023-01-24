import React, { useRef, useState } from 'react'

import Editor from "@monaco-editor/react";

const Main_container = () => {
    const editorRef = useRef(null);

    const [font_size, setFont_size] = useState('14px');

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    function showValue() {
        alert(editorRef.current.getValue());
    }

    return (
        <div className='container_wrap'>
            <div className='main_container'>
                <div className='handler'>
                    <div>
                        <select onChange={(e) => setFont_size(e.target.value)}>
                            <option value="">--set font size--</option>
                            <option value="14px">14px</option>
                            <option value="16px">16px</option>
                            <option value="18px">18px</option>
                            <option value="20px">20px</option>
                        </select> 
                    </div>
                    <button>play</button>
                </div>
                <div className='monaco_editor'>
                    <Editor
                        defaultLanguage="c"
                        defaultValue="// some comment"
                        onMount={handleEditorDidMount}
                        options={{
                            scrollBeyondLastLine: false,
                            fontSize: font_size + 'px'
                        }}
                        theme="vs-dark"
                    />
                </div>
            </div>
            <div className='result_container'>
                <p>result</p>
            </div>
        </div>
    );
}

export default Main_container