import React from "react";
import PokeBall from "../images/poke-ball.png";

export default function PokemonCard({
  name,
  sprite,
  height,
  weight,
  experience,
}) {
  return (
    <section className="poke-card">
      <div className="nes-container is-rounded">
        <h2 className="card-title">{name}</h2>
        <div className="poke-info">
          <div className="img-container">
            {sprite ? (
              <img src={sprite} alt={name} />
            ) : (
              <img src={PokeBall} alt={name} />
            )}
          </div>

          <div className="lists">
            <ul className="nes-list is-circle">
              <li>{height}</li>
              <li>{weight}</li>
              <li>{experience}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
