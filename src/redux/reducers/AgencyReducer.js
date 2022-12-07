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
        const respone = action.payload; 
        const index = state.agency.findIndex(item => item.id === respone.id);
        const cloneAgency = [...state.agency];
        cloneAgency[index] = respone;
        return {
          ...state,
          agency: cloneAgency,
        };
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