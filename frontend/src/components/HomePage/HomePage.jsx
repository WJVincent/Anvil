import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PromptArea from "./PromptArea";
import MainBody from "./MainBody";
import LogoDiv from "./SideBar/LogoDiv";
import FolderList from "./SideBar/FolderList";

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

  const logout = (e) => {
    e.preventDefault();
    dispatch(SessionActions.logout());
    dispatch(UserActions.removeUserInfo());
    history.push("/");
  };

  return (
    <div id="full-screen" className="bg-main h-screen">
      {/* Main Body of Document */}
      <div id="page-body" className=" flex flex-col h-full overflow-auto pr-80">
        {/* Command Prompt Section */}
        <div
          id="prompt-area"
          className="flex flex-row h-16 ml-10 mr-10 justify-between pt-10 mb-10 font-jetbrains"
        >
          <PromptArea location={location} setLocation={setLocation} />
        </div>
        {/* Forms and Editor */}
        <div
          id="container"
          className="h-full mb-10 ml-10 mr-10 mt-5 bg-secondTransparent2 shadow-lg"
        >
          <MainBody />
        </div>
      </div>
      {/* SideBar */}
      <div
        id="sideNav"
        className="bg-secondary flex flex-col fixed right-0 top-0 h-screen w-80 "
      >
        <LogoDiv />
        {/* Folders List */}
        <div className="grid grid-rows-5 h-full overflow-auto">
          <FolderList
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            sessionUser={sessionUser}
            setLocation={setLocation}
            sessionUserInfo={sessionUserInfo}
          />
          {/* Logout Button */}
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
