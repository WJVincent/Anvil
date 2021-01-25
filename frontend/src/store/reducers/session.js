import fetch from "../csrf";

const initialState = {
  user: null,
};

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const signup = ({ username, email, password }) => async (dispatch) => {
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  dispatch(setUser(response.data.user));
  return response;
};

export const login = ({ credentials, password }) => async (dispatch) => {
  const response = await fetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ credentials, password }),
  });

  dispatch(setUser(response.data.user));
  return response;
};

export const restoreUser = () => async (dispatch) => {
  const response = await fetch("/api/session");
  dispatch(setUser(response.data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const addUserState = Object.assign({}, { user: action.user });
      return addUserState;
    case REMOVE_USER:
      const removeUserState = Object.assign({}, { user: null });
      return removeUserState;
    default:
      return state;
  }
};

export default sessionReducer;
