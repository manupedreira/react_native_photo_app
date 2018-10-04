import galleryConstants from "./GalleryConstants";

export function fetchGallery(quantity) {
  return {
    type: galleryConstants.FETCHING_GALLERY,
    payload: quantity
  };
}

export function setGallery(gallery) {
  return {
    type: galleryConstants.FETCHED_GALLERY,
    payload: gallery
  };
}
