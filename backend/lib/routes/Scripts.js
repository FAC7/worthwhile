export default {
  path: '/{filename}.js',
  method: 'GET',
  handler: (request, reply) => {
    const js = './public' + request.path
    reply.file(js)
  }
}
