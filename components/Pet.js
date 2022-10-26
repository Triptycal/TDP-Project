

const Pet = (props) => {
    return (
        <>
            <h1>Name: {props.name}</h1>
            <h2>Species: {props.species}</h2>
            <h2>Breed: {props.breed}</h2>
            <h2>Age: {props.age}</h2>
        </>
    )
}

export default Pet;