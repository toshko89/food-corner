import { useState } from "react";
import { register } from "../../services/authService.js";
import emailCheck from "../../utils/emailCheck.js";

export default function Login() {

  const [error, setError] = useState(null);

  async function signIn(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('repass');

    try {
      const userData = await register(email, password, rePass);
      console.log(userData);
    } catch (error) {
      console.log(error.message);
      setError(error.message)
    }
  }


  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="px-5 col-md-6 ml-auto">
          <div className="px-5 col-10 mx-auto">
            <h2 className="text-dark my-0">Welcome Back</h2>
            <p className="text-50">Sign in to continue</p>
            {error && <div className="error-container" role="alert"><p>{error}</p></div>}
            <form className="mt-5 mb-4" onSubmit={signIn}>
              <div className="form-group">
                <label for="exampleInputEmail1" className="text-dark">Email</label>
                <input type="email" name="email" placeholder="Enter Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  onBlur={() => setError(null)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="text-dark">Password</label>
                <input type="password" name="password" placeholder="Enter Password" className="form-control" id="exampleInputPassword2"
                  onBlur={() => setError(null)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="text-dark">Repeat Password</label>
                <input type="password" name="repass" placeholder="Enter Password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button className="btn btn-primary btn-lg btn-block">SIGN IN</button>
            </form>
            <div className="d-flex align-items-center justify-content-center">
              <a href="/#">
                <p className="text-center m-0">Don't have an account? Sign up</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}