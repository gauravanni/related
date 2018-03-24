var postsController=require(process.cwd() + '/controllers/rsAggarwalController.js');

var rdSharmaController=require(process.cwd() + '/controllers/rdSharmaController.js');

var ncertController=require(process.cwd() + '/controllers/ncertController.js');

exports.init = function(router) {
    router.route('/').get((req, res) => {
        res.send('Related Links');
    });
    // get all posts
    router.route("/rsAggarwalWidget").post(postsController.showRelatedLinks);

    router.route("/rdSharmaWidget").post(rdSharmaController.showRDShamraWidget);

    router.route('/ncertSolutions').post(ncertController.showNcertWidget);





};