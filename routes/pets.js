const router = require("express").Router();

const pets = [
    {name: "Wednesday", species: "Dog", breed: "MBT", age: "7"},
    {name: "Thistle", species: "Dog", breed: "MBT", age: "1"},
    {name: "Rhodes", species: "Dog", breed: "Husky", age: "2"},
    {name: "Agatha", species: "Rat", breed: "Dumbo Rex", age: "2"},
    {name: "Lorelei", species: "Rat", breed: "Dumbo", age: "2"},
    {name: "Lusamine", species: "Rat", breed: "Dumbo", age: "1"},
    {name: "Dawn", species: "Rat", breed: "Dumbo Badger", age: "1"},
    {name: "Jessie", species: "Rat", breed: "Top ear", age: "1"}
];


router.get("/getAllPets", (req, res) => res.send(pets));


router.get("/getPet/:id", (req, res, next) => {
    const {id} = req.params;
    if (!pets[id]) return next("No pet there");
    res.send(pets[id])
});

const deleteMiddleware = (req, res, next) => {
    console.log("You're trying to DELETE A PET? YOU MONSTER!!!");
    next();
}

router.post("/CreatePet", (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing name"})
    pets.push(req.body);
    res.status(201).send(`${pets} added successfully`);
});

router.post('/EditPet/:index', (req, res) => {
    const npets = req.query.pets;
    const index = req.params.index;
    const old = petNames[index];
    petNames[index] = pets;
    res.status(202).send(`${old} successfully replaced with ${pets}`);
});

router.patch("/updatePet/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);
    res.send();
})

router.delete("/DeletePet/:id", deleteMiddleware, (req, res, next) => {
    const {id}  = req.params;
    console.log("ID:", id);
    if (id > pets.length) return next({ status: 404, message: `No pet found with id ${id}`});
    res.send(pets.splice(id));
});


module.exports = router;