import React, {Component} from 'react'
import {candidates, roles} from '../../../../../database.js'
import RoleModal from '../../components/RoleModal/role.js'
import CollapsibleItem from '../../components/CollapsibleItem/index.js'

const loggedInCandidateID = '98'

export default class CandidateView extends Component {
  constructor () {
    super()
    this.state = {roles, candidates, showModal: false, currentRole: null, loggedInCandidateID}
    this.changeState = this.changeState.bind(this)
    this.checkIfAppliedTo = this.checkIfAppliedTo.bind(this)
  }
  componentDidMount () {
    let xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.onreadystatechange = () => {
      console.log('sending request')
      if (xhr.status === 200 && xhr.readyState === 4) {
        this.setState({roles: JSON.parse(xhr.responseText)})
      }
    }
    xhr.open('GET', `/getRolesByCandidate/${this.state.loggedInCandidateID}`)
    xhr.send()
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
      <div className='view'>
        <CollapsibleItem
          text={'Open Roles'}
          roles={this.state.roles}
          changeState={this.changeState}
          filterFunction={role => !this.checkIfAppliedTo(role)}
        />
        <CollapsibleItem
          text={'Applied To'}
          roles={this.state.roles}
          changeState={this.changeState}
          filterFunction={role => this.checkIfAppliedTo(role)}
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
