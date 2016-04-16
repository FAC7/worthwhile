import React, {Component} from 'react'
import {candidates, roles} from '../../../../../database.js'
import CandidateProfileModal from '../../components/CandidateProfile/CandidateProfileModal.js'
import CollapsibleItem from '../../components/CollapsibleItem/index.js'

export default class CandidateView extends Component {
  constructor () {
    super()
    this.state = {roles, candidates, showModal: false, currentRole: null}
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
        <CandidateProfileModal
          changeState={this.changeState}
          showModal={this.state.showModal}
          currentRole={this.state.currentRole}
        />
      </div>
    )
  }
}
