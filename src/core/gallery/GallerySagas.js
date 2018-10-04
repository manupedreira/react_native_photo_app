import { put, takeEvery } from "redux-saga/effects";
import * as unsplash from "../../services/unsplash/unsplash";
import * as actions from "./GalleryActions";
import galleryConstants from "./GalleryConstants";

function* fetchGallery(action) {
  try {
    const gallery = yield unsplash.getRandomGallery(action.payload);
    yield put(actions.setGallery(gallery));
  } catch (error) {
    yield put(actions.fetchGallery());
  }
}

function* watchFetchGallery() {
  yield takeEvery(galleryConstants.FETCHING_GALLERY, fetchGallery);
}

export default watchFetchGallery;
