const express = require('express');
 
const app= express ();
app.use(express.json());
 
//app.use(express .urlencoded({extend:false}));
 
const musiquesRoutes = require('./routes/musiques-routes');
const filmsRoutes  = require('./routes/films-routes');
 
 
app.use('/api/musiques',musiquesRoutes);
app.use('/api/films',filmsRoutes);
 
app.use((error,req,res,next) => {
    res.status (error.code || 500);
    res.json({message: error.message || 'Une erreur non gérée est survenue'});
}); 
 
app.listen(5000); 

