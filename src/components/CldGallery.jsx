import { Carousel } from "react-responsive-carousel";
import Photo from "../components/CldPhoto";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CldGallery = (props) => {
  return (
    <div className="photos">
      {!props.imagesUploaded && props.imagesUploaded.length === 0 && (
        <p>No photos were added yet.</p>
      )}
      <Carousel>
        {props.imagesUploaded &&
          props.imagesUploaded.length !== 0 &&
          props.imagesUploaded.map((publicId) => {
            return (
              <Photo
                key={publicId}
                publicId={publicId}
                cloudName={props.cloud_name}
              />
            );
          })}
      </Carousel>
    </div>
  );
};

export default CldGallery;
