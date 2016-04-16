import React, {Component} from 'react'
import CollapsibleItem from '../../components/CollapsibleItem'
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
        <CollapsibleItem
          text={'Applied'}
          candidates={this.state.candidates}
          changeState={this.changeState}
          filterFunction={() => {}}
        />
        <CollapsibleItem
          text={'Interviewed'}
          candidates={this.state.candidates}
          changeState={this.changeState}
          filterFunction={() => {}}
        />
        <CollapsibleItem
          text={'Accepted'}
          candidates={this.state.candidates}
          changeState={this.changeState}
          filterFunction={() => {}}
        />
        <CandidateProfileModal />
      </div>
    )
  }
}
