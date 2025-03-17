import flameChasers from "../assets/flame_chasers/cards.json";
import React, { useState } from "react";
import "./cardsDisplay.css";

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

  return (
    <>
      <div className="gallery-container w-full overflow-x-hidden">
        <div className="character-gallery flex overflow-x-auto">
          {FlameChaserData.map((character, index) => (
            <div
              key={character.name}
              className={`character-card relative overflow-hidden ${
                activeIndex === index ? "active" : ""
              }`}
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
                  <p className="signet-name text-[27px] w-[60%] h-full">{character.signetName}</p>
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
