import { fork, all } from "redux-saga/effects";
import { watchFetchGallery } from "../core/gallery";
import { watchFetchUser } from "../core/user";

const sagas = [watchFetchGallery, watchFetchUser];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
