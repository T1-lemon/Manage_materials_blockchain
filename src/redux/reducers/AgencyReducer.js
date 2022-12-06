import {
  CREATE_AGENCY,
  EDIT_AGENCY,
  DELETE_AGENCY,
  GET_AGENCY,
} from "../types/AgencyType";


const initialState = {
    agency: [],
  };
  
  const AgencyReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case GET_AGENCY:
        return {
          ...state,
          agency: action.payload,
        };
      case CREATE_AGENCY:
        return {
          ...state,
          agency: [...state.agency, action.payload],
        };
      case EDIT_AGENCY:
        return {};
      case DELETE_AGENCY:
        return {
          ...state,
          agency: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  };
  
  export default AgencyReducer;