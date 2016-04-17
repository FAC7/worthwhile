const candidates = [
  {
    'candidateUUID': '98',
    'name': 'Sam Package',
    'email': 'sam.package@welovepackages.com',
    'telephone': '07483849774',
    'University': 'Bristol',
    'Degree': 'Packages',
    'rolesAppliedFor': ['roleUUID1'],
    'resumeLink': 'resume.com/resume.doc',
    'description': 'bla bla bla package bla'
  }, {
    'candidateUUID': 'candidateUUID2',
    'name': 'Graduate 1',
    'email': 'hello.graduates@wegraduates.com',
    'telephone': '07483849774',
    'University': 'Bristol',
    'Degree': 'saying hi',
    'rolesAppliedFor': ['roleUUID2'],
    'resumeLink': 'resume.com/resume.doc',
    'description': 'bla bla bla package bla'
  }
]

const hosts = {
  hostUUID: {
    'name': 'Founders & Coders',
    'websiteLink': 'foundersandcoders.com',
    'email': 'hello@foundersandcoders.com',
    'telephone': '02035793849',
    'location': 'Bethnal Green',
    'roles': ['role12345', 'role56789'],
    'hostDescription': 'We train people to make websites'
  }
}

const roles = [
  {
    'roleUUID': 'roleUUID1',
    'roleTitle': 'Web Developer',
    'host': 'hostUUID',
    'description': 'You would be helping us make websites for people',
    'applicants': ['98', 'candidateUUID2', 'candidateUUID3']
  }
]

module.exports = {
  candidates,
  hosts,
  roles
}
