import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../../store/reducers/session";

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [credentials, setCredentials] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(sessionActions.login({ credentials, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
    history.push("/");
  };

  return (
    <form
      id="login-form"
      className="h-60 flex bg-secondTransparent flex-col content-center justify-center"
      onSubmit={handleSubmit}
    >
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <input
        className="bg-secondTransparent text-2xl text-center pb-5 pt-5 text-accentOne focus:outline-teal"
        style={{ width: "400px" }}
        type="text"
        value={credentials}
        onChange={(e) => setCredentials(e.target.value)}
        placeholder="Username/Email..."
        required
      />
      <input
        className="bg-secondTransparent text-2xl text-center mb-3 pb-5 pt-5 text-accentOne
        focus:outline-teal"
        style={{ width: "400px" }}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
        required
      />
      <div className="bg-mainTransparent transition duration-150 hover:ease-in-out transform hover:-translate-y-0.5 text-accentThree text-lg w-20 h-12 m-auto rounded-md text-center p-2 shadow">
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}

export default LoginForm;
