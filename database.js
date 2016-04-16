const candidates = {
  'candidateUUID': {
    'name': 'Sam Package',
    'email': 'sam.package@welovepackages.com',
    'telephone': '07483849774',
    'University': 'Bristol',
    'Degree': 'Packages',
    'rolesAppliedFor': [{
      'organisation': 'Host1',
      'role': 'package examiner',
      'status': '1st round interview'
    }, {
      'organisation': 'Host1',
      'role': 'package examiner',
      'status': '1st round interview'
    }],
    'resumeLink': 'resume.com/resume.doc',
    'description': 'bla bla bla package bla'
  }
}

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

const roles = {
  'role12345': {
    'host': 'hostUUID',
    'description': 'You would be helping us make websites for people',
    'applicants': ['candidateUUID1', 'candidateUUID2', 'candidateUUID3']
  }
}

module.exports = {
  candidates,
  hosts,
  roles
}
