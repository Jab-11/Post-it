import classes from "./styles.css";

import Banner from "./Banner";


export default function Login(){
    return (
        <div className={classes.container}>
            <div className="banner">
              <Banner />
            </div>
            <div className="login">
              LOGIN
            </div>
        </div>
    );
}