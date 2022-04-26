import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/material.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/night.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

import { Controlled as ControlledEditorComponent } from "react-codemirror2";

const Editor = ({ language, value, setEditorState }) => {
  const themeArray = ["dracula", "material", "mdn-like", "the-matrix", "night"];
  const [theme, setTheme] = useState("the-matrix");
  const handleChange = (editor, data, value) => {
    setEditorState(value);
  };
  return (
    <div className="editor-container">
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="theme">Choose a theme:</label>
        <select
          name="theme"
          onChange={(el) => {
            setTheme(el.target.value);
          }}
        >
          {themeArray.map((theme) => (
            <option key={themeArray.indexOf(theme)} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
      <ControlledEditorComponent
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          mode: language,
          lint: true,
          lineNumbers: true,
          theme: theme,
          autoCloseTags: true,
          autoCloseBrackets: true,
        }}
      />
    </div>
  );
};

export default Editor;
