import { Navigate } from 'react-router-dom';
import MainHeader from "../components/MainHeader";
import { useAuth } from '../contexts/authContext/index';

import PostIt from "./PostIt";

function RootLayout() {
    const { userLoggedIn } = useAuth();

    return (
        <>
            {userLoggedIn ? (
                <>
                    <MainHeader />
                    <PostIt/>
                </>
            ) : (
                <Navigate to={'/login'} replace={true} />
            )}
        </>
    );
}

export default RootLayout;