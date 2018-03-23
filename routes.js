var postsController=require(process.cwd() + '/controllers/rsAggarwalController.js');
exports.init = function(router) {
    router.route('/').get((req, res) => {
        res.send('Related Links');
    });
    // get all posts
    router.route("/rsAggarwalWidget").post(postsController.showRelatedLinks);


    
};