"use client";
import "./style.scss";
import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import gjsPresetWebpage from "grapesjs-preset-webpage";

const page = () => {
  const [myeditor, setMyEditor] :any = useState(null);
  const [saveBtn, setsaveBtn]  = useState();
  const editor = grapesjs.init({
    container: "#editor",
    plugins: [gjsPresetWebpage],
    pluginsOpts: {
      gjsPresetWebpage: {}
    },
    storageManager: {
      type: 'local', // Storage type. Available: local | remote
      autosave: true, // Store data automatically
      autoload: true, // Autoload stored data on init
      stepsBeforeSave: 1, // If autosave is enabled, indicates how many changes are necessary before the store method is triggered
      // ...
      // Default storage options
      options: {
        local: true,
        remote: false,
      }
    },  
  });

   useEffect(() => {    
    setMyEditor(editor);
  }, []);

  const SaveFunction=()=>{
    const projectData = editor?.store();
    console.log(projectData.html);
    console.log(projectData.css);
    editor?.load();
  }

  return (
    <div className="App">
      <header style={{alignItems:'center',display:'flex',color:'black',zIndex:100000}}>
        <button >logo</button>
        <button onClick={()=>SaveFunction()} >Save</button>
      </header>
      <div id="editor">
      </div>
    </div>
  );
};
export default page;