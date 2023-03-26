import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const client = axios.create({
  baseURL: "http://localhost:8000/projects",
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access')}`,
    'Accept': 'application/json'
  }
});


const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client.get().then((response) => {
       setProjects(response.data);
    });
 }, []);

  return (
    <div className='grid grid-cols-4 gap-4 flex justify-center'>
      {projects.map((project) =>{
        return (
          <div key="{project.slug}">
              <Link to={project.slug}>
            <button className='p-6 mx-3 max-w-sm mx-auto rounded-2xl shadow-lg flex items-center space-x-4 grid grid-cols-1 bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
              <div className='text-xl font-bold text-black'>{project.name}</div>
                <p className='text-white-500'>Date_Created: {project.created_at}</p>
                <p className='text-white-500'>Date_Modified: {project.modified_at}</p>
              </button>
              </Link>
              </div>
      )})}
    </div>


  )
}

export default Project
