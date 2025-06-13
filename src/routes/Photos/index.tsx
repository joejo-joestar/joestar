import "./index.css";
import CategoryMenu from "../../components/MainGallery/CategoryMenu.tsx";
import { useEffect, useState, type SetStateAction } from "react";
import MainGallery from "../../components/MainGallery/index.tsx";
import { getCollections, getPhotos } from "../../api/unsplash";

const Photos = () => {
  const [collectionList, setCollections] = useState<
    { id: string; title: string }[]
  >([]);
  const [imageArray, setImageArray] = useState<
    { id: string; imageUrl: string; category: string }[]
  >([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const collectionData = async () => {
      try {
        const fetechedCollections = await getCollections();
        console.log("Collection List:", fetechedCollections);

        const collectionList = fetechedCollections.map((collection: any) => ({
          id: collection.id,
          title: collection.title,
          links: collection.links.html,
        }));
        setCollections(collectionList);
        if (collectionList.length > 0) {
          setActiveCategory(collectionList[0].title);
          const initialPhotos = await getPhotos({
            collectionID: collectionList[0].id,
          });
          console.log("Initial Photos:", initialPhotos);
          const photosArray = initialPhotos.map((photo: any) => ({
            id: photo.id,
            imageUrl: photo.urls.regular,
            category: collectionList[0].title,
          }));
          setImageArray(photosArray);
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };
    collectionData();
  }, []);

  const categories = collectionList.map((collection) => collection.title);

  const handleSelectCategory = async (category: SetStateAction<string>) => {
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
          imageUrl: photo.urls.regular,
          category: selectedCollection.title,
        }));
        setImageArray(photosArray);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
  };

  const filteredImages = imageArray.filter(
    (image) => image.category === activeCategory
  );
  collectionList.forEach((collection) => {
    console.log("Collection Title:", collection.title);
  });

  return (
    <section className="photos">
      <h1 className="font-heading">Photos</h1>
      <div className="font-body body-content">
        <span className="body-content">
          Here are some of the pictures i have taken over the years.
        </span>
        <CategoryMenu
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />
        <div className="photos-grid">
          <MainGallery images={filteredImages} />
        </div>
      </div>
    </section>
  );
};

export default Photos;
