import { useState } from 'react';
import axios from 'axios';

function AddPet() {
    const [petname, setPetName] = useState('');
    const [petspecies, setPetSpecies] = useState('');
    const [petbreed, setPetBreed] = useState('');
    const [petage, setPetAge] = useState('');

    const handleChange = (event) => {

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(petname,petspecies,petbreed,petage);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your pet's name:
                <input
                    type="text"
                    name="petname"
                    placeholder="Pet's name..." />
            </label>
            <br/>
            <label>Enter your pet's species:
                <select type="text" name="petspecies" placeholder="Pet's species..." >
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
                    placeholder="Pet's age..." />
            </label>
            <br/>
            <button
                type="submit"
                >
                Add New Pet
                </button>
        </form>
    )
}
export default AddPet;
// const AddPet = ({ submitHandler, newPet, handleAdd }) => {
//     return (
//         <form onSubmit={submitHandler}>
//             <input
//                 type="text"
//                 placeholder="Pet's name..."
//                 onChange={newPet}
//             />
//             <button
//                 type="button"
//                 onClick={handleAdd}
//             >
//                 Add New Pet
//             </button>
//         </form>
//     )

// }

// 