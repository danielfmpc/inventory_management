const express = require('express');
const app = express();
const { uuid } = require('uuidv4');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const projects = [];

function logRequest(request, response, next){
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`
  console.log(logLabel);
  return next();
}

app.use(logRequest);
app.use('/projects/:id',logRequest);

app.get('/projects', (request, response)=>{
  const { title } = request.params;
  const results = title 
  ? projects.filter(project => project.title.includes(title))
  : projects;

  return response.json(results);
});

app.post('/projects', (request, response)=>{
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner};

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response)=>{
  const {id} = request.params;
  const { title, owner } = request.body;


  const projectIndex = projects.findIndex(project => project.id === id);
  
  if(projectIndex<0){
    return response.status(400).json({error: 'project not found'});
  }

  const project = {
    id,
    title,
    owner
  }

  projects[projectIndex] = project;

  response.json(project);
});

app.listen(3000, ()=>{
  console.log('🚀UP server backend');
})