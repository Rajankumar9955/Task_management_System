

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import UserCreate from "./Pages/CreateUser"
import Login from "./Pages/Login"

import AssignTask from "./Pages/AssignTask"
import TaskStatus from "./Pages/TaskStatus"
import EmployeeDashboard from "./Pages/EmployeeDashboard"
import TaskShow from "./Pages/TaskShow"
import EmpProfile from "./Pages/EmpProfile"
import AdminDashboard from "./Pages/AdminDashboard"
import ResetEmployeePass from "./Pages/ResetEmployeePass"
import AdminProfile from "./Pages/AdminProfile"
import TaskFullyCompleted from "./Pages/TaskFullyCompleted"
import TaskPartiallyCompleted from "./Pages/TaskPartiallyCompleted"
import TaskNotCompleted from "./Pages/TaskNotCompleted"




const App=()=>{
  return(
    <>
    <BrowserRouter>
                    <Routes>
                          <Route path="/" element={<Layout/>}>
                            <Route index element={<Login/>}/>
                            <Route path="login" element={<Login/>}/>                            
                    

                                 <Route path="admindashboard" element={<AdminDashboard/>}>
                                    <Route index element={<AdminProfile/>}/>
                                    <Route path="adminprofile" element={<AdminProfile/>}/>
                                    <Route path="userscreate" element={<UserCreate/>}/>
                                    <Route path="assigntask" element={<AssignTask/>}/>
                                    <Route path="taskstatus" element={<TaskStatus/>}/>
                                    <Route path="taskfullycompleted" element={<TaskFullyCompleted/>}/>
                                    <Route path="taskpartiallycompleted" element={<TaskPartiallyCompleted/>}/>
                                    <Route path="tasknotcompleted" element={<TaskNotCompleted/>}/>
                                 </Route>

                                 <Route path="empdashboard" element={<EmployeeDashboard/>}>
                                          <Route index element={<EmpProfile/>}/>
                                          <Route path="empprofile" element={<EmpProfile/>}/>
                                          <Route path="taskshow" element={<TaskShow/>}/>
                                          <Route path="resetemppass" element={<ResetEmployeePass/>}/>
                                 </Route>
                            
                          </Route>
                    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App