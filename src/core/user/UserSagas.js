import { put, takeEvery } from "redux-saga/effects";
import * as unsplash from "../../services/unsplash/unsplash";
import * as actions from "./UserActions";
import userConstants from "./UserConstants";

function* fetchUser(action) {
  try {
    const user = yield unsplash.getUser(action.payload);
    yield put(actions.setUser(user));
  } catch (error) {
    yield put(actions.fetchUser());
  }
}

function* watchFetchUser() {
  yield takeEvery(userConstants.FETCHING_USER, fetchUser);
}

export default watchFetchUser;
