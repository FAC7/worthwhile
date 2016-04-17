import React, {Component} from 'react'
import {candidates, roles} from '../../../../../database.js'
import RoleModal from '../../components/RoleModal/role.js'
import CollapsibleItem from '../../components/CollapsibleItem/index.js'
import {Grid, Row, Col} from 'react-bootstrap'

const loggedInCandidateID = 'candidateUUID1'

const ulStyle = {
  backgroundColor: '#03A9F4',
  padding: '2em',
  borderRadius: '10px'
}

export default class CandidateView extends Component {
  constructor () {
    super()
    this.state = {roles, candidates, showModal: false, currentRole: null, loggedInCandidateID}
    this.changeState = this.changeState.bind(this)
    this.checkIfAppliedTo = this.checkIfAppliedTo.bind(this)
  }
  changeState (state) {
    this.setState(state)
  }
  checkIfAppliedTo (role) {
    return role.applicants.filter((candidate) => {
      return candidate === this.state.loggedInCandidateID
    }).length > 0
  }
  render () {
    return (
      <Grid>
        <Row>
          <div className='collapseBox'>
            <Col md={12}>
              <ul style={ulStyle}>
                <CollapsibleItem
                  text={'Open Roles'}
                  roles={this.state.roles}
                  changeState={this.changeState}
                  filterFunction={(role) => !this.checkIfAppliedTo(role)}
                />
                <CollapsibleItem
                  text={'Applied To'}
                  roles={this.state.roles}
                  changeState={this.changeState}
                  filterFunction={(role) => this.checkIfAppliedTo(role)}
                />
                <RoleModal
                  changeState={this.changeState}
                  showModal={this.state.showModal}
                  currentRole={this.state.currentRole}
                />
              </ul>
            </Col>
          </div>
        </Row>
      </Grid>
    )
  }
}
