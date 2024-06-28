import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import classes from './MainHeader.module.css';
import { doSignOut } from "../authFirebase/auth";


function MainHeader() {
  const navigate = useNavigate()

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <MdMessage />
          Post-it
        </h1>
        <p>
          <Link to="/posts/create-post" className={classes.button}>
            <MdPostAdd size={18} />
            New Post
          </Link>
          <button
            className={`${classes.button} ${classes.accentButton}`}
            onClick={() => { doSignOut().then(() => { navigate('/login') }) }}>Log out</button>
        </p>
      </header>
    </>
  );
}

export default MainHeader;