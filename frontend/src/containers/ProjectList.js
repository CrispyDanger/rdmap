import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { load_projects } from "../actions/projects"
import { Blocks } from "react-loader-spinner"

// const client = axios.create({
//   baseURL: "http://localhost:8000/projects",
//   headers:{
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${localStorage.getItem('access')}`,
//     'Accept': 'application/json'
//   }
// });


const Project = () => {
  const loading = useSelector((state) => state.projects.loading)
  const result = useSelector((state) => state.projects.projects)
  // result.load_projects()
  const [projects, setProjects] = useState(result);
  // const dispatch = useDispatch()


  useEffect(() => {

  }, [])

  // setProjects(result)



//FIX PAGE RELOAD
  console.log("Projects: ", projects)
  console.log('loading?', loading)

  // setProjects(result)


  return (
    <div className='grid grid-cols-4 gap-4 flex justify-center'>
      {loading ? <div className='justify-center'><Blocks /></div> : projects.map((project) =>{
        return (
          <div key={project.id}>
              <Link to={`${project.slug}/board/tasks`}>
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

const mapStateToProps = state => {
  return {result: state.projects.projects,
          loading: state.projects.loading
        }
}



export default connect(mapStateToProps, {load_projects})(Project);
