const getAllRoles = require('../postgres/postgresFunctions.js').getAllRoles

export default {
  path: '/getAllRoles',
  method: 'GET',
  handler: (request, reply) => {
    getAllRoles((result) => {
      reply(JSON.stringify(result))
    })
  }
}
