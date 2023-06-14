"use client";
// import "../style.scss";
import { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import gjsPresetWebpage from "grapesjs-preset-webpage";

const page = () => {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      fromElement: true,
      plugins: [gjsPresetWebpage],
      pluginsOpts: {
        gjsPresetWebpage: {},
      },
    });
    // @ts-ignore
    setEditor(editor);
  }, []);
  //   useEffect(() => {
  // const editor = grapesjs.init({
  //   // Indicate where to init the editor. You can also pass an HTMLElement
  //   container: "#gjs",
  //   // Get the content for the canvas directly from the element
  //   // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  //   fromElement: true,
  //   // Size of the editor
  //   height: "300px",
  //   width: "auto",
  //   // Disable the storage manager for the moment
  //   storageManager: false,
  //   // Avoid any default panel
  //   panels: { defaults: [] },
  // });
  // const editor = grapesjs.init({
  //   container: "#gjs",
  //   fromElement: true,
  //   height: "300px",
  //   width: "auto",
  //   storageManager: false,
  //   style: "body { margin: 0; padding: 0; box-sizing: border-box; }",
  // });

  // const editor = grapesjs.init({
  //   container: "#gjs",
  //   fromElement: true,
  //   height: "300px",
  //   width: "auto",
  //   storageManager: false,
  // });

  // editor.BlockManager.add("my-first-block", {
  //   label: "Header",
  //   content: "<header><h1>Hello World!</h1></header>",
  //   category: "Basic",
  // });
  //   }, []);
  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
};

export default page;
