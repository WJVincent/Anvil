import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/reducers/session";

const UserSignupForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form
      className="h-80 bg-secondTransparent flex flex-col content-center justify-center font-jetbrains"
      onSubmit={handleSubmit}
    >
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <input
        type="text"
        className="bg-secondTransparent text-2xl text-left pl-3 pb-5 pt-5 text-accentOne outline-none placeholder-accentOne"
        value={email}
        style={{ width: "400px" }}
        onChange={(e) => setEmail(e.target.value)}
        placeholder=" => email"
        required
      />
      <input
        type="text"
        value={username}
        style={{ width: "400px" }}
        className="bg-secondTransparent text-2xl text-left pl-3 pb-5 text-accentOne outline-none placeholder-accentOne"
        onChange={(e) => setUsername(e.target.value)}
        placeholder=" => username"
        required
      />
      <input
        type="password"
        value={password}
        style={{ width: "400px" }}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-secondTransparent text-2xl text-left pl-3 pb-5  text-accentOne outline-none placeholder-accentOne"
        placeholder=" => password"
        required
      />
      <input
        type="password"
        value={confirmPassword}
        style={{ width: "400px" }}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="bg-secondTransparent text-2xl text-left pl-3 pb-5  text-accentOne outline-none placeholder-accentOne"
        placeholder=" => confirm password"
        required
      />
      <div className="bg-accentThree transition duration-150 hover:ease-in-out transform hover:-translate-y-0.5 text-main text-xl font-bold w-25 h-12 m-auto rounded-md text-center p-2 shadow">
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default UserSignupForm;
