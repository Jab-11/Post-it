import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './HomePage.module.css'; // Assuming you have a CSS module for this component

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={() => navigate('/login')}>Login</button>
      <button className={classes.button} onClick={() => navigate('/signup')}>Sign Up</button>
    </div>
  );
};

export default HomePage;
