import galleryConstants from "./GalleryConstants";

export default function GalleryReducer(
  state = {
    status: galleryConstants.LOADING,
    gallery: undefined
  },
  action
) {
  switch (action.type) {
    case galleryConstants.FETCHED_GALLERY:
      return {
        status: galleryConstants.LOADED,
        gallery: action.payload
      };
    case galleryConstants.FETCHING_GALLERY:
    default:
      return state;
  }
}
