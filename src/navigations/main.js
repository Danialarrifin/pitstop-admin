import { Routes, Route } from 'react-router-dom';
import { PATH_AUTH, PATH_HOME } from './path';
import LoginScreen from '../screen/Login';
import RegisterScreen from '../screen/Register';
import DashboardScreen from '../screen/Dashboard';
import UserScreen from '../screen/User';
import VehicleScreen from '../screen/Vehicle';
import AppointmentScreen from '../screen/Appointment';
import WorkshopScreen from '../screen/Workshop';
import ReportScreen from '../screen/Report';
import ErrorScreen from '../screen/Error';
import SidebarScreen from '../screen/Sidebar';
import NavbarScreen from '../screen/Navbar'




const app = () => {
    const isLoggedIn = false;

    return (
        <Routes>
            {/* {isLoggedIn ? */}

            <Route path={PATH_AUTH.login} element={<LoginScreen />} />
            <Route path={PATH_AUTH.register} element={<RegisterScreen />} />
            <Route path={PATH_AUTH.error} element={<ErrorScreen />} />
            <Route path={PATH_HOME.dashboard} element={<DashboardScreen />} />
            <Route path={PATH_HOME.user} element={<UserScreen />} />
            <Route path={PATH_HOME.vehicle} element={<VehicleScreen />} />
            <Route path={PATH_HOME.appointment} element={<AppointmentScreen />} />
            <Route path={PATH_HOME.workshop} element={<WorkshopScreen />} />
            <Route path={PATH_HOME.report} element={<ReportScreen />} />
            <Route path={PATH_HOME.sidebar} element={<SidebarScreen />} />
            <Route path={PATH_HOME.navbar} element={<NavbarScreen />} />
           
        

            {/* } */}
        </Routes>
    )
}

export default app;