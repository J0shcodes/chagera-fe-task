import classes from './css/Auth.module.css'
import authenticate from './service/authentication';

const Auth = () => { 

  const handleOnClick = () => {
    authenticate();
  }

  return (
    <>
      <div className={classes.background}>
        <div className={classes.shape}></div>
        <div className={classes.shape}></div>
      </div>

      <div className={classes.auth}>
          <h1 style={{color: "#fff"}}>Login To View Your Repository</h1>
          <button onClick={() => handleOnClick()}>Login to your GitHub account</button>
      </div>
    </>
  );
};

export default Auth;
