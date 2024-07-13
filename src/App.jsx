
// Just an Intro:
// import React from 'react'
// const App = () => {
//   const name = 'Prajwal';
//   const x = 10;
//   const y = 7388;

//   const l = ["Prajwal","Mike","Sara"];
//   const loggedIn = true;
//   const styles = {
//     color: 'red',
//     fontSize: '55px'
//   }

//   return (
//   <>
//     <div classNameName='text-5xl'>App</div>
//     <p style={styles}>Hello {name}</p>
//     <p> The sum of {x} and {y} is {x+y}</p>
    
//     {loggedIn && <h1>Hello Guys</h1>}
//     <ul>
//       {l.map((l,idx)=> 
//       <li key={l}>{l}</li>
//     )}
//     </ul>
//   </>
//   )
  
// };

// export default App;

import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobPage, {jobLoder} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {
  const addJob = async (newJob)=>{
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  };

  const deleteJob = async(id)=>{
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    });
    return;
  }

  const updateJob = async(job)=>{
    const res = await fetch(`/api/jobs/${job.id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path = '/' element={<MainLayout/>}>
        <Route index element={<Home/>}/> 
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path= '/jobs/:id' element = {<JobPage deleteJob={deleteJob}/>} loader={jobLoder}/>
        <Route path='/edit-job' element = {<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoder}/>
        <Route path='*' element={<NotFound/>}/>
    </Route>
    )
  );
  
  return <RouterProvider router={router}/>;

};

export default App;



