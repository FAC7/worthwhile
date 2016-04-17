require('env2')('./config.env')

import Hapi from 'hapi'
const server = new Hapi.Server()
const port = process.env.PORT || 4000

// helper methods
import { handlePlugins, handleStart } from './helpers/server-helpers.js'

// server plugins
import Inert from 'inert'

// server routes
import Images from './routes/Images.js'
import ReactUrls from './routes/ReactUrls.js'
import Scripts from './routes/Scripts.js'
import GetAllRoles from './routes/GetAllRoles.js'
import GetCandidatesByRole from './routes/GetCandidatesByRole.js'
import GetRolesByCandidate from './routes/GetRolesByCandidate.js'
import UpdateCandidateProgress from './routes/updateCandidateProgress.js'
import ApplyForRole from './routes/applyForRole.js'

const ConnectionSettings = { port, routes: {cors: true} }
const Plugins = [ Inert ]
const Routes = [ ApplyForRole, UpdateCandidateProgress, GetRolesByCandidate, GetCandidatesByRole, GetAllRoles, Images, ReactUrls, Scripts ]

server.connection(ConnectionSettings)
server.register(Plugins, handlePlugins)
server.route(Routes)
server.start(handleStart)

export default server
