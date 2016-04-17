import React, {Component} from 'react'
import {candidates, roles} from '../../../../../database.js'
import RoleModal from '../../components/RoleModal/role.js'
import CollapsibleItem from '../../components/CollapsibleItem/index.js'
import {Grid, Row, Col} from 'react-bootstrap'

const loggedInCandidateID = '98'

const ulStyle = {
  backgroundColor: '#0075B2',
  padding: '2em',
  borderRadius: '10px'
}
const rolesApplied = roles
const allRoles = roles

export default class CandidateView extends Component {
  constructor () {
    super()
    this.state = {rolesApplied, allRoles, candidates, showModal: false, loggedInCandidateID}
    this.changeState = this.changeState.bind(this)
    this.getState = this.getState.bind(this)
  }
  componentDidMount () {
    let xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        console.log('rolesApplied', JSON.parse(xhr.responseText))
        this.setState({rolesApplied: JSON.parse(xhr.responseText)})
      }
    }
    xhr.open('GET', `/getRolesByCandidate/${this.state.loggedInCandidateID}`)
    xhr.send()

    let xhr2 = new XMLHttpRequest() // eslint-disable-line
    xhr2.onreadystatechange = () => {
      if (xhr2.status === 200 && xhr2.readyState === 4) {
        console.log('allRoles', JSON.parse(xhr2.responseText))
        this.setState({allRoles: JSON.parse(xhr2.responseText)})
      }
    }
    xhr2.open('GET', '/getAllRoles')
    xhr2.send()
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
                <CollapsibleItem type={'roles'}
                  text={'Open Roles'}
                  roles={this.state.allRoles}
                  changeState={this.changeState}
                  getState={this.getState}
                  filterFunction={(role) => {
                    let present = false
                    this.state.rolesApplied.forEach(roleApplied => {
                      if (roleApplied.uuid === role.uuid ){
                        present = true
                        // return present
                      }
                    })
                    return !present
                  }}
                />
                <CollapsibleItem type={'roles'}
                  text={'Applied To'}
                  roles={this.state.rolesApplied}
                  changeState={this.changeState}
                  getState={this.getState}
                  filterFunction={role => role }
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
