import './App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Home from './page/Home';
import RootLayout from './components/RootLayout';
import Task, { loader as TaskLoader } from './page/Task';
import Report, { loader as ReportLoader } from './page/Report';
import Profile from './page/Profile';
// import Dashboard from './page/Dashboard';
import Users, { loader as UserLoader } from './page/Users';
import Device from './page/Device';
import Department from './page/Department';

import CreateTask, { action as TaskAction } from './components/CreateTask';
// import TaskById, { } from './page/TaskById';
import TaskLayout from './components/TaskLayout';
import Error from './page/Error';
import EditTask, { loader as TaskIdLoader, action as EditAction } from './components/EditTask';
import CreateReport, { action as ReportAction } from './page/CreateReport';
import ReportLayout from './components/ReportLayout';
import EditReport, { loader as ReportIdLoader, action as EditReportAction } from './components/EditReport';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='/users' element={<Users />} loader={UserLoader} />

        <Route path='/task' element={<TaskLayout />}  >
          <Route index element={<Task />} loader={TaskLoader} />
          <Route path=':id' element={<EditTask />} loader={TaskIdLoader} action={EditAction} />
          <Route path='create-task' element={<CreateTask />} action={TaskAction} />
        </Route>

        <Route path='/report' element={<ReportLayout />}>
          <Route index element={<Report />} loader={ReportLoader} />
          <Route path=':id' element={<EditReport/>} loader={ReportIdLoader} action={EditReportAction}/>
          <Route path='create-report' element={<CreateReport />} action={ReportAction} />
        </Route>

        {/* <Route path='/edit-task' element={<EditTaskTask />} /> */}


        <Route path='/profile' element={<Profile />} />
        <Route path='/device' element={<Device />} />
        <Route path='/department' element={<Department />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
