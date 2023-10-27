import './App.css';

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route } from 'react-router-dom'
import Home from './page/Home';
import RootLayout from './components/RootLayout';
import Task, {loader as TaskLoader} from './page/Task';
import Report, {loader as ReportLoader} from './page/Report';
import Profile from './page/Profile';
// import Dashboard from './page/Dashboard';
import Users,{loader as UserLoader} from './page/Users';
import Device from './page/Device';
import Department from './page/Department';
import { loader } from './page/Task';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/users' element={<Users/>}  loader={UserLoader}/>
        <Route path='/task' element={<Task/>} loader={TaskLoader} />
        <Route path='/report' element={<Report/>} loader={ReportLoader} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/device' element={<Device/>} />
        <Route path='/department' element={<Department/>} />
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
