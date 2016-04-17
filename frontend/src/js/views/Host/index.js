import React, {Component} from 'react'
import CollapsibleItem from '../../components/CollapsibleItem/index.js'
import {candidates} from '../../../../../database.js'
import CandidateProfileModal from '../../components/CandidateProfile/CandidateProfileModal.js'

const loggedInRoleID = '2'

export default class HostView extends Component {
  constructor () {
    super()
    this.state = {candidates, showModal: false, loggedInRoleID}
    this.changeState = this.changeState.bind(this)
    this.getState = this.getState.bind(this)
  }
  componentDidMount () {
    let xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        console.log('response', JSON.parse(xhr.responseText))
        this.setState({candidates: JSON.parse(xhr.responseText)})
      }
    }
    xhr.open('GET', `/getCandidatesByRole/${this.state.loggedInRoleID}`)
    xhr.send()
  }
  changeState (state) {
    this.setState(state)
  }
  getState () {
    return this.state
  }
  render () {
    return (
      <div className='view'>
        <CollapsibleItem
          text={'Applied'}
          candidates={this.state.candidates}
          changeState={this.changeState}
          getState={this.getState}
          filterFunction={candidate => candidate}
        />
        <CollapsibleItem
          text={'Interviewed'}
          candidates={this.state.candidates}
          changeState={this.changeState}
          getState={this.getState}
          filterFunction={candidate => candidate}
        />
        <CollapsibleItem
          text={'Accepted'}
          candidates={this.state.candidates}
          changeState={this.changeState}
          getState={this.getState}
          filterFunction={candidate => candidate}
        />
        <CandidateProfileModal
          changeState={this.changeState}
          showModal={this.state.showModal}
          currCandidate={this.state.currCandidate}
        />
      </div>
    )
  }
}
