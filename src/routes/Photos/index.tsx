import "./index.css";
import CategoryMenu from "@components/CategoryMenu/index.tsx";
import { useEffect, useState, type SetStateAction } from "react";
import MainGallery from "@components/MainGallery/index.tsx";
import { getCollections, getPhotos } from "@api/unsplash";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Photos = () => {
  useScrollToTop();
  const [collectionList, setCollections] = useState<
    { id: string; title: string; link: string }[]
  >([]);
  const [imageArray, setImageArray] = useState<
    { id: string; imageUrl: string; category: string; unsplashLink: string }[]
  >([]);
  const [activeCategory, setActiveCategory] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionData = async () => {
      setIsLoading(true);
      try {
        const fetechedCollections = await getCollections();

        const collectionList = fetechedCollections.map((collection: any) => ({
          id: collection.id,
          title: collection.title,
          link: collection.links.html,
        }));
        setCollections(collectionList);

        if (collectionList.length > 0) {
          setActiveCategory(collectionList[0].title);
          const initialPhotos = await getPhotos({
            collectionID: collectionList[0].id,
          });
          const photosArray = initialPhotos.map((photo: any) => ({
            id: photo.id,
            imageUrl: photo.urls.small,
            unsplashLink: photo.links.html,
            category: collectionList[0].title,
          }));

          await Promise.all(
            photosArray.map((image: any) => {
              return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image.imageUrl;
                img.onload = resolve;
                img.onerror = reject;
              });
            })
          );

          setImageArray(photosArray);
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
      } finally {
        setIsLoading(false);
      }
    };
    collectionData();
  }, []);

  const categories = collectionList.map((collection) => {
    return collection.title;
  });
  const links = collectionList.map((collection) => {
    return collection.link;
  });

  const handleSelectCategory = async (category: SetStateAction<string>) => {
    setIsLoading(true);
    setActiveCategory(category);

    const selectedCollection = collectionList.find(
      (collection) => collection.title === category
    );

    if (selectedCollection) {
      try {
        const photos = await getPhotos({
          collectionID: selectedCollection.id,
        });
        const photosArray = photos.map((photo: any) => ({
          id: photo.id,
          imageUrl: photo.urls.small,
          unsplashLink: photo.links.html,
          category: selectedCollection.title,
        }));

        await Promise.all(
          photosArray.map((image: any) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = image.imageUrl;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );

        setImageArray(photosArray);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  const filteredImages = imageArray.filter(
    (image) => image.category === activeCategory
  );

  return (
    <>
      <section className="photos">
        <title>photos. | joestar</title>
        <h1>
          <img
            src="https://raw.githubusercontent.com/joejo-joestar/joestar/8ad250ff86a6254c58bb2072f0dc163b48b1d5b5/src/assets/pixpics.png"
            alt="photos."
          />
          photos.
        </h1>
        <div className="photos-body-content">
          <div>
            <span>
              here are some of the pictures i have taken over the years.
            </span>
            <span>
              <p>
                you can find a lot of my work on{" "}
                <a
                  href="http://unsplash.com/@joejojoestar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>
              </p>
            </span>
          </div>
          {isLoading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              <CategoryMenu
                categories={categories}
                links={links}
                activeCategory={activeCategory}
                onSelectCategory={handleSelectCategory}
              />
              <div className="photos-grid">
                <MainGallery images={filteredImages} />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Photos;
