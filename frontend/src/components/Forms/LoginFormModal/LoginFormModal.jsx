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
      className="h-60 flex bg-secondTransparent flex-col content-center justify-center font-jetbrains"
      onSubmit={handleSubmit}
    >
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <input
        className="bg-secondTransparent text-2xl text-left pl-3 pb-5 pt-5 text-accentOne outline-none placeholder-accentOne"
        style={{ width: "400px" }}
        type="text"
        value={credentials}
        onChange={(e) => setCredentials(e.target.value)}
        placeholder=" => username || email"
        required
      />
      <input
        className="bg-secondTransparent text-2xl text-left pl-3 mb-3 pb-5 pt-5 text-accentOne
        outline-none placeholder-accentOne"
        style={{ width: "400px" }}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder=" => password"
        required
      />
      <div className="bg-accentThree transition duration-150 hover:ease-in-out transform hover:-translate-y-0.5 text-main text-xl font-bold w-25 h-12 m-auto rounded-md text-center p-2 shadow">
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}

export default LoginForm;
