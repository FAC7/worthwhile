const pg = require('pg')
require('env2')('config.env')
const connectionString = process.env.POSTGRESSTRING

const getAllRoles = (cb) => {
  pg.connect(connectionString, (err, client, done) => {
    if (err) throw err
    client.query('SELECT * FROM roles', (err, result) => {
      if (err) throw err
      cb(result.rows)
      done() // client idles for 30 seconds before closing
    })
  })
}

const getCandidatesByRole = (roleID, cb) => {
  pg.connect(connectionString, (err, client, done) => {
    if (err) throw err
    client.query('SELECT * FROM matched_roles WHERE "roleID" = $1', [roleID], (err, result) => {
      if (err) throw err
      cb(result.rows)
      done() // client idles for 30 seconds before closing
    })
  })
}

const getRolesByCandidate = (candidateID, cb) => {
  pg.connect(connectionString, (err, client, done) => {
    if (err) throw err
    client.query('SELECT * FROM matched_roles WHERE "candidateID" = $1', [candidateID], (err, result) => {
      if (err) throw err
      cb(result.rows)
      done() // client idles for 30 seconds before closing
    })
  })
}

module.exports = {
  getAllRoles,
  getCandidatesByRole,
  getRolesByCandidate
}
