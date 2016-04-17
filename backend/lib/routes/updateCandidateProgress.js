const updateCandidateProgress = require('../postgres/postgresFunctions.js').updateCandidateProgress

export default {
  path: '/updateCandidateProgress/{roleID}/{candidateID}/{status}',
  method: 'GET',
  handler: (request, reply) => {
    const params = request.params
    console.log('updatingcandidate progress', params)
    updateCandidateProgress(params.candidateID, params.roleID, params.status, (result) => {
      reply(result)
    })
  }
}
