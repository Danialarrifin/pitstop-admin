import { Routes, Route } from 'react-router-dom';
import { PATH_AUTH, PATH_HOME } from './path';
import LoginScreen from '../screen/Login';
import RegisterScreen from '../screen/Register';


const app = () => {
    const isLoggedIn = false;

    return (
        <Routes>
            {/* {isLoggedIn ? */}

            <Route path={PATH_AUTH.login} element={<LoginScreen />} />
            <Route path={PATH_AUTH.register} element={<RegisterScreen />} />


            {/* } */}
        </Routes>
    )
}

export default app;