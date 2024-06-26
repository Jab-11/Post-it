import "./styles.css";
import "./background.css";
import Banner from "./Banner";
import Login from "./Login";
import Modal from "../../components/Modal";

function LoginPage(){
    return(
        <Modal>
          <div className="container">
              <div className="banner p4">
                <Banner />
              </div>
              <div className="login">
                <Login />
              </div>
          </div>
        </Modal>
    );
}

export default LoginPage;