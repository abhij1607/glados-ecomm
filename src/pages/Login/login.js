import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const testCredentials = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const { dispatchUserState } = useAuth();

  const loginRequest = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const loginResponse = await axios.post("/api/auth/login", data);
      dispatchUserState({ type: "LOGIN", payload: loginResponse.data });
      navigate(location?.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper wrapper-signup">
      <main className="align-center">
        <div className="box-shadow form-box auto-container align-center">
          <h1 className="h2">Login</h1>
          <form onSubmit={loginRequest}>
            <div className="input-box">
              <label className="label p-md txt-wt-md" htmlFor="email">
                Enter your email:
              </label>
              <input
                className="input-border input"
                placeholder="Email *"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label className="label p-md txt-wt-md" htmlFor="pwd">
                Password:
              </label>
              <input
                className="input-border input"
                placeholder="Password*"
                type="password"
                id="pwd"
                name="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-checkbox">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="align-right">
                Forgot your Password
              </a>
            </div>
            <button
              className="btn btn-fill btn-primary btn-lg"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
            <button
              className="btn btn-fill btn-primary btn-lg mg-y-base"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setEmail(testCredentials.email);
                setPassword(testCredentials.password);
              }}
            >
              Fill in test credentials
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Login };
