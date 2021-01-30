import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire, faPenSquare } from "@fortawesome/free-solid-svg-icons";

import CommandPrompt from "../CommandPrompt";
import TextEditor from "../TextEditor";
import EditFolderForm from "../Forms/EditFolderForm";
import * as UserActions from "../../store/reducers/userInfo";
import * as SessionActions from "../../store/reducers/session";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [location, setLocation] = useState(window.location.pathname);

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

  const logout = (e) => {
    e.preventDefault();
    dispatch(SessionActions.logout());
    dispatch(UserActions.removeUserInfo());
    history.push("/");
  };

  return (
    <div className="bg-main bg-cover h-screen grid grid-cols-7">
      <div className="col-start-1 col-end-7 grid grid-rows-9">
        <div className="row-start-1 row-end-2 pt-8 pl-7">
          <CommandPrompt location={location} setLocation={setLocation} />
        </div>
        <div className=" flex justify-center items-center row-start-2 row-span-full bg-secondTransparent2 pl-5 mr-10 ml-10 mb-10 shadow-md ">
          <Switch>
            <Route exact path="/home">
              <TextEditor />
            </Route>
            <Route path="/home/folder/edit/:id">
              <div>
                <EditFolderForm />
              </div>
            </Route>
          </Switch>
        </div>
      </div>

      <div
        id="sideNav"
        className="bg-secondary h-screen col-start-7 col-end-8 shadow-lg grid grid-rows-6"
      >
        <div className="m-auto font-jetbrains text-4xl font-extrabold text-accentOne">
          <h1>Anvil</h1>
          <img
            onClick={() => history.push("/")}
            className="m-auto pb-3 cursor-pointer"
            src="https://anvil-file-bucket.s3.amazonaws.com/images/small-anvil-icon.png"
            alt="Anvil"
          />
          <hr className=" m-auto" />
        </div>

        <div>
          <ul className=" flex flex-col pl-5">
            {sessionUserInfo &&
              sessionUserInfo.content.Folders.map((folder) => (
                <li
                  key={folder.id}
                  className=" flex flex-row font-jetbrainstext text-xl text-accentOne"
                >
                  <p className="pr-2">{`> ${folder.name}`}</p>

                  <button
                    className="pr-1 text-accentTwo"
                    onClick={() => setLocation(window.location.pathname)}
                  >
                    <Link to={`/home/folder/edit/${folder.id}`}>
                      <FontAwesomeIcon icon={faPenSquare} />
                    </Link>
                  </button>

                  <button
                    onClick={() => SubmitDelete(folder.id)}
                    className="pl-1 text-accentFour"
                  >
                    <FontAwesomeIcon icon={faDumpsterFire} />
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div className="row-start-6 row-span-1 m-auto">
          <div>
            <button
              className="bg-accentThree transition duration-150 hover:ease-in-out transform hover:-translate-y-0.5 text-main text-xl font-bold w-25 h-12 m-auto rounded-md text-center p-2 shadow"
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
