import './App.css';

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route } from 'react-router-dom'
import Home from './page/Home';
import RootLayout from './components/RootLayout';
import Task from './page/Task';
import Report from './page/Report';
import Profile from './page/Profile';
import Dashboard from './page/Dashboard';
import Users from './page/Users';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/task' element={<Task/>} />
        <Route path='/report' element={<Report/>} />
        <Route path='/profile' element={<Profile/>} />
      </Route>
    )
      )
  return (
   <>
   <RouterProvider router={router}/>
   
   </>
  );
}

export default App;
