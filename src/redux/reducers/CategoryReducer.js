import {
  CREATE_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORY,
} from "../types/CategoryType";

const initialState = {
  category: [],
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case EDIT_CATEGORY:
      const respone = action.payload; 
      const index = state.category.findIndex(item => item.id === respone.id);
      const cloneCategory = [...state.category];
      cloneCategory[index] = respone;
      return {
        ...state, 
        category: cloneCategory,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default CategoryReducer;
