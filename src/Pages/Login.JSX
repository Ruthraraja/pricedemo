import './App.css'; 

const Login=()=>{
    return( 
        <div>
<div className="body">
            <div className="container" id="con_container">
                <div className="from-container sign-up-container">
                    <div className="form">
                        <h1>
                            Create Account
                        </h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <i className="fa fa-facebook-f" />
                            </a>
                            <a href="#" className="social">
                                <i className="fa fa-google-plus" />
                            </a>
                            <a href="#" className="social">
                                <i className="fa fa-linkedin" />
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign up</button>
                    </div>
                </div>
                <div className="from-container sign-in-container" id="Signincontainer">
                    <div className="form">
                        <h1>
                            Sign in
                        </h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <i className="fa fa-facebook-f" />
                            </a>
                            <a href="#" className="social">
                                <i className="fa fa-google-plus" />
                            </a>
                            <a href="#" className="social">
                                <i className="fa fa-linkedin" />
                            </a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign in</button>
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome to React</h1>
                            <button   className="press" id="signin">
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome to web app</h1>
                            <button   className="press" id="signup">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        

    )
}
export default Login;
 
 