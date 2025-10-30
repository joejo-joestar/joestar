import axios from "axios";

const MIDDLEWARE_ROOT = "https://api.joestar.is-a.dev";

export const getCollections = async (noCache = false) => {
  const url = `${MIDDLEWARE_ROOT}/unsplash/collections${noCache ? "?no_cache=1" : ""}`;
  try {
    const { data } = await axios.get(url, {
      headers: { Accept: "application/json" },
      timeout: 5000,
      validateStatus: () => true,
    });

    // middleware returns { meta, collections }
    if (data && Array.isArray(data.collections)) return data.collections;
    // fallback: some middleware variants may return array directly
    if (Array.isArray(data)) return data;
    return [];
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      "getCollections middleware error:",
      err && (err as any).message ? (err as any).message : err
    );
    return [];
  }
};

export const getPhotos = async ({
  collectionID,
  per_page,
}: {
  collectionID: string;
  per_page?: number;
}) => {
  const qs = per_page ? `?per_page=${per_page}` : "";
  const url = `${MIDDLEWARE_ROOT}/unsplash/collections/${collectionID}/photos${qs}`;
  try {
    const { data } = await axios.get(url, {
      headers: { Accept: "application/json" },
      timeout: 5000,
      validateStatus: () => true,
    });

    // middleware returns { meta, photos }
    if (data && Array.isArray(data.photos)) return data.photos;
    if (Array.isArray(data)) return data;
    return [];
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      "getPhotos middleware error:",
      err && (err as any).message ? (err as any).message : err
    );
    return [];
  }
};
