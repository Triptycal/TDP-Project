import { useState } from 'react';
//import axios from 'axios';
import ListPet from './ListPet.jsx';

function CreatePet() {
    const [petname, setPetName] = useState('');
    const [petspecies, setPetSpecies] = useState('');
    const [petbreed, setPetBreed] = useState('');
    const [petage, setPetAge] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(petname,petspecies,petbreed,petage);
        <ListPet name={petname} species={petspecies} breed={petbreed} age={petage} />
        // <p>{petname}</p>
        // const res = await axios.post('http://localhost:3000/', {
        //     petname, petspecies, petbreed, petage,
        // });
        // console.log('New Pet details: ', res.data);
    }
    return (
        <div className="Create-pet" >
        <form onSubmit={handleSubmit}>
            <label>Enter your pet's name:
                <input
                    type="text"
                    name="petname"
                    value={petname}
                    placeholder="Pet's name..."
                    onChange={(event) => setPetName(event.target.value)} 
                    required/>
            </label>
            <br/>
            <label>Enter your pet's species:
                <select 
                type="text" 
                name="petspecies"
                value={petspecies} 
                onChange={(event) => setPetSpecies(event.target.value)} 
                required>
                    <option value="default">Please enter a value</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="rat">Rat</option>
                <   option value="other">Other</option>
                </select>
            </label>
            <br/>
            <label>Enter your pet's breed:
                <input
                    type="text"
                    name="petbreed"
                    value={petbreed}
                    onChange={(event) => setPetBreed(event.target.value)} 
                    required
                    placeholder="Pet's breed..." />
            </label>
            <br/>
            <label>Enter your pet's age:
                <input
                    type="number"
                    name="petage"
                    min={0}
                    max={50}
                    step="1"
                    value={petage}
                    required
                    onChange={(event) => setPetAge(event.target.value)} 
                    placeholder="Pet's age..." />
            </label>
            <br/>
            <button
                type="submit"
                >
                Add New Pet
            </button>
            
        </form>
        </div>
    )
}
export default CreatePet;


// const CreatePet = () => {
//     return( <h1>create pet here</h1>);
// }
// export default CreatePet;