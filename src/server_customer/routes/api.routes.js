// import middlewares from '../middlewares/index.js';



class APIRoutes {
  routes(app, router){
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    router.get('/',
      async function (req, res, next) {
        // const account = await user.find();
        res.status(200).send('data: ');
      }
    );
    
    //use router api
    app.use('/api/v1', router);
  }
}

export default new APIRoutes;