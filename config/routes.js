module.exports = {

  preMiddlewares: [
    '* requestLog requestParseURLEncoded requestParseBody'
  ],

  routes: [
    'GET / PublicController.index',
    'GET /helloworld hello PublicController.helloworld',
    'GET /user PublicController.user',
  ],

  postMiddlewares: []

}
