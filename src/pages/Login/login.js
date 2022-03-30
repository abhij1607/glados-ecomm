import "./login.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const loginRequest = async (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
    try {
      const loginResponse = await axios.post("/api/auth/login", data);
      console.log(loginResponse);
      setResponse(loginResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {});

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
              <a href className="align-right">
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
          </form>
        </div>
      </main>
    </div>
  );
};

export { Login };
