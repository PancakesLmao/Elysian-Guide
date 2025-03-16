import imagesJson from '../assets/images.json'
import battlesuitsJson from '../assets/astral_ring/classify.json'
import './slider.css'
import React, { useState } from "react";

type ImageKeys = keyof typeof imagesJson;
const images: Record<ImageKeys, string> = imagesJson;

interface BattlesuitCategory {
  name: string;
  battlesuits: {
    charName: string;
    suitName: string;
    avatarSource: string;
  }[];
}
const battlesuitData: BattlesuitCategory[] = battlesuitsJson;

const imageToCategory: Record<string, string> = {
  worldStar_light: "World Star",
  riteOfOblivion_light: "Rite of Oblivion",
  wheelOfDestiny_light: "Wheel of Destiny",
  lawOfAscension_light: "Law of Ascension",
};

export default function AstralSlider() { 
  const imageList: ImageKeys[] = [
    "worldStar_light",
    "wheelOfDestiny_light",
    "riteOfOblivion_light",
    "lawOfAscension_light",
  ];

  const [currentImage, setCurrentImage] = useState<ImageKeys>(imageList[0]);
  const [fade, setFade] = useState(false);
  const currentCategory = battlesuitData.find(
    (cat) => cat.name === imageToCategory[currentImage]
  );

  const handleImageClick = (id: ImageKeys) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImage(id);
      setFade(false);
    }, 300);
  };

  const getHoverImage = (id: ImageKeys) => {
    return id.includes("_light")
      ? images[id.replace("_light", "_dark") as ImageKeys]
      : images[id];
  };

  return (
    <div className="slider-container flex flex-col items-center h-lvh">
      <div className={`category-section ${fade ? "fade-out" : "fade-in"}`}>
        <h2 className="text-2xl ">{currentCategory?.name}</h2>
        <div className="battlesuit-list flex justify-center">
          {currentCategory?.battlesuits.map((battlesuit) => (
            <div
              key={battlesuit.charName}
              className="battlesuit-card w-40 gap-x-8 p-2"
            >
              <img
                className="w-[100px]"
                src={battlesuit.avatarSource || "default-avatar.png"}
                alt={battlesuit.charName}
              />
              <h3>{battlesuit.charName}</h3>
              <p>{battlesuit.suitName}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="thumbnail-container">
        {imageList.map((id) => (
          <img
            key={id}
            src={images[id]}
            alt={id}
            className={`thumbnail ${currentImage === id ? "active" : ""}`}
            onClick={() => handleImageClick(id)}
            onMouseEnter={(e) => (e.currentTarget.src = getHoverImage(id))}
            onMouseLeave={(e) => (e.currentTarget.src = images[id])}
          />
        ))}
      </div>
    </div>
  );
}