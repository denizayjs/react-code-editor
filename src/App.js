import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  const [openedEditor, setOpenedEditor] = useState("html");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState(``);
  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        `
      );
    }, 300);
    return () => clearTimeout(timeOut);
  }, [html, css, js]);
  return (
    <div className="app">
      <div className="left-side">
        <p>Welcome to the editor!</p>
        <div className="tab-button-container">
          <Button
            title="HTML"
            onClick={() => {
              onTabClick("html");
            }}
          />
          <Button
            title="CSS"
            onClick={() => {
              onTabClick("css");
            }}
          />
          <Button
            title="Javascript"
            onClick={() => {
              onTabClick("js");
            }}
          />
        </div>
        <div className="editor-container">
          {openedEditor === "html" ? (
            <Editor language="xml" value={html} setEditorState={setHtml} />
          ) : openedEditor === "css" ? (
            <Editor language="css" value={css} setEditorState={setCss} />
          ) : (
            <Editor language="javascript" value={js} setEditorState={setJs} />
          )}
        </div>
      </div>

      <div className="right-side">
        <iframe
          className="frame-box"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
