import { Outlet, Navigate } from 'react-router-dom';
import MainHeader from "../components/MainHeader";
import { useAuth } from '../contexts/authContext/index';

function RootLayout() {
    const { userLoggedIn } = useAuth();

    return (
        <>
            {userLoggedIn ? (
                <>
                    <MainHeader />
                    <Outlet />
                </>
            ) : (
                <Navigate to={'/login'} replace={true} />
            )}
        </>
    );
}

export default RootLayout;