import fetch from "../csrf";

const initialState = {
  content: { Folders: [] },
};

const SET_CONTENT = "userInfo/setContent";

const REMOVE_CONTENT = "userInfo/removeContent";

const CREATE_FOLDER = "userInfo/createFolder";

const EDIT_FOLDER = "userInfo/editFolder";

const setContent = (userContent) => ({
  type: SET_CONTENT,
  userContent,
});

const removeContent = () => ({
  type: REMOVE_CONTENT,
});

const createFolder = (newFolder) => ({
  type: CREATE_FOLDER,
  newFolder,
});

const editFolder = (updatedFolders) => ({
  type: EDIT_FOLDER,
  updatedFolders,
});

export const getUserInfo = (userId) => async (dispatch) => {
  const response = await fetch(`/api/user/${userId}`);
  dispatch(setContent(response.data));
};

export const removeUserInfo = () => async (dispatch) => {
  dispatch(removeContent());
};

export const createUserFolder = ({ name, userId, categoryId }) => async (
  dispatch
) => {
  const response = await fetch("/api/folder", {
    method: "POST",
    body: JSON.stringify({ name, userId, categoryId }),
  });
  dispatch(createFolder(response.data));
};

export const editUserFolder = ({
  name,
  userId,
  categoryId,
  folderId,
}) => async (dispatch) => {
  const response = await fetch(`/api/folder/${folderId}`, {
    method: "PUT",
    body: JSON.stringify({ name, userId, categoryId }),
  });
  dispatch(editFolder(response.data));
};

export const restoreUserInfo = () => async (dispatch) => {
  const response = await fetch("/api/session");
  dispatch(setContent(response.data.userData));
  return response;
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENT:
      const newUserInfo = Object.assign({}, { content: action.userContent });
      return newUserInfo;
    case REMOVE_CONTENT:
      const begoneUserInfo = Object.assign({}, { content: null });
      return begoneUserInfo;
    case CREATE_FOLDER:
      const newFolderState = {
        ...state,
        Folders: [...state.content.Folders, action.newFolder],
      };
      return newFolderState;
    case EDIT_FOLDER:
      const editFolderState = {
        ...state,
        Folders: [...action.updatedFolders],
      };
      return editFolderState;
    default:
      return state;
  }
};

export default userInfoReducer;
