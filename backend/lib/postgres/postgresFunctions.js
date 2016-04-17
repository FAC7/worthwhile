const pg = require('pg')
require('env2')('config.env')
const connectionString = process.env.POSTGRESSTRING

const getAllRoles = (cb) => {
  pg.connect(connectionString, (err, client, done) => {
    if (err) throw err
    client.query('SELECT * FROM roles', (err, result) => {
      if (err) throw err
      cb(result.rows)
      done()
    })
  })
}

const getCandidatesByRole = (roleID, cb) => {
  pg.connect(connectionString, (err, client, done) => {
    if (err) throw err
    client.query('SELECT uuid, first_name, last_name, email, institution, ' +
      'qualification, degree, availability, cv_link, telephone, status ' +
      'FROM candidates, matched_roles ' +
      'WHERE candidates.uuid = matched_roles."candidateID" ' +
      'AND matched_roles."roleID" = $1', [roleID], (err, result) => {
        if (err) throw err
        cb(result.rows)
        done()
      })
  })
}

const getRolesByCandidate = (candidateID, cb) => {
  pg.connect(connectionString, (err, client, done) => {
    if (err) throw err
    client.query('SELECT uuid, organisation, location, start_date, length, ' +
      'about_org, about_role, status FROM roles, matched_roles ' +
      'WHERE roles.uuid = matched_roles."roleID" ' +
      'AND matched_roles."candidateID" = $1', [candidateID], (err, result) => {
        if (err) throw err
        cb(result.rows)
        done()
      })
  })
}

const updateCandidateProgress = (candidateID, roleID, status, cb) => {
  pg.connect(connectionString, (err, client, done) => {
    if (err) throw err
    client.query('UPDATE matched_roles ' +
                'SET status=$1 ' +
                'WHERE "roleID"=$2 ' +
                'AND "candidateID"=$3', [status, roleID, candidateID], (err, result) => {
      if (err) throw err
      cb('success')
      done()
    })
  })
}

const applyForRole = (candidateID, roleID, cb) => {
  pg.connect(connectionString, (err, client, done) => {
    if (err) throw err
    client.query('INSERT INTO matched_roles ' +
      'VALUES ($1, $2, \'applied\')', [roleID, candidateID], (err, result) => {
        if (err) throw err
        cb('success')
        done()
      })
  })
}

module.exports = {
  getAllRoles,
  getCandidatesByRole,
  getRolesByCandidate,
  updateCandidateProgress,
  applyForRole
}
