import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire, faPenSquare } from "@fortawesome/free-solid-svg-icons";

import CommandPrompt from "../CommandPrompt";
import * as UserActions from "../../store/reducers/userInfo";

const HomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionUserInfo = useSelector((state) => state.userInfo);

  const SubmitDelete = (folderId) => {
    dispatch(
      UserActions.deleteUserFolder({
        userId: sessionUser.id,
        folderId: folderId,
      })
    );
  };

  return (
    <div className="bg-main bg-cover h-screen grid grid-cols-7">
      <div className="col-start-1 col-end-7 grid grid-rows-9">
        <div className="row-start-1 row-end-2 pt-8 pl-5">
          <CommandPrompt />
        </div>
        <div className="row-start-2 row-span-full bg-secondTransparent2 pl-5 mr-5 ml-5 mb-5">
          <h1>Editor Goes Here</h1>
        </div>
      </div>

      <div id="sideNav" className="bg-secondary h-screen col-start-7">
        <ul>
          {sessionUserInfo &&
            sessionUserInfo.content.Folders.map((folder) => (
              <li key={folder.id}>
                {folder.name} ::{" "}
                <button>
                  <Link to={`/folder/edit/${folder.id}`}>
                    <FontAwesomeIcon icon={faPenSquare} />
                  </Link>
                </button>
                <button onClick={() => SubmitDelete(folder.id)}>
                  <FontAwesomeIcon icon={faDumpsterFire} />
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
