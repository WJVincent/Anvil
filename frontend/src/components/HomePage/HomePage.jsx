import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumpsterFire,
  faPenSquare,
  faFolderPlus,
  faFileCode,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import CommandPrompt from "../CommandPrompt";
import { EditFolderForm, NewFolderForm } from "../Forms";
import TextEditor from "./Editor";

import * as UserActions from "../../store/reducers/userInfo";
import * as SessionActions from "../../store/reducers/session";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [location, setLocation] = useState(window.location.pathname);
  const [selectedItem, setSelectedItem] = useState(null);

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
    <div id="full-screen" className="bg-main h-screen">
      <div id="page-body" className=" flex flex-col h-full overflow-auto pr-80">
        <div
          id="prompt-area"
          className="flex flex-row h-16 ml-10 mr-10 justify-between pt-10 mb-10 font-jetbrains"
        >
          <CommandPrompt location={location} setLocation={setLocation} />

          <div className="pr-5">
            <button
              disabled={true}
              className=" text-accentTwo text-3xl cursor-not-allowed pr-2"
            >
              <FontAwesomeIcon icon={faFileCode} />
            </button>
            <button
              className=" text-accentTwo text-3xl pl-2"
              onClick={() => setLocation(window.location.pathname)}
            >
              <Link to="/home/folder/new">
                <FontAwesomeIcon icon={faFolderPlus} />
              </Link>
            </button>
          </div>
        </div>
        <div
          id="container"
          className="h-full mb-10 ml-10 mr-10 mt-5 bg-secondTransparent2 shadow-lg"
        >
          <div id="forms-and-notes" className="flex">
            <Switch>
              <Route exact path="/home">
                <div className="w-full">
                  <TextEditor />
                </div>
              </Route>
              <Route path="/home/folder/edit/:id">
                <div className="w-1/2 m-auto pb-10">
                  <EditFolderForm />
                </div>
              </Route>
              <Route path="/home/folder/new">
                <div className="w-1/2 m-auto pb-10">
                  <NewFolderForm />
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </div>

      <div
        id="sideNav"
        className="bg-secondary flex flex-col fixed right-0 top-0 h-screen w-80 "
      >
        <div
          id="logo-div"
          className="font-jetbrains text-5xl font-extrabold text-accentOne h-60"
        >
          <div className="flex justify-center items-center flex-col pt-5 pb-2">
            <h1>Anvil</h1>
            <img
              onClick={() => history.push("/")}
              className="cursor-pointer w-20"
              src="https://anvil-file-bucket.s3.amazonaws.com/images/small-anvil-icon.png"
              alt="Anvil"
            />
          </div>

          <hr className="w-8/12 m-auto pt-1" />

          <div className="flex flex-row justify-between w-6/12 m-auto text-accentOne text-3xl pt-1 pb-2">
            <button>
              <a href="https://www.linkedin.com/in/william-vincent-5658851ba/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </button>
            <button>
              <a href="https://github.com/WJVincent">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </button>

            <button>
              <a href="https://github.com/WJVincent/Anvil">
                <FontAwesomeIcon icon={faCodeBranch} />
              </a>
            </button>
          </div>
          <hr className="w-8/12 m-auto pt-3 pb-2" />
        </div>
        <div className="grid grid-rows-5 h-full overflow-auto">
          <div
            id="folders"
            className="overflow-y-scroll row-start-1 pt-3 pb-2 pl-2 row-end-5"
          >
            <ul>
              {sessionUserInfo &&
                sessionUserInfo.content.Folders.map((folder) => (
                  <li
                    key={folder.id}
                    className="font-jetbrainstext text-3xl text-accentOne cursor-pointer"
                    onClick={() =>
                      selectedItem !== folder.id
                        ? setSelectedItem(folder.id)
                        : setSelectedItem(null)
                    }
                  >
                    <p className="relative inline-block">
                      {selectedItem === folder.id
                        ? `v ${folder.name}`
                        : `> ${folder.name}`}
                    </p>
                    <div
                      style={
                        selectedItem === folder.id
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      className="hidden relative w-20 h-10 text-2xl"
                    >
                      <div className="flex flex-row justify-between pt-2 pl-4">
                        <button
                          className="text-accentTwo"
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
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div id="logout-div" className="flex justify-center items-center">
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
    </div>
  );
};

export default HomePage;
