import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as UserActions from "../../store/reducers/userInfo";

const HomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(UserActions.getUserInfo(sessionUser.id));
  }, [dispatch, sessionUser.id]);

  const sessionUserInfo = useSelector((state) => state.userInfo.content);

  console.log("currentUserInfo -----> ", sessionUserInfo);

  return (
    <div>
      <ul>
        {sessionUserInfo &&
          sessionUserInfo.Folders.map((folder) => (
            <li key={folder.id}>{folder.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
