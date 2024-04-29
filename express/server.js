const express = require('express')
const cors = require('cors')
const app = express()
var corsOptions = {
  origin: 'http://localhost:9999',
}
app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// simple route
const db = require('./app/models')
const Role = db.role
db.sequelize.sync().then(() => {
  console.log('Resync Db ...')
  //initial()
})
function initial() {
  Role.create({
    id: 1,
    name: 'admin',
  })

  Role.create({
    id: 2,
    name: 'analyste',
  })

  Role.create({
    id: 3,
    name: 'responsable_agences',
  })

  Role.create({
    id: 4,
    name: 'gestionnaire_hopitals',
  })

  Role.create({
    id: 5,
    name: 'user',
  })
}

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to My application.' })
})

//include Routes
const recommandationRouter = require('./app/routes/recommandation.routes')
app.use('/api/recommandations', recommandationRouter)

const reunionRouter = require('./app/routes/reunion.routes')
app.use('/api/reunions', reunionRouter)

const participeRouter = require('./app/routes/participe.routes')
app.use('/api/participes', participeRouter)

const agenceRouter = require('./app/routes/agence.routes')
app.use('/api/agences', agenceRouter)

const notifierRouter = require('./app/routes/notifications.routes')
app.use('/api/notifiers', notifierRouter)

const reclamationRouter = require('./app/routes/reclamation.routes')
app.use('/api/reclamations', reclamationRouter)

const adminRouter = require('./app/routes/admin.routes')
app.use('/api/admins', reclamationRouter)

const dechetRouter = require('./app/routes/dechet.routes')
app.use('/api/dechets', dechetRouter)
const authRouter = require('./app/routes/auth.routes')
authRouter(app)
const userRouter = require('./app/routes/user.routes')
userRouter(app)

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to My application.' })
})

//include Routes

const analysteRouter = require('./app/routes/analyste.routes')
app.use('/api/analystes', analysteRouter)

const fournisseurRouter = require('./app/routes/fournisseur.routes')
app.use('/api/fournisseurs', fournisseurRouter)

const gouvernoratRouter = require('./app/routes/gouvernorat.routes')
app.use('/api/gouvernorats', gouvernoratRouter)

const delegationRouter = require('./app/routes/delegation.routes')
app.use('/api/delegations', delegationRouter)

const citoyenRouter = require('./app/routes/citoyen.routes')
app.use('/api/citoyens', citoyenRouter)

const decesRouter = require('./app/routes/deces.routes')
app.use('/api/decess', decesRouter)

const municipaliteRouter = require('./app/routes/municipalite.routes')
app.use('/api/municipalites', municipaliteRouter)

const hopitalRouter = require('./app/routes/hopital.routes')
app.use('/api/hopitals', hopitalRouter)

const responsable_hopRouter = require('./app/routes/responsable_hop.routes')
app.use('/api/responsable_hops', responsable_hopRouter)

const responsable_munRouter = require('./app/routes/responsable_mun.routes')
app.use('/api/responsable_muns', responsable_munRouter)
const recRouter = require('./app/routes/reclamation.routes')
app.use('/api/reclamations', recRouter)
// set port, listen for requests
const PORT = process.env.PORT || 8088
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`)
})
