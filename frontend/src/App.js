import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './components/style/Theme';
import GolbalStyle from './components/style/Global';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Home from './page/Home';
import RootLayout from './components/RootLayout';

import TaskLayout from './components/TaskLayout';
import Task, { loader as TaskLoader } from './page/Task';
import EditTask, { loader as TaskIdLoader, action as EditAction } from './components/EditTask';
import CreateTask, { action as TaskAction } from './components/CreateTask';

import ReportLayout from './components/ReportLayout';
import Report, { loader as ReportLoader } from './page/Report';
import EditReport, { loader as ReportIdLoader, action as EditReportAction } from './components/EditReport';
import CreateReport, { action as ReportAction } from './page/CreateReport';

import Profile, { loader as ProfileLoader, action as ProfileAction } from './page/Profile';
import Users, { loader as UserLoader } from './page/Users';

import DeviceLayout from './components/DeviceLayout';
import Device, { loader as DeviceLoader } from './page/Device';
import CreateDevice, { action as DeviceAction } from './page/CreateDevice';
import EditDevice, { loader as EditDeviceLoader, action as EditDeviceAction } from './page/EditDevice';

import Department from './page/Department';

// import TaskById, { } from './page/TaskById';
import Error from './page/Error';
import Login, { action as LoginAction } from './page/Login';
import AppLayout from './components/AppLayout';
import UserLayout from './components/UserLayout';
import CreateUser, { action as UserAction } from './page/CreateUser';
import DepartmentLayout from './components/DepartmentLayout';
import ServiceLayout from './components/ServiceLayout';
import Service from './page/Service';
import OutletService from './page/OutletService';
import PublicAddres from './page/PublicAddres';
import Intercom from './page/Intercom';
import Saves from './page/Saves';
import Outlets from './page/Outlets';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AppLayout />}>
        <Route index path='/auth' element={<Login />} action={LoginAction} />


        <Route path='/' element={<RootLayout />} >

          <Route index element={<Home />} />
          {/* <Route path='auth' element={<Users />} loader={UserLoader} /> */}

          <Route path='maintenance' element={<TaskLayout />}  >
            <Route path='task' element={<Task />} loader={TaskLoader} >
              <Route path=':id' element={<EditTask />} loader={TaskIdLoader} action={EditAction} />
              <Route path='create-task' element={<CreateTask />} action={TaskAction} />
            </Route>

            <Route path='report' element={<Report />} loader={ReportLoader} >
              <Route path=':id' element={<EditReport />} loader={ReportIdLoader} action={EditReportAction} />
              <Route path='create-report' element={<CreateReport />} action={ReportAction} />
            </Route>
          </Route>

          {/* <Route path='report' element={<ReportLayout />}>
            <Route index element={<Report />} loader={ReportLoader} />
            <Route path=':id' element={<EditReport />} loader={ReportIdLoader} action={EditReportAction} />
            <Route path='create-report' element={<CreateReport />} action={ReportAction} />
          </Route> */}


          <Route path='device' element={<DeviceLayout />} >
            <Route index element={<Device />} loader={DeviceLoader} />
            <Route path='publicaddres' element={<PublicAddres />}  />
            <Route path='intercoms' element={<Intercom />}  />
            <Route path='saves' element={<Saves/>}  />
           
           
            <Route path=':id' element={<EditDevice />} loader={EditDeviceLoader} action={EditDeviceAction} />
            <Route path='create-device' element={<CreateDevice />} action={DeviceAction} />
          </Route>

          {/* <Route path='/edit-task' element={<EditTaskTask />} /> */}



          <Route path='users' element={<UserLayout />} >
            <Route index element={<Users />} loader={UserLoader} />
            <Route path='create-user' element={<CreateUser />} action={UserAction} />
            <Route path=':id' element={<Profile />} loader={ProfileLoader} action={ProfileAction} />

          </Route>
          <Route path='department' element={<DepartmentLayout />} >
            <Route index element={<Department />} />
            <Route path='outlet' element={<Outlets />} />
          </Route>
          <Route path='service' element={<ServiceLayout />} >
            <Route index element={<Service />} />
            <Route path='outletservice' element={<OutletService/>}/>
          </Route>
        </Route>
      </Route>
    )
  )
  return (



    <div className='app' >
      {/* <div className='glass'> */}
      <RouterProvider router={router} />
      {/* </div> */}
    </div>



  );
}

export default App;
