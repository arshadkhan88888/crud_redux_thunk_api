import {
  ADD_POST,
  DELETE_DATA,
  GET_DATA,
  GET_SINGLE_POST,
  UPDATE_POST,
  VIEW_USER,
} from "../Store/Types";

const init = {
  users: [],
  user: {},
  loading: false,
};
const usersData = (state = init, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        users: action.payload,
        loading: true,
      };

    case DELETE_DATA: {
      debugger;

      const { users } = state;
      console.log("reducre ", users);

      const filterData = users.filter((i) => {
        return i.id !== action.payload;
      });

      return {
        ...state,
        users: filterData,
      };
    }

    case GET_SINGLE_POST:
      return {
        ...state,
        user:action.payload
      }

    case UPDATE_POST:
      return {
        ...state,
        users: state.users.map((user)=>user.id===action.payload.id ? action.payload :user)
      };
    case ADD_POST:
      return {
        ...state,
      }
    case VIEW_USER:
      return {
        ...state,
        user:action.payload
      }

    default:
      return state;
  }
};
export default usersData;
