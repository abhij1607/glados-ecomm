import "./login.css";
const Login = () => {
  return (
    <div className="wrapper wrapper-signup">
      <main className="align-center">
        <div className="box-shadow form-box auto-container align-center">
          <h1 className="h2">Login</h1>
          <form action="#">
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
