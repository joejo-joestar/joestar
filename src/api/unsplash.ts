/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const MIDDLEWARE_ROOT = "https://api.joejojoestar.com";

export const getCollections = async (noCache = false) => {
  const url = `${MIDDLEWARE_ROOT}/unsplash/collections${noCache ? "?no_cache=1" : ""}`;
  try {
    const { data } = await axios.get(url, {
      headers: { Accept: "application/json" },
      timeout: 5000,
      validateStatus: () => true,
    });

    if (data && Array.isArray(data.collections)) return data.collections;
    if (Array.isArray(data)) return data;
    return [];
  } catch (err) {
    console.error(
      "getCollections middleware error:",
      err && (err as any).message ? (err as any).message : err,
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

    if (data && Array.isArray(data.photos)) return data.photos;
    if (Array.isArray(data)) return data;
    return [];
  } catch (err) {
    console.error(
      "getPhotos middleware error:",
      err && (err as any).message ? (err as any).message : err,
    );
    return [];
  }
};
