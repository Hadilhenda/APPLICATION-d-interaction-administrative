const { authJwt } = require('../middleware')
const controller = require('../controllers/user.controller')
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  app.get('/api/namespace/public', controller.allAccess)
  app.get('/api/namespace/user', [authJwt.verifyToken], controller.userBoard)

  app.get(
    '/api/namespace/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  )

  app.get(
    '/api/namespace/analyste',
    [authJwt.verifyToken, authJwt.isAnalyste],
    controller.analysteBoard
  )
  app.get(
    '/api/namespace/prestataire',
    [authJwt.verifyToken, authJwt.isPrestataire],
    controller.prestataireBoard
  )
  app.get(
    '/api/namespace/consomateur',
    [authJwt.verifyToken, authJwt.isConsomateur],
    controller.consomateurBoard
  )
}
