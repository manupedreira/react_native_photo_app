import userConstants from "./UserConstants";

export function fetchUser(userId) {
  return {
    type: userConstants.FETCHING_USER,
    payload: userId
  };
}

export function setUser(user) {
  return {
    type: userConstants.FETCHED_USER,
    payload: user
  };
}
