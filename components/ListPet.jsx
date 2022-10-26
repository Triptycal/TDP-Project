// const ListPet = () => {
//     return( <h1>List of Pets</h1>);
// }
// export default ListPet;
const ListPet = (props) => {
    return (
        <div className="Display-pets">
        <>
            <h1>Name: {props.name}</h1>
            <h2>Species: {props.species}</h2>
            <h2>Breed: {props.breed}</h2>
            <h2>Age: {props.age}</h2>
        </>
        </div>
    )
}

export default ListPet;