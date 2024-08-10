import React, { useEffect } from 'react'
import Codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/lib/codemirror.css'
import { useRef } from 'react';


const Editor = () => {
   
    const editorRef = useRef(null);

    useEffect(() => {
      const init = async () => {
        editorRef.current = Codemirror.fromTextArea(
          document.getElementById("realtimeEditor"),
          {
            mode: { name: "javascript", json: true },
            theme: "dracula",
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
          }
        );
  
        editorRef.current.on("change", (instance, changes) => {
          const { origin } = changes;
          const code = instance.getValue();
          onCodeChange(code);
  
          if (origin !== "setValue") {
            socketRef.current.emit(ACTIONS.CODE_CHANGE, {
              roomId,
              code,
            });
          }
        });
      };
  
      init();
    }, []);
  
    
    return <textarea id="realtimeEditor"></textarea>;
}

export default Editor