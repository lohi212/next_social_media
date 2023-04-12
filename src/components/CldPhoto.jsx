import { AdvancedImage, lazyload } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { Cloudinary } from "@cloudinary/url-gen";

const CldPhoto = (props) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: props.cloudName,
    },
  });

  const myImage = cld.image(props.publicId);
  myImage.resize(fill().width(250).height(250)).delivery(quality(60));

  return (
    <div
      style={{
        background: "#364d79",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div style={{ width: "50%" }}>
        <AdvancedImage
          cldImg={myImage}
          plugins={[lazyload()]}
          // width={250}
          // height={250}
        />
      </div>
    </div>
  );
};

export default CldPhoto;
