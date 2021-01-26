import fetch from "../csrf";

const initialState = {
  content: null,
};

const SET_CONTENT = "userInfo/setContent";

const REMOVE_CONTENT = "userInfo/removeContent";

const setContent = (content) => ({
  type: SET_CONTENT,
  content,
});

const removeContent = () => ({
  type: REMOVE_CONTENT,
});

export const getUserInfo = (userId) => async (dispatch) => {
  const response = await fetch(`/api/user/${userId}`);
  console.log("RESPONSE FROM FETCH ---->", response.data);
  dispatch(setContent(response.data));
};

export const removeUserInfo = () => async (dispatch) => {
  dispatch(removeContent());
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENT:
      const newUserInfo = Object.assign({}, { content: action.content });
      return newUserInfo;
    case REMOVE_CONTENT:
      const begoneUserInfo = Object.assign({}, { content: null });
      return begoneUserInfo;
    default:
      return state;
  }
};

export default userInfoReducer;
