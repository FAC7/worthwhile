import React, {Component} from 'react'
import List from '../../components/List'
import {candidates} from '../../../../../database.js'
import CandidateProfileModal from '../../components/CandidateProfile/CandidateProfileModal.js'

export default class HostView extends Component {
  constructor () {
    super()
    this.state = {candidates, showModal: false, currCandidate: null}
    this.changeState = this.changeState.bind(this)
  }
  changeState (state) {
    this.setState(state)
  }
  render () {
    return (
      <div>
        <List candidates={this.state.candidates} changeState={this.changeState} />
        <CandidateProfileModal />
      </div>
    )
  }
}
