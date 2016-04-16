const getCandidatesByRole = require('../postgres/postgresFunctions.js').getCandidatesByRole

export default {
  path: '/getCandidatesByRole/{roleID}',
  method: 'GET',
  handler: (request, reply) => {
    getCandidatesByRole(request.params.roleID, (result) => {
      reply(JSON.stringify(result))
    })
  }
}
