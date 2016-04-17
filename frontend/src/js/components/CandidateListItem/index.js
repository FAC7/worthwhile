import React from 'react'
import {Button, MenuItem, DropdownButton, Row, Col} from 'react-bootstrap'

export default (props) => {
  const seeMore = (candidate) => {
    props.changeState({
      showModal: true,
      currCandidate: candidate
    })
  }

  const updateCandidateProgress = (roleID, candidateID, status) => {
    const xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('Updated progress successfully!')
      }
    }
    xhr.open('GET', `/updateCandidateProgress/${roleID}/${candidateID}/${status}`)
    console.log('sending update request')
    xhr.send()

    const thisCandidate = {
      ...props.candidate,
      status
    }
    console.log(thisCandidate)
    const oldState = props.getState()
    const filteredCandidates = oldState.candidates.filter((candidate) => {
      return candidate.uuid !== candidateID
    })
    const newCandidates = [...filteredCandidates, thisCandidate]

    const newState = {
      ...oldState,
      candidates: newCandidates
    }
    console.log(newState)
    props.changeState(newState)
  }

  const name = `${props.candidate.first_name} ${props.candidate.last_name}`

  return (
    <li style={props.liStyle} key={props.candidate.candidateUUID}>
      <Row>
        <Col md={3}>{name}</Col>
        <Col md={2}>
          <Button
            bsStyle='primary'
            onClick={() => seeMore(props.candidate)}>SEE MORE
          </Button>
        </Col>
        <Col md={2}>
          <DropdownButton
            title={props.candidate.status}
            id='dropdown-size-large'
            onSelect={(e, eventKey) => {
              e.preventDefault()
              updateCandidateProgress('2', props.candidate.uuid, eventKey)
            }}>
            <MenuItem
              eventKey='applied'
              >Applied</MenuItem>
            <MenuItem
              eventKey='interviewed'
              >Interviewed</MenuItem>
            <MenuItem
              eventKey='accepted'
              >Accepted</MenuItem>
          </DropdownButton>
        </Col>
      </Row>
    </li>
  )
}
