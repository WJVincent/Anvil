import fetch from "../csrf";

const initialState = {
  categories: [],
};

const SET_CATEGORIES = "categories/setCategories";

const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const getCategories = () => async (dispatch) => {
  const response = await fetch("/api/category");
  dispatch(setCategories(response.data));
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      const categoryList = Object.assign({}, { categories: action.categories });
      return categoryList;
    default:
      return state;
  }
};

export default categoryReducer;
