import {Outlet} from 'react-router-dom';

import MainHeader from "../components/MainHeader";
// import Modal from "../components/Modal";

function RootLayout(){
    return(
        <>
            <MainHeader />
            {/* <Modal> */}
                <Outlet />
                {/* <Login /> */}
            {/* </Modal> */}
        </>
    );
}

export default RootLayout;