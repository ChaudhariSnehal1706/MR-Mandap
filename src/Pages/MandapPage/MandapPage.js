import React from "react";
import { Gallery, MandapJsonData } from "../../Components";

const MandapGallery = () => {

  // Map MandapJsonData to create an array of objects with id and mandapImage
  const mandapImages = MandapJsonData.map(item => ({
    id: item.id, // Preserve the id
    image: item.mandapImage, // Change mandapImage to image
  }));

  return (
    <div className="container mx-auto">
      <Gallery imageData={mandapImages} /> {/* Pass the structured data */}
    </div>
  );
};

export default MandapGallery;
