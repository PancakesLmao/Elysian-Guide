import flameChasers from "../assets/flame_chasers/cards.json";
import { useState, useEffect } from "react";
import "./style/cardsDisplay.css";

interface FlameChaserData {
  name: string;
  ranking: number;
  numeral: string;
  signetName: string;
  imageSource: string;
}

const FlameChaserData: FlameChaserData[] = flameChasers;

export default function CardList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loadedCards, setLoadedCards] = useState<boolean[]>([]);
  const [animationDirections, setAnimationDirections] = useState<string[]>([]);

  useEffect(() => {
    // Initially all cards are not loaded (for animation purposes)
    setLoadedCards(new Array(FlameChaserData.length).fill(false));

    // Determine animation directions for each card - alternating up and down
    const directions = FlameChaserData.map((_, index) =>
      index % 2 === 0 ? "slide-up" : "slide-down"
    );
    setAnimationDirections(directions);

    FlameChaserData.forEach((_, index) => {
      const delay = 100 + index * 100 + Math.random() * 50;

      setTimeout(() => {
        setLoadedCards((prev) => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      }, delay);
    });
  }, []);

  return (
    <>
      <div className="gallery-container w-full overflow-x-hidden">
        <div className="character-gallery font-[Raleway] flex overflow-x-auto">
          {FlameChaserData.map((character, index) => (
            <div
              key={character.name}
              className={`character-card relative overflow-hidden ${
                activeIndex === index ? "active" : ""
              }
                ${
                  loadedCards[index]
                    ? animationDirections[index]
                    : "pre-animation"
                }
                `}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className={`card-upper-overlay absolute ${
                  activeIndex === index ? "active" : ""
                }`}
              ></div>
              <div className="card-overlay absolute text-white">
                <div className="character-info text-center">
                  <span className="character-rank text-[3rem]">
                    {character.numeral}
                  </span>
                  <p className="signet-name text-[27px] w-[60%] h-full">
                    {character.signetName}
                  </p>
                </div>
              </div>
              <img
                src={character.imageSource}
                alt={`${character.name}`}
                className="character-image object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
