const applyForRole = require('../postgres/postgresFunctions.js').applyForRole

export default {
  path: '/applyForRole/{roleID}/{candidateID}',
  method: 'GET',
  handler: (request, reply) => {
    const params = request.params
    applyForRole(params.candidateID, params.roleID, (result) => {
      reply(result)
    })
  }
}