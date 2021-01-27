import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as UserActions from "../../store/reducers/userInfo";

const HomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionUserInfo = useSelector((state) => state.userInfo);
  const testSelection = useSelector((state) => state.userInfo);
  console.log("test selection ---->", testSelection);

  const SubmitDelete = (folderId) => {
    dispatch(
      UserActions.deleteUserFolder({
        userId: sessionUser.id,
        folderId: folderId,
      })
    );
  };

  return (
    <div>
      {console.log("inside of component return", sessionUserInfo)}
      <ul>
        {sessionUserInfo &&
          sessionUserInfo.content.Folders.map((folder) => (
            <li key={folder.id}>
              {folder.name} ::{" "}
              <button>
                <Link to={`/folder/edit/${folder.id}`}>Edit</Link>
              </button>
              <button onClick={() => SubmitDelete(folder.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
