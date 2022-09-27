import logo from './logo.svg';

import './App.css'; 
import {Routes,Route} from "react-router-dom";
function App() {
 
  return (
   <div class="body">
         <div class="container" id="con_container">
<div class="from-container sign-up-container">
 <div class="form">

 
    <h1>
        Create Account
    </h1>
    <div class="social-container">
        <a href="#" class="social">
            <i class="fa fa-facebook-f"></i>
        </a>
        <a href="#" class="social">
            <i class="fa fa-google-plus"></i>
        </a>
        <a href="#" class="social">
            <i class="fa fa-linkedin"></i>
        </a>
    </div>
    <span>or use your email for registration</span>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button  >Sign up</button>
 
        </div>
    </div>
    <div class="from-container sign-in-container" id="Signincontainer">
 <div class="form">

 
    <h1>
        Sign in
    </h1>
    <div class="social-container">
        <a href="#" class="social">
            <i class="fa fa-facebook-f"></i>
        </a>
        <a href="#" class="social">
            <i class="fa fa-google-plus"></i>
        </a>
        <a href="#" class="social">
            <i class="fa fa-linkedin"></i>
        </a>
    </div>
    <span>or use your account</span> 
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button  >Sign in</button>
 
        </div>
    </div>
    <div class="overlay-container">
      <div class="overlay">
<div class="overlay-panel overlay-left">
<h1>Welcome to React</h1>
<button  onClick={Clickevent} class="press" id="signin">
Sign In
</button>
</div>

<div class="overlay-panel overlay-right">
<h1>Welcome to web app</h1>
<button onClick={Clickevent}  class="press" id="signup">
Sign up
</button>
</div>
      </div>
    </div>
    </div>
    </div>
  );
}

function Clickev1ent()
{
  
  //alert("hi");
  //const signinbutton=document.getElementById("signin");
 // const signupbutton=document.getElementById("signup");
 // const container=document.getElementById("container");
 // document.getElementById("signin").addEventListener('click',() => alert("Hi user!"));
  //signinbutton.addEventListener('click',() => alert("Hi user!"));
  //signinbutton.removeEventListener('click', () => alert("Hi user!"));
  //signupbutton.addEventListener('click',()=>{
  //  container.classList.add("right-panel-active");
 // })
 // signinbutton.addEventListener('click',()=>{
 ///   container.classList.remove("right-panel-active");
 // })
}
function Clickevent()
{
  debugger
  const signinbutton=document.getElementById("signin");
  const signupbutton=document.getElementById("signup");
  const container=document.getElementById("con_container"); 


  //container.classList.remove("right-panel-active");
  signupbutton.addEventListener('click',()=>{
     container.classList.add("right-panel-active");
    })
    signinbutton.addEventListener('click',()=>{
      container.classList.remove("right-panel-active");
   })
 
}
 
export default App;
