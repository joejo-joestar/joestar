import "./index.css";

interface ImageProps {
  id: string;
  imageUrl: string;
  unsplashLink: string;
}

interface GalleryProps {
  images: ImageProps[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <>
          <a
            href={image.unsplashLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img key={image.id} src={image.imageUrl} alt={`${image.id}`} />
          </a>
        </>
      ))}
    </div>
  );
};

export default Gallery;
