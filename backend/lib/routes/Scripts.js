export default {
  path: '/{filename}.js',
  method: 'GET',
  handler: (request, reply) => {
    const js = './public' + response.path
    reply.file(js)
  }
}
