import {
    ADMIN_GET_USER,
    ADMIN_DEL_USER,
    ADMIN_DEL_EQUIP,
    ADMIN_GET_EQUIP    
  } from '../constants/actionTypes';

  export default (state = {}, action) => {

    switch (action.type) {
      case ADMIN_GET_USER:
        return {
          ...state,
          users: action.payload
        };           
        case ADMIN_DEL_USER:
          return {
            ...state,
            users: action.payload
        };   
        case ADMIN_DEL_EQUIP:
          return {
            ...state,
            users: action.payload
        };  
        case ADMIN_GET_EQUIP:
        return {
          ...state,
          equips: action.payload
        };           
      default:
      return state;
    }
  };