module.exports = {
    read: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read()
        .then( music => res.status(200).send( music ) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong!"});
            console.log(err)
        } );
    },
    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
    
        dbInstance.delete([ params.id ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        } );
}
}