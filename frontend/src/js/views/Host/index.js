import React, {Component} from 'react'
import CollapsibleItem from '../../components/CollapsibleItem/index.js'
import {candidates} from '../../../../../database.js'
import CandidateProfileModal from '../../components/CandidateProfile/CandidateProfileModal.js'
import {Grid, Row, Col} from 'react-bootstrap'

const ulStyle = {
  backgroundColor: '#0075B2',
  padding: '2em',
  borderRadius: '10px'
}

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
      <Grid>
        <Row>
          <div className='collapseBox'>
            <Col md={12}>
              <ul style={ulStyle}>
                <CollapsibleItem type={'candidates'}
                  text={'Applied'}
                  candidates={this.state.candidates}
                  changeState={this.changeState}
                  getState={this.getState}
                  filterFunction={candidate => candidate.status === 'applied'}
                />
                <CollapsibleItem type={'candidates'}
                  text={'Interviewed'}
                  candidates={this.state.candidates}
                  changeState={this.changeState}
                  getState={this.getState}
                  filterFunction={candidate => candidate.status === 'interviewed'}
                />
                <CollapsibleItem type={'candidates'}
                  text={'Accepted'}
                  candidates={this.state.candidates}
                  changeState={this.changeState}
                  getState={this.getState}
                  filterFunction={candidate => candidate.status === 'accepted'}
                />
                <CandidateProfileModal
                  changeState={this.changeState}
                  showModal={this.state.showModal}
                  currCandidate={this.state.currCandidate}
                />
              </ul>
            </Col>
          </div>
        </Row>
      </Grid>
    )
  }
}
