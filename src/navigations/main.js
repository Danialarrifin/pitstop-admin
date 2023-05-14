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
import ProfileScreen from '../screen/Profile';
import ChangePasswordScreen from '../screen/ChangePassword'
import ForgotPasswordScreen from '../screen/ForgotPassword'
import ResetPasswordScreen from '../screen/ResetPassword'





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
            <Route path={PATH_HOME.profile} element={<ProfileScreen />} />
            <Route path={PATH_AUTH.changepassword} element={<ChangePasswordScreen />} />
            <Route path={PATH_AUTH.forgotpassword} element={<ForgotPasswordScreen />} />
            <Route path={PATH_AUTH.resetpassword} element={<ResetPasswordScreen />} />

           
           
            {/* } */}
        </Routes>
    )
}

export default app;