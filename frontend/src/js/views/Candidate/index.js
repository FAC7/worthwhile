import React, {Component} from 'react'
import {candidates, roles} from '../../../../../database.js'
import RoleModal from '../../components/RoleModal/role.js'
import CollapsibleItem from '../../components/CollapsibleItem/index.js'

const loggedInCandidateID = 'candidateUUID1'

export default class CandidateView extends Component {
  constructor () {
    super()
    this.state = {roles, candidates, showModal: false, currentRole: null, loggedInCandidateID}
    this.changeState = this.changeState.bind(this)
  }
  changeState (state) {
    this.setState(state)
  }
  render () {
    return (
      <div className='view'>
        <CollapsibleItem
          text={'Open Roles'}
          roles={this.state.roles}
          changeState={this.changeState}
          filterFunction={role => role}
        />
        <CollapsibleItem
          text={'Applied To'}
          roles={this.state.roles}
          changeState={this.changeState}
          filterFunction={role => role}
        />
        <RoleModal
          changeState={this.changeState}
          showModal={this.state.showModal}
          currentRole={this.state.currentRole}
        />
      </div>
    )
  }
}
