import fetch from "../csrf";

const initialState = {
  content: { Folders: [] },
};

// ----
// Basic User Information Actions
// ----

const SET_CONTENT = "userInfo/setContent";

const REMOVE_CONTENT = "userInfo/removeContent";

const setContent = (userContent) => ({
  type: SET_CONTENT,
  userContent,
});

const removeContent = () => ({
  type: REMOVE_CONTENT,
});

export const getUserInfo = (userId) => async (dispatch) => {
  const response = await fetch(`/api/user/${userId}`);
  dispatch(setContent(response.data));
};

export const removeUserInfo = () => async (dispatch) => {
  dispatch(removeContent());
};

export const restoreUserInfo = () => async (dispatch) => {
  const response = await fetch("/api/session");
  dispatch(setContent(response.data.userData));
  return response;
};

// ----
// User Folder Actions
// ----

const CREATE_FOLDER = "userInfo/createFolder";

const EDIT_FOLDER = "userInfo/editFolder";

const createFolder = (newFolder) => ({
  type: CREATE_FOLDER,
  newFolder,
});

const editFolder = (updatedFolders) => ({
  type: EDIT_FOLDER,
  updatedFolders,
});

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

export const deleteUserFolder = ({ userId, folderId }) => async (dispatch) => {
  const response = await fetch(`/api/folder/${folderId}`, {
    method: "DELETE",
    body: JSON.stringify({ userId }),
  });
  dispatch(editFolder(response.data));
  return response.data;
};

// ----
// User File Actions
// ----

const CREATE_FILE = "userInfo/createFile";

const EDIT_FILE = "user/editFile";

const createFile = (updatedFolders) => ({
  type: CREATE_FILE,
  updatedFolders,
});

const editFile = (updatedFolders) => ({
  type: EDIT_FILE,
  updatedFolders,
});

export const createUserFile = ({ name, content, folderId, userId }) => async (
  dispatch
) => {
  const response = await fetch("/api/file", {
    method: "POST",
    body: JSON.stringify({ name, content, folderId, userId }),
  });
  dispatch(createFile(response.data));
};

export const editUserFile = ({ name, content, fileId, userId }) => async (
  dispatch
) => {
  const response = await fetch(`/api/file/${fileId}`, {
    method: "PUT",
    body: JSON.stringify({ name, content, fileId, userId }),
  });

  dispatch(editFile(response.data));
};

export const deleteUserFile = ({ fileId, userId }) => async (dispatch) => {
  const response = await fetch(`/api/file/${fileId}`, {
    method: "DELETE",
    body: JSON.stringify({ userId }),
  });
  dispatch(editFile(response.data));
};

// ----
// Action Reducer
// ----

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENT:
      const newUserInfo = Object.assign({}, { content: action.userContent });
      return newUserInfo;
    case REMOVE_CONTENT:
      const begoneUserInfo = Object.assign({}, { content: { Folders: [] } });
      return begoneUserInfo;
    case CREATE_FOLDER:
      const newFolderState = {
        ...state,
        content: {
          ...state.content,
          Folders: [...state.content.Folders, action.newFolder],
        },
      };
      return newFolderState;
    case EDIT_FOLDER:
      const editFolder = {
        ...state,
        content: { ...state.content, Folders: [...action.updatedFolders] },
      };
      return editFolder;
    case CREATE_FILE:
      const addedFile = {
        ...state,
        content: { ...state.content, Folders: [...action.updatedFolders] },
      };
      return addedFile;
    case EDIT_FILE:
      const editedFile = {
        ...state,
        content: { ...state.content, Folders: [...action.updatedFolders] },
      };
      return editedFile;
    default:
      return state;
  }
};

export default userInfoReducer;
