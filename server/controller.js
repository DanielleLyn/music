module.exports = {
    read: ( req, res, next ) => {
        const db = req.app.get('db');
        db.view_all_music().then(response=>{
            res.status(200).json(response);
        })
    },
    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params; 
        dbInstance.delete_song(id).then(() => {
            res.status(200).json({message: 'Listing Deleted!'});
        }).catch(err => console.log('error deleting listing', err));
}
}