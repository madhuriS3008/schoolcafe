import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";

const MyAccount = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginData = (e) => {
    if (e.target.id === "username") {
      setData((prevState) => {
        return { ...prevState, username: e.target.value };
      });
    }
    if (e.target.id === "password") {
      setData((prevState) => {
        return { ...prevState, password: e.target.value };
      });
    }
  };

  const submitLogin = (e) => {
    e.preventDefault();
  };

  const submitBack = () => {
    navigate("/");
  };

  return (
    <div className="myaccount">
      <h1>Login</h1>
      <form className="loginForm">
        <div className="formData">
          <label id="username">Username</label>
          <input
            type="text"
            id="username"
            value={data.username}
            onChange={loginData}
          />
        </div>
        <div className="formData">
          <label id="password">Password</label>
          <input
            type="password"
            id="password"
            value={data.password}
            onChange={loginData}
          />
        </div>
        <ul>
          <li>
            <Link to="/myaccount/forgot">I forgot my password.</Link>
          </li>
          <li>
            <Link to="/myaccount/unlock">I need to unlock my account.</Link>
          </li>
          <li>
            <Link to="/myaccount/register">
              I need to register as a Family Portal user.
            </Link>
          </li>
        </ul>
        <button
          onClick={submitBack}
          type="button"
          className="btn btn-outline-secondary m-3"
        >
          Back
        </button>
        <Button onSubmit={submitLogin}>Submit</Button>
      </form>
    </div>
  );
};

export default MyAccount;
