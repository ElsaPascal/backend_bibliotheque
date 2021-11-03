const  { v4 : uuidv4} = require('uuid') ;

let MUSIQUES = [
    {
        id : "2",
        auteur: "David Guetta ft Sia",
        annee: 2011,
        titre: "Titanium",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51cQ8TfyqJL._SX342_QL70_ML2_.jpg",
        commentaire:"jazz"
    },
    {
        id : "3",
        auteur: "Shaka Ponk",
        annee: 2019,
        titre: "Smells like teen spirits",
        imageUrl: "https://i.ytimg.com/vi/MEecsZXQjCs/maxresdefault.jpg",
        commentaire:"rock"
    },
    {
        id : "4",
        auteur: "Imagine Dragon",
        annee: 2018,
        titre: "Natural",
        imageUrl: "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg",
        commentaire :"Jazz"
    },
    {
        id:"5",
        auteur : "Goldman",
        annee : 2019,
        titre : "Encore un matin",
        imageUrl: "https://media.senscritique.com/media/000000377351/source_big/Encore_un_matin.jpg",
        commentaire:"rock"
    },
    {
        id:"",
        auteur : "Marvane",
        annee : 2019,
        titre : "Encore un matin",
        imageUrl: "https://www.essentielradio.com/upload/artistes/normal/5b22cc02c01318.18015738.png",
        commentaire:"classique"
    }
];

// chemin racine : /api/musiques

const getMusiques = (req, res, next) => {
    res.json({ MUSIQUES});
}
 // Une Musique
const getMusiqueById = (req, res, next) => {
const myId = req.params.musiqueId;
const musique = MUSIQUES.find(m => {
    return m.id === myId;
})
//res.json(myId);
if (!musique){
    return res.status(404).json({message: 'Musique non trouvée pour cet identifiant'});
}
res.json({musique});
}

const createMusique = (req, res, next) => {
    const {auteur,annee, titre, imageUrl} = req.body;
    console.log(req.body)
    const createdMusique  = {
        id:uuidv4(),
        auteur,
        annee,
        titre ,
        imageUrl
    };
 MUSIQUES.push (createdMusique);
 res.status(201).json({musique : createdMusique});  
};

const  updateMusique = (req, res, next) => {
    const { auteur, annee, titre, imageUrl} = req.body; // on init les valeurs variables a partir de body
    const musiqueId = req.params.musiqueId;

    const updatedMusique = { ...MUSIQUES.find((m) => {
        return m.id === musiqueId;
    })};
    const musiqueIndex = MUSIQUES.findIndex(m => m.id === musiqueId)
    console.log ("musiqueIndex"+musiqueIndex)
    updatedMusique.auteur = auteur;
    updatedMusique.annee = annee;
    updatedMusique.titre = titre;
    updatedMusique.imageUrl = imageUrl;

    MUSIQUES[musiqueIndex] = updatedMusique;

    res.status(200).json ({musique : updatedMusique})
};

const deleteMusique = (req,res,next)=>{
    const musiqueId = req.params.musiqueId;
    MUSIQUES = MUSIQUES.filter(m => m.id !== musiqueId);
    res.status(200).json({message : "Musique supprimée!"})

}

exports.getMusiques = getMusiques ;
exports.getMusiqueById = getMusiqueById;
exports.createMusique = createMusique; 
exports.updateMusique = updateMusique;
exports.deleteMusique = deleteMusique;
