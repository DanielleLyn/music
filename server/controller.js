module.exports = {
    read: ( req, res, next ) => {
        const db = req.app.get('db');
        db.view_all_music().then(response=>{
            res.status(200).json(response);
        })
    },
    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
    
        dbInstance.delete([ params.id ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong!"});
            console.log(err)
        } );
}
}