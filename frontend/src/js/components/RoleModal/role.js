import React from 'react'
import {Button, Modal, Table} from 'react-bootstrap'

const Role = React.createClass({
  close () {
    this.props.changeState({ showModal: false })
  },

  render () {
    const info = this.props.currentRole
    return (
      <div>

        <Modal show={this.props.showModal} onHide={this.close}>

          <Modal.Header closeButton>
            <Modal.Title>{info.organization}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Table>
              <tbody>
                <tr>
                  <td>Description</td>
                  <td>{info.about_role}</td>
                </tr>
                <tr>
                  <td>Length</td>
                  <td>{info.length}</td>
                </tr>
                <tr>
                  <td>location</td>
                  <td>{info.location}</td>
                </tr>
                <tr>
                  <td>Starts</td>
                  <td>{info.start_date}</td>
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

Role.propTypes = {
  currentRole: React.PropTypes.object.isRequired,
  showModal: React.PropTypes.func.isRequired,
  changeState: React.PropTypes.func.isRequired,
  getState: React.PropTypes.func.isRequired
}

Role.defaultProps = {
  currentRole: {
    about_org: 'text paragraph here',
    about_role: 'another text paragraph here',
    length: '12 months',
    location: 'London',
    organisation: 'Worthwhile',
    start_date: '1/4/2016',
    status: 'applied',
    uuid: '1'
  }
}

export default Role
