import React from 'react'
import {Button, Modal} from 'react-bootstrap'

const CandidateProfileModal = React.createClass ({
  close() {
    this.props.changeState({ showModal: false });
  },

  open() {
    this.props.changeState({ showModal: true });
  },

  render() {

    return (
      <div>

        <Modal show={this.props.showModal} onHide={this.close}>

          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <p>email: {this.props.email} {this.props.telephone}</p>
            <p>Telephone number: {this.props.telephone}</p>
            <p>University: {this.props.University}</p>
            <p>Degree: {this.props.Degree}</p>
            <p>Click here to see the {this.props.name} CV: {this.props.resumeLink}</p>
            <p>Description: {this.props.description}</p>

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
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  telephone: React.PropTypes.string.isRequired,
  University: React.PropTypes.string.isRequired,
  Degree: React.PropTypes.string.isRequired,
  resumeLink: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

CandidateProfileModal.defaultProps = {
  name: 'Sam Package',
  email: 'sam.package@welovepackages.com',
  telephone: '07483849774',
  University: 'Bristol',
  Degree: 'Packages',
  resumeLink: 'resume.com/resume.doc',
  description: 'bla bla bla package bla'
}

export default CandidateProfileModal

