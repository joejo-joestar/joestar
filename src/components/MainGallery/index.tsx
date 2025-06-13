import "./index.css";

interface ImageProps {
  id: number | string; // Assuming id can be a number or a string
  imageUrl: string;
}

interface GalleryProps {
  images: ImageProps[];
}
export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <img key={image.id} src={image.imageUrl} alt={`Img ${image.id}`} />
      ))}
    </div>
  );
};

export default Gallery;
