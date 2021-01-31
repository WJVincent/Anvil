import Folder from "./Folder";

const FolderList = ({
  selectedItem,
  setSelectedItem,
  sessionUser,
  setLocation,
  sessionUserInfo,
}) => {
  return (
    <div
      id="folders"
      className="overflow-y-scroll row-start-1 pt-3 pb-2 pl-2 row-end-5"
    >
      <ul>
        {sessionUserInfo &&
          sessionUserInfo.content.Folders.map((folder) => (
            <Folder
              key={folder.id}
              folder={folder}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
              sessionUser={sessionUser}
              setLocation={setLocation}
            />
          ))}
      </ul>
    </div>
  );
};

export default FolderList;
