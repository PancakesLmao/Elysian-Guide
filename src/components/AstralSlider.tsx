import imagesJson from "../assets/astral_ring/astral_rings.json";
import battlesuitsJson from "../assets/astral_ring/classify.json";
import signetJson from "../assets/signets/signets_en.json"
import "./slider.css";
import { useState } from "react";

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
  const [selectedBattlesuit, setSelectedBattlesuit] = useState<string | null>(
    null
  );
  const [fade, setFade] = useState(false);
  const currentCategory = battlesuitData.find(
    (cat) => cat.name === imageToCategory[currentImage]
  );

  const handleImageClick = (id: ImageKeys) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImage(id);
      setFade(false);
      setSelectedBattlesuit(null); // Reset selected battlesuit
    }, 300);
  };

  const handleBattlesuitClick = (suitName: string) => {
    setSelectedBattlesuit(suitName);
    console.log("Selected battlesuit:", suitName);
  };
  const getHoverImage = (id: ImageKeys) => {
    return id.includes("_light")
      ? images[id.replace("_light", "_dark") as ImageKeys]
      : images[id];
  };

  // Find signets for the selected battlesuit
  const elysiaData = signetJson.find((signet) => signet.name === "Elysia");
  const selectedSignets = selectedBattlesuit
    ? elysiaData?.charSignets?.find(
        (valk) => valk.suitName === selectedBattlesuit
      )?.signets
    : [];

  return (
    <>
      <div className="slider-container flex flex-col">
        {/* Astral options */}
        <div className="thumbnail-container flex my-[10px] justify-center">
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
        <h2 className="text-2xl text-center mb-4">{currentCategory?.name}</h2>
        <div
          className={`category-section flex border-2 border-solid ${
            fade ? "fade-out" : "fade-in"
          }`}
        >
          <div className="col-3 border-1 border-solid">
            {/* Battlesuit list */}
            <div className="battlesuit-list flex flex-col">
              {currentCategory?.battlesuits.map((battlesuit) => (
                <div
                  key={battlesuit.suitName}
                  className={`battlesuit-card justify-items-center w-40 gap-x-8 p-2 ${
                    selectedBattlesuit === battlesuit.suitName ? "selected" : ""
                  }`}
                  onClick={() => handleBattlesuitClick(battlesuit.suitName)}
                >
                  <img
                    className="w-[100px]"
                    src={battlesuit.avatarSource || "default-avatar.png"}
                    alt={battlesuit.charName}
                  />
                  <h3>{battlesuit.charName}</h3>
                  <h3 className="text-center">{battlesuit.suitName}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="col-7 border-1 border-solid grid grid-cols-2 w-[100%] p-4">
            <div className="row-span-1 col-span-2">
              <h1 className="text-center text-xl">Details</h1>
            </div>
            {selectedSignets && selectedSignets.length > 0 ? (
              selectedSignets.map((signet) => (
                <div key={signet.name} className="signet-item p-4 border m-2">
                  <div className="signet-icon">
                    <img src={elysiaData?.iconSource} alt={signet.name}></img>
                  </div>
                  <div className="signet-desc">
                    <h3 className="font-bold">{signet.name}</h3>
                    <p>{signet.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-4 text-center text-gray-500">
                Select a battlesuit to view signet build
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
