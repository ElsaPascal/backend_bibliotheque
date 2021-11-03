const mongoose = require ('mongoose');
const { stringify } = require('uuid');

const Schema = mongoose.Schema;

const musiqueSchema = new ({
    auteur : {
        type : String,
        required: true,    
    },
    annee : {type : string, required : true},
    titre : {type : string, required : true},
    imageUrl : {type : string, required : true},
});

module.exports = mangoose.model('musique',musiqueSchema);