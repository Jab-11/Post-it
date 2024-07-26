import "./styles.css";
import "./background.css";
import Banner from "./Banner";
import Login from "./Login";

function LoginPage(){
    return(
          <div className="container">
              <div className="page">
                <div className="banner p4">
                  <Banner />
                </div>
                <div className="login">
                  <Login />
                </div>
              </div>
          </div>
    );
}

export default LoginPage;