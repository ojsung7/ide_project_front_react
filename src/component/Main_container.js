import React, { useRef } from 'react'

import Editor from "@monaco-editor/react";

const Main_container = () => {
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    function showValue() {
        alert(editorRef.current.getValue());
    }

    return (
        <div className='main_container'>
            <button onClick={showValue}>Show value</button>
            <Editor
                height="50%"
                defaultLanguage="c"
                defaultValue="// some comment"
                onMount={handleEditorDidMount}
                options={{
                    scrollBeyondLastLine:false,
                    fontSize:"16px"
                }}
            />
        </div>
    );
}

export default Main_container