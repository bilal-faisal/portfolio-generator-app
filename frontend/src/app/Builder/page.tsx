"use client";
import "./style.scss";
import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import axios from "axios";
import "grapesjs/dist/css/grapes.min.css";
import gjsPresetWebpage from "grapesjs-preset-webpage";

const page = () => {
  const [user, setUser] = useState<any>(null);
  const [projects, setProjects] = useState<any>(null);
  const [myeditor, setMyEditor]: any = useState(null);
  const [saveBtn, setsaveBtn] = useState();

  useEffect(() => {
    const storedValue = localStorage.getItem("user");
    const parsedValue = storedValue ? JSON.parse(storedValue) : null;
    console.log(parsedValue._id);
    setUser(parsedValue);
  }, []);

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

  const SaveFunction = async () => {
    const projectData = editor?.store();
    console.log(projectData);
    // editor.loadProjectData(projects[projects.length - 1]);

    // const loadedProjectData = editor.load((projects[projects.length - 1]));
    // console.log(loadedProjectData);

    console.log("Builder Page......");

    try {
      await axios.post("http://localhost:1234/api" + `/auth/arrayItems/${user._id}`, {
        assets: "Null",
        components: "Null",
        css: projectData.css,
        html: projectData.html,
        styles: "Null",
      }).then((response) => {
        if (response.status == 200) {
          alert("Your Project Has been Stored.");
          location.reload();
        } else {
          alert("Fail");
        }
      });
    } catch (err) {
      alert(err);
      // setError(err);
    }


    // console.log(projectData.html);
    // console.log(projectData.css);
    editor?.load();
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (user && user._id) { // Check if user exists and has _id property
          const response = await axios.get(`http://localhost:1234/api/auth/arrayItems/${user._id}`);
          // console.log(response);
          // setProjects(response.data);
          console.log(response.data[response.data.length - 1]);
          // alert("Get Success");
        } else {
          alert("User not found");
        }
      } catch (err) {
        alert(err);
      }
    }

    if (user !== null) {
      fetchProjects();
    }
  }, [user]);



  return (
    <div className="App">
      <header style={{ alignItems: 'center', display: 'flex', color: 'black', zIndex: 100000 }}>
        {/* <button >logo</button> */}
        <button style={{ backgroundColor: "#000", color: "#fff", margin: ".5rem 1rem", borderRadius: "4px", padding: ".3rem .3rem" }} onClick={() => SaveFunction()} >Save</button>
      </header>
      <div id="editor">
      </div>
    </div>
  );
};
export default page;