import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashboardWrapper from  "./components/Dashboard/Dashboard";
import Analytics from './analytics/Analytics'
import Countries from "./base_table/Countries";
import State from './base_table/State'
import Roles from "./base_table/roles";
import MainCategories from "./base_table/MainCategories";
import Grievance from "./grievance/Grievance";
import DashboardData from "./pages/DashboardData";
import RegisteredGrievance from './grievance/register-grievance/RegisteredGrievance'
import EditProfile from "./pages/edit-profile/EditProfile";
import ChangePassword from "./pages/change-password/ChangePassword";
import SubMainCategories from "./base_table/Sub-MainCategories";
import User from "./base_table/User";
import AllGrievances from './base_table/GrievanceData'

function AdditionalRoutes() {
  return (
    <>
      <Router>
        <DashboardWrapper>
          <Routes> 
            {/* Dashboard */}
            <Route path="/dashboard/nodal-officer" element={<DashboardData/>}/>
            <Route path='/dashboard/joint-secretary' element={<DashboardData/>}/>s
            <Route path='/dashboard/organization-admin' element={<DashboardData/>}/>
            <Route path='/dashboard/department-admin' element={<DashboardData/>}/>
            <Route path='/dashboard/user' element={<DashboardData/>}/>

            {/* Analytics */}
            <Route path="/dashboard/analytics/nodal-officer" element={<Analytics/>}/>
            <Route path='/dashboard/analytics/joint-secretary'/>
            <Route path='/dashboard/analytics/additional-secretary'/>
            <Route path='/dashboard/analytics/secretary'/>
            <Route path='/dashboard/analytics/department-admin'/>

            {/* Base Table */}
            <Route path='/dashboard/base_table/countries' element={<Countries/>}/>
            <Route path='/dashboard/base_table/state' element={<State/>}/>
            <Route path='/dashboard/base_table/roles' element={<Roles/>}/>
            <Route path='/dashboard/categories/main-categories' element={<MainCategories/>}/>
            <Route path='/dashboard/categories/sub-main-categories' element={<SubMainCategories/>}/>
            <Route path='/dashboard/base_table/total-grievance' element={<AllGrievances/>}/>
            <Route path='/dashboard/base_table/solved-grievance'/>
            <Route path='/dashboard/base_table/unsolved-grievance'/>

            {/* Lodge Grievance */}
            <Route path="/dashboard/lodge-grievance/user" element={<Grievance/>}/>

            {/* Solved Grievance */}
            <Route path='/dashboard/solved-grievance/nodal-officer'/>
            <Route path='/dashboard/solved-grievance/joint-secretary'/>
            <Route path='/dashboard/solved-grievance/additional-secretary'/>
            <Route path='/dashboard/solved-grievance/secretary'/>
            <Route path='/dashboard/solved-grievance/department-admin'/>
     
            {/* Registered Grievance */}
            <Route path='/dashboard/grievance-registered/user' element={<RegisteredGrievance/>}/>

            {/* Unsolved Grievance */}
            <Route path='/dashboard/unsolved-grievance/nodal-officer'/>
            <Route path='/dashboard/unsolved-grievance/joint-secretary'/>
            <Route path='/dashboard/unsolved-grievance/additional-secretary'/>
            <Route path='/dashboard/unsolved-grievance/secretary'/>
            <Route path='/dashboard/unsolved-grievance/department-admin'/>

            {/* Edit Profile */}
            <Route path='/dashboard/edit-profile/nodal-officer'/>
            <Route path='/dashboard/edit-profile/user' element={<EditProfile/>}/>

            {/* Change Password */}
            <Route path='/dashboard/change-password/user' element={<ChangePassword/>}/>

            {/* User Data */}
            <Route path='/dashboard/user/nodal-officer' element={<User/>}/>
            <Route path='/dashboard/user/joint-secretary' />
            <Route path='/dashboard/user/additional-secretary' />
            <Route path='/dashboard/user/secretary' />

            {/* Change Password */}
            <Route path='/dashboard/change-password/nodal-officer'/>
            <Route path='/dashboard/change-password/joint-secretary'/>
            <Route path='/dashboard/change-password/additional-secretary'/>
            <Route path='/dashboard/change-password/secretary'/>
            <Route path='/dashboard/change-password/user'/>

          </Routes>
        </DashboardWrapper>
      </Router>
    </>
  );
}

export default AdditionalRoutes;