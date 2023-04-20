import { Routes, Route } from 'react-router-dom';
import { PATH_AUTH, PATH_HOME } from './path';
import LoginScreen from '../screen/Login';
import RegisterScreen from '../screen/Register';
import DashboardScreen from '../screen/Dashboard'


const app = () => {
    const isLoggedIn = false;

    return (
        <Routes>
            {/* {isLoggedIn ? */}

            <Route path={PATH_AUTH.login} element={<LoginScreen />} />
            <Route path={PATH_AUTH.register} element={<RegisterScreen />} />
            <Route path={PATH_HOME.dashboard} element={<DashboardScreen />} />

            {/* } */}
        </Routes>
    )
}

export default app;