import userConstants from "./UserConstants";

export default function UserReducer(
  state = {
    status: userConstants.LOADING,
    data: undefined
  },
  action
) {
  switch (action.type) {
    case userConstants.FETCHED_USER:
      return {
        status: userConstants.LOADED,
        data: action.payload
      };
    case userConstants.FETCHING_USER:
    default:
      return state;
  }
}
