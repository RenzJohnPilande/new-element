import React, { useEffect } from "react";

const PreloadImage = ({ imageUrl }) => {
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
  }, [imageUrl]);

  return null;
};

export default PreloadImage;
