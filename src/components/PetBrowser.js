import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPets  }) {
  return (
  <div className="ui cards">
    {pets.map(pet => (
      <Pet key={pet.id} onAdoptPets={onAdoptPets} id={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted} gender={pet.gender} />
    ))}
  </div>);
}

export default PetBrowser;
