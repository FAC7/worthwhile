import React from 'react'
import {Button, Modal, Table} from 'react-bootstrap'

const CandidateProfileModal = React.createClass({
  close () {
    this.props.changeState({ showModal: false })
  },

  open () {
    this.props.changeState({ showModal: true })
  },

  render () {
    const info = this.props.currCandidate
    console.log('current candidate', info)
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{`${info.first_name} ${info.last_name}`}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Table>
              <tbody>
                <tr>
                  <td>Qualification</td>
                  <td>{`${info.qualification} in ${info.degree}`}</td>
                </tr>
                <tr>
                  <td>Institution</td>
                  <td>{info.institution}</td>
                </tr>
                <tr>
                  <td>CV</td>
                  <td><a target='_blank' href={info.cv_link}>Link</a></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{info.email}</td>
                </tr>
                <tr>
                  <td>Telephone</td>
                  <td>{info.telephone}</td>
                </tr>
                <tr>
                  <td>Availability</td>
                  <td>{info.availability}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>

        </Modal>

      </div>
    )
  }

})

CandidateProfileModal.propTypes = {
  currCandidate: React.PropTypes.object
}

CandidateProfileModal.defaultProps = {
  currCandidate: {
    uuid: '98',
    first_name: 'Jon',
    last_name: 'Whitehead',
    email: 'jon.whitehead@studenthubs.org.uk',
    institution: 'SOAS',
    qualification: 'MA',
    degree: 'Cultural Studies',
    availability: 'September Onwards',
    cv_link: 'https://storage.googleapis.com/k75m5pg17z/uf5qTvXLmA2D7J8oB',
    telephone: '123456789',
    status: 'applied'
  }
}

export default CandidateProfileModal
