import "./login.css";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";

const testCredentials = {
  email: "adarshbalika@gmail.com",
  password: "adarshbalika",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatchUserState, login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="wrapper wrapper-signup">
      <main className="align-center">
        <div className="box-shadow form-box auto-container align-center">
          <h1 className="h2">Login</h1>
          <form onSubmit={handleLogin}>
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
