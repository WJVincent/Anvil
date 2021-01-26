import fetch from "../csrf";

const initialState = {
  content: null,
};

const SET_CONTENT = "userInfo/setContent";

const REMOVE_CONTENT = "userInfo/removeContent";

const CREATE_FOLDER = "userInfo/createFolder";

const setContent = (content) => ({
  type: SET_CONTENT,
  content,
});

const removeContent = () => ({
  type: REMOVE_CONTENT,
});

const createFolder = (folder) => ({
  type: CREATE_FOLDER,
  folder,
});

export const getUserInfo = (userId) => async (dispatch) => {
  const response = await fetch(`/api/user/${userId}`);
  console.log("RESPONSE FROM FETCH ---->", response.data);
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
  console.log(response.data.newFolder);
  dispatch(createFolder(response.data.newFolder));
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENT:
      const newUserInfo = Object.assign({}, { content: action.content });
      return newUserInfo;
    case REMOVE_CONTENT:
      const begoneUserInfo = Object.assign({}, { content: null });
      return begoneUserInfo;
    case CREATE_FOLDER:
      const newUserInfoState = [...state.content.Folders, action.folder];
      return newUserInfoState;
    default:
      return state;
  }
};

export default userInfoReducer;
