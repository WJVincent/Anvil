import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as UserActions from "../../../../../store/reducers/userInfo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire, faPenSquare } from "@fortawesome/free-solid-svg-icons";

const Folder = ({
  folder,
  selectedItem,
  setSelectedItem,
  sessionUser,
  setLocation,
}) => {
  const dispatch = useDispatch();

  const SubmitDelete = (folderId) => {
    dispatch(
      UserActions.deleteUserFolder({
        userId: sessionUser.id,
        folderId: folderId,
      })
    );
  };
  return (
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
        {selectedItem === folder.id ? `v ${folder.name}` : `> ${folder.name}`}
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
  );
};

export default Folder;
