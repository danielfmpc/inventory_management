import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import api from './services/api';
import './App.css';
// import background from './assets/background.jpg';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    api.get('projects').then(
      response=>{
        setProjects(response.data);
      }
    );
  },[]);

  async function handleAddProjects() {
    const response = await api.post('projects',
      {
        title: `Novo projeto ${Date.now()}`,
        owner: "Daniel" 
      }
    );
    const project = response.data;

    setProjects([...projects, project]);

    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      {/* <img src={background} /> */}

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="submit" onClick={handleAddProjects}>Add projects</button>   
    </>
  );
}

export default App;