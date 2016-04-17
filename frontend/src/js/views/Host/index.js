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
      <Grid>
        <Row>
          <div className='collapseBox'>
            <Col md={12}>
              <ul style={ulStyle}>
                <CollapsibleItem
                  text={'Applied'}
                  candidates={this.state.candidates}
                  changeState={this.changeState}
                  filterFunction={(candidate) => candidate}
                />
                <CollapsibleItem
                  text={'Interviewed'}
                  candidates={this.state.candidates}
                  changeState={this.changeState}
                  filterFunction={(candidate) => candidate}
                />
                <CollapsibleItem
                  text={'Accepted'}
                  candidates={this.state.candidates}
                  changeState={this.changeState}
                  filterFunction={(candidate) => candidate}
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
