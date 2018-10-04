import Unsplash from "unsplash-js/native";

const unsplash = new Unsplash({
  applicationId:
    "a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa",
  secret: "4ea19af370997bcb0c580c071437661346b073b8e2f5252871e171ecc3c783ee"
});

export async function getRandomGallery(quantity = 6) {
  const response = await unsplash.photos.listPhotos(1, quantity);
  return JSON.parse(response._bodyInit);
}

export async function getUser(userId) {
  const response = await unsplash.users.profile(userId);
  const parsedResponse = JSON.parse(response._bodyInit);
  const user = {
    username: parsedResponse.username,
    name: parsedResponse.name,
    bio: parsedResponse.bio,
    profile_image: parsedResponse.profile_image,
    photos: parsedResponse.photos
  };
  return user;
}
