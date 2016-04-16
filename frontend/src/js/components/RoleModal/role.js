import React from 'react'
import {Button, Modal} from 'react-bootstrap'

const CandidateProfileModal = React.createClass({
  close () {
    this.props.changeState({ showModal: false })
  },

  open () {
    this.props.changeState({ showModal: true })
  },

  render () {
    return (
      <div>

        <Modal show={this.props.showModal} onHide={this.close}>

          <Modal.Header closeButton>
            <Modal.Title>{this.props.host}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Description: {this.props.description}</p>
            <p>Current applicants: {this.props.applicants}</p>
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
  host: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  applicants: React.PropTypes.string.isRequired
}

CandidateProfileModal.defaultProps = {
  'host': 'hostUUID',
  'description': 'You would be helping us make websites for people',
  'applicants': ['candidateUUID1', 'candidateUUID2', 'candidateUUID3']
}

export default CandidateProfileModal

