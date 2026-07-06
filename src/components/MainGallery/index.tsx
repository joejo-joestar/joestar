import "./index.css";
import { useState } from "react";
import PhotoViewer from "@components/PhotoViewer/index.tsx";

interface ImageProps {
  id: string;
  imageUrl: string;
  unsplashLink: string;
}

interface GalleryProps {
  images: ImageProps[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);

  return (
    <div className="gallery">
      {images.map((image) => (
        <button
          key={image.id}
          type="button"
          className="gallery-item"
          onClick={() => setSelectedPhotoId(image.id)}
        >
          <img src={image.imageUrl} alt={`${image.id}`} />
        </button>
      ))}
      {selectedPhotoId && (
        <PhotoViewer
          key={selectedPhotoId}
          photoId={selectedPhotoId}
          onClose={() => setSelectedPhotoId(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
