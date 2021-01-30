import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as SessionActions from "./store/reducers/session";
import * as UserActions from "./store/reducers/userInfo";
import { Navigation, HomePage, LandingPage } from "./components";

function App() {
  const dispatch = useDispatch();
  const [userLoaded, setUserLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    dispatch(SessionActions.restoreUser()).then(() => setUserLoaded(true));
    dispatch(UserActions.restoreUserInfo()).then(() => setContentLoaded(true));
  }, [dispatch]);

  return (
    <>
      {userLoaded && contentLoaded && (
        <Switch>
          <Route exact path="/">
            <Navigation isLoaded={userLoaded} />
            <LandingPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route>
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
