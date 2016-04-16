export default {
  path: '/{param*}',
  method: 'GET',
  handler: (request, reply) => {
    reply.file('./public/' + 'index.html')
  }
}
