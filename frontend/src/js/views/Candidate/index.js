import React, {Component} from 'react'
import List from '../../components/List'
import {candidates, roles} from '../../../../../database.js'
import RoleModal from '../../components/RoleModal/role.js'

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
      <div>
        <List candidates={this.state.candidates} roles={this.state.candidates} changeState={this.changeState} />
        <RoleModal changeState={this.changeState} showModal={this.state.showModal} currentRole={this.state.currentRole}/>
      </div>
    )
  }
}
