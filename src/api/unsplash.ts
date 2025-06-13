import axios from "axios";

const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;

const UNSPLASH_ROOT = "https://api.unsplash.com";

export const getCollections = async () => {
  const { data } = await axios.get(
    `${UNSPLASH_ROOT}/users/joejojoestar/collections?client_id=${clientId}`
  );
  return data;
};

export const getPhotos = async ({ collectionID }: { collectionID: string }) => {
  const { data } = await axios.get(
    `${UNSPLASH_ROOT}/collections/${collectionID}/photos?client_id=${clientId}`
  );
  return data;
};
