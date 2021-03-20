import { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleGithubSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" }};

  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        handleResponse(res, true);
    })
  }
  const githubSignIn = () => {
    handleGithubSignIn()
    .then(res => {
        handleResponse(res, true);
    })
  }
  const fbSignIn = () =>{
    handleFbSignIn()
    .then(res => {
        handleResponse(res, true);
    })
  }
  const signOut = () => {
    handleSignOut()
    .then(res => {
        handleResponse(res, false);
    })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }
  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){ 
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
            handleResponse(res, true);
        })
    }
    if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            handleResponse(res, true);
        })
    }
    e.preventDefault();
  }

  return (
    <div style={{width:'500px',marginLeft:'400px',textAlign:'center'}}>
        <div style={{border:'1px solid gray'}}>
            {
               newUser ? <h1>Create an account</h1> : <h1>Login</h1>
            }
            <br/>
            <form onSubmit={handleSubmit}>
                {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your name"/>}
                <br/><br/>
                <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
                <br/><br/>
                <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
                <br/><br/>
                {newUser && <input type="password" name="confrimPassword" onBlur={handleBlur} placeholder="Confrim Your Password" required/>}
                <br/><br/>
                <input type="submit" value={newUser ? 'Create an account' : 'Login'}/>
                <br/><br/>
                {
                    newUser ? <p>Already have an account?<Link to="/login" onClick={() => setNewUser(!newUser)}>Login</Link></p>:
                    <p>Don’t have an account?<Link  to="/login" onClick={() => setNewUser(!newUser)}>Create an account</Link></p>
                }
                <br/><br/>
            </form>
        </div>
        <br/><br/>
        <button onClick={googleSignIn}>Continue with Google</button>
        <br/><br/>
        <button onClick={githubSignIn}>Continue with Github</button>
        <br/><br/>
        <button onClick={fbSignIn}>Continue with Facebook</button>

    </div> 
  );
}

export default Login;
