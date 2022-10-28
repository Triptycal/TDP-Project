import React from 'react';

const PetCard = ({ pet: { petID, name, species,breed, age } }) => {
  return (
    <div className="pet" key={petID}>
      <div>
        <p>{name}</p>
        <br/>
        <p>{species}</p>
        <br/>
        <p>{breed}</p>
        <br/>
        <p>{age}</p>
        <br/>
        <p>{petID}</p>
        <br/>
      </div>
    </div>
  );
}

export default PetCard;