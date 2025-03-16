import imagesJson from '../assets/images.json'
import './slider.css'
import React, { useState } from "react";

type ImageKeys = keyof typeof imagesJson;
const images: Record<ImageKeys, string> = imagesJson;

export default function Astral_Slider() { 
  const imageList: ImageKeys[] = [
    "worldStar_light",
    "wheelOfDestiny_light",
    "riteOfOblivion_light",
    "lawOfAscension_light",
  ];

  const [currentImage, setCurrentImage] = useState<ImageKeys>(imageList[0]);
  const [fade, setFade] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<ImageKeys | null>(null);

  const handleImageClick = (id: ImageKeys) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImage(id);
      setFade(false);
    }, 300);
  };

  const toggleHoverImage = (id: ImageKeys, isHovering: boolean) => {
    if (isHovering) {
      setHoveredImage(
        id.includes("_light")
          ? (id.replace("_light", "_dark") as ImageKeys)
          : (id.replace("_dark", "_light") as ImageKeys)
      );
    } else {
      setHoveredImage(null);
    }
  };

  return (
    <div className="slider-container flex flex-col items-center">
      <div className={`main-image ${fade ? "fade-out" : "fade-in"}`}>
        <img src={images[currentImage]} alt="Astral" />
      </div>

      <div className="thumbnail-container">
        {imageList.map((id) => (
          <img
            key={id}
            src={
              images[
                hoveredImage === id
                  ? (id.replace("_light", "_dark") as ImageKeys)
                  : id
              ]
            }
            alt={id}
            className={`thumbnail ${currentImage === id ? "active" : ""}`}
            onClick={() => handleImageClick(id)}
            onMouseEnter={() => toggleHoverImage(id, true)}
            onMouseLeave={() => toggleHoverImage(id, false)}
          />
        ))}
      </div>
    </div>
  );
}