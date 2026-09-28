const express = require("express");
const app = express();
app.use(express.json());

let jeux = [

    {id: 1, nom: "GTA V", platforme: "PC, PS4, PS5, Xbox", genre: "Action-aventure", note: "18/20", termine: true },
    {id: 2, nom: "Forza horizon 6", platforme: "Pc, Xbox", genre: "course automobile en monde ouvert", note: "15/20", termine: true },
    {id: 3, nom: "Gran tourismo 7", platforme: "PS5", genre: "course automobile", note: "14/20", termine: false }
];
app.get("/", (req, res) => {
  res.json({ message : "Bienvenue sur l'API de jeux vidéo"
  });
});

app.get("/jeux", (req, res) => {
  res.json({ jeux });
});

app.get("/jeux/:id", (req, res) => {
    const id = Number(req.params.id);
    const jeu = jeux.find((j) => j.id === id);

    if (!jeu) {
        return res.status(404).json({ message: "Jeu non trouvé" });
    }

    res.json(jeu);
});

app.get("/jeux?termine=true", (req, res) => {
    const termine = true(req.params.termine);
    const jeu = jeux.find((j) => j.termine === termine);

     if (!jeu) {
        return res.status(404).json({ message: "Jeu non trouvé" });
    }

}); 
 

app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
})