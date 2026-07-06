import "./index.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getPhoto } from "@api/unsplash";
import {
  LuX,
  LuAperture,
  LuMapPin,
  LuCamera,
  LuChartSpline,
  LuClock,
  LuExternalLink,
  LuMaximize2,
} from "react-icons/lu";

interface PhotoDetails {
  id: string;
  description?: string;
  width: number;
  height: number;
  color: string;
  downloads?: number;
  exif?: {
    make?: string;
    model?: string;
    exposure_time?: string;
    aperture?: string;
    focal_length?: string;
    iso?: number;
  };
  location?: {
    city?: string;
    country?: string;
    position?: {
      latitude?: number;
      longitude?: number;
    };
  };
  tags?: { title: string }[];
  urls: {
    regular: string;
    full: string;
  };
  links?: {
    html?: string;
  };
  user?: {
    name?: string;
    username?: string;
    links?: {
      html?: string;
    };
  };
}

interface PhotoViewerProps {
  photoId: string;
  onClose: () => void;
}

const PhotoViewer: React.FC<PhotoViewerProps> = ({ photoId, onClose }) => {
  const [photo, setPhoto] = useState<PhotoDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchPhoto = async () => {
      const data = await getPhoto(photoId);
      if (isMounted) {
        setPhoto(data && !Array.isArray(data) && data.urls ? data : null);
        setIsLoading(false);
      }
    };
    fetchPhoto();

    return () => {
      isMounted = false;
    };
  }, [photoId]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="photo-viewer-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="photo-viewer"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="photo-viewer-close"
          onClick={onClose}
          aria-label="Close"
        >
          <LuX />
        </button>
        {isLoading && (
          <div className="loader-container">
            <div className="loader" />
          </div>
        )}
        {!isLoading && !photo && (
          <p className="photo-viewer-error">
            couldn't load details for this photo.
          </p>
        )}
        {!isLoading && photo && (
          <div className="photo-viewer-content">
            <img
              className="photo-viewer-image"
              src={photo.urls.regular}
              alt={photo.description || photo.id}
            />
            <div className="photo-viewer-details">
              {(photo.location?.city || photo.location?.country) && (
                <p className="photo-viewer-location">
                  <LuMapPin className="exif-icons" />{" "}
                  {[photo.location.city, photo.location.country]
                    .filter(Boolean)
                    .join(", ")}
                </p>
              )}

              {photo.exif && (
                <div className="photo-viewer-exif">
                  {(photo.exif.make || photo.exif.model) && (
                    <span className="exif-icon-container">
                      <LuCamera className="exif-icons" />
                      {[photo.exif.make, photo.exif.model]
                        .filter(Boolean)
                        .join(" ")}
                    </span>
                  )}
                  {photo.exif.focal_length && photo.exif.aperture && (
                    <span className="exif-icon-container">
                      <LuAperture className="exif-icons" />
                      <span className="photo-viewer-exif-lens">
                        {photo.exif.focal_length && (
                          <span>{photo.exif.focal_length}mm</span>
                        )}
                        {photo.exif.aperture && (
                          <span>
                            <i>f</i>/
                            {parseFloat(photo.exif.aperture).toFixed(1)}
                          </span>
                        )}
                      </span>
                    </span>
                  )}
                  {photo.exif.exposure_time && (
                    <span className="exif-icon-container">
                      <LuClock className="exif-icons" />
                      {photo.exif.exposure_time}s
                    </span>
                  )}
                  {photo.exif.iso && (
                    <span className="exif-icon-container">
                      <LuChartSpline className="exif-icons" /> ISO{" "}
                      {photo.exif.iso}
                    </span>
                  )}
                </div>
              )}

              <p className="photo-viewer-meta">
                <LuMaximize2 className="exif-icons" /> {photo.width} x{" "}
                {photo.height}
              </p>

              {photo.links?.html && (
                <a
                  className="photo-viewer-link"
                  href={photo.links?.html}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view on unsplash{" "}
                  <LuExternalLink className="photo-viewer-link-icon" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default PhotoViewer;
