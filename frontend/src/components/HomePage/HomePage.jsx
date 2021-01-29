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
        <div className="row-start-1 row-end-2 pt-8 pl-7">
          <CommandPrompt />
        </div>
        <div className="row-start-2 row-span-full bg-secondTransparent2 pl-5 mr-10 ml-10 mb-10 shadow-md">
          <h1>Editor Goes Here</h1>
        </div>
      </div>

      <div
        id="sideNav"
        className="bg-secondary h-screen col-start-7 col-end-8 shadow-lg grid grid-rows-6"
      >
        <div className="m-auto font-jetbrains text-4xl font-extrabold text-accentOne">
          <h1>Anvil</h1>
          <img
            className="m-auto pb-3"
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
                  <p className="pr-3">{`> ${folder.name}`}</p>
                  <div className="text-2xl">
                    <button className="pr-2 text-accentTwo">
                      <Link to={`/folder/edit/${folder.id}`}>
                        <FontAwesomeIcon icon={faPenSquare} />
                      </Link>
                    </button>
                    <button
                      onClick={() => SubmitDelete(folder.id)}
                      className="pl-2 text-accentFour"
                    >
                      <FontAwesomeIcon icon={faDumpsterFire} />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
