const getRolesByCandidate = require('../postgres/postgresFunctions.js').getRolesByCandidate

export default {
  path: '/getRolesByCandidate/{candidateID}',
  method: 'GET',
  handler: (request, reply) => {
    getRolesByCandidate(request.params.candidateID, (result) => {
      reply(JSON.stringify(result))
    })
  }
}
