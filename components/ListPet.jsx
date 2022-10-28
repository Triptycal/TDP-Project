import { useEffect, useState } from 'react';
import axios from 'axios';


function ListPet() {
    const [pets, setPets] = useState([]);

    const getPetList = async () => {
        const res = await axios.post('http://localhost:3000/ListPets');
        setPets(res.data);
    };

    useEffect(() => {getPetList()}, []);

    const deletePet = async (id) => {
    await axios.delete("http://localhost:3000/DeletePet/" + id);
    getPetList();
    }

    return (
        <>
          {pets.map(({ _id, name, species, breed, age }) => (
            <div key={_id}>
              <p>{name}</p>
              <p>{species}</p>
              <p>{breed}</p>
              <p>{age}</p>
              <input type="submit" value="Update"></input>
              <button type="button" onClick={() => deletePet(_id)}>DELETE</button>
            </div>
          ))}
        </>
      );
    }
export default ListPet;
