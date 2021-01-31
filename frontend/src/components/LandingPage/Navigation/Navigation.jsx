import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { LoginForm, SignupForm } from "../../Forms";

import * as SessionActions from "../../../store/reducers/session";
import * as UserActions from "../../../store/reducers/userInfo";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    if (sessionUser) {
      dispatch(UserActions.getUserInfo(sessionUser.id));
    }
  }, [dispatch, sessionUser]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(SessionActions.logout());
    dispatch(UserActions.removeUserInfo());
    history.push("/");
  };

  const login = async (e) => {
    e.preventDefault();
    await dispatch(
      SessionActions.login({ credentials: "demo", password: "password" })
    );
    await dispatch(UserActions.getUserInfo(1));
    history.push("/");
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="text-accentOne text-xl flex p-2 pl-3">
        <div>
          <button onClick={logout}>Log Out</button>
        </div>
        <p className="pl-2"> | </p>
        <div className="pl-2">
          <Link to="/home">Home</Link>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="text-accentOne text-xl flex p-2 pl-3">
        <div>
          <LoginForm />
        </div>

        <p className="pl-2"> | </p>

        <div className="pl-2">
          <SignupForm />
        </div>

        <p className="pl-2"> | </p>

        <div className="pl-2">
          <button onClick={login}>Demo User</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary shadow-custom-shadow">
      <ul>
        <li>{isLoaded && sessionLinks}</li>
      </ul>
    </div>
  );
}

export default Navigation;
