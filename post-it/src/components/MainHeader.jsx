import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';


function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <MdMessage />
          Post-it
        </h1>
        <p>
          <Link to="/create-post" className={classes.button}>
            <MdPostAdd size={18} />
            New Post
          </Link>
          <button className={`${classes.button} accentButton`}>Log out</button>
        </p>
      </header>
    </>
  );
}

export default MainHeader;