import React from 'react'
import {Button, MenuItem, DropdownButton} from 'react-bootstrap'

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
    const oldState = props.getState()
    const filteredCandidates = oldState.candidates.filter((candidate) => {
      candidate.uuid !== candidateID
    })
    const newCandidates = [...filteredCandidates, thisCandidate]

    const newState = {
      ...oldState,
      candidates: newCandidates
    }
    console.log(newState)
    this.changeState(newState)
  }

  const name = `${props.candidate.first_name} ${props.candidate.last_name}`

  return (
    <li style={props.liStyle} key={props.candidate.candidateUUID}>
      {name}
      <Button bsStyle='primary' onClick={() => {seeMore(props.candidate) }}>SEE MORE</Button>
      <DropdownButton title={props.candidate.status} id='dropdown-size-large'>
        <MenuItem
          eventKey='2'
          onClick={() => { updateCandidateProgress(props.roleID, props.candidate.candidateUUID, 'applied') }}
          >Applied</MenuItem>
        <MenuItem
          eventKey='1'
          onClick={() => { updateCandidateProgress(props.roleID, props.candidate.candidateUUID, 'interviewed') }}
          >Interviewed</MenuItem>
        <MenuItem
          eventKey='2'
          onClick={() => { updateCandidateProgress(props.roleID, props.candidate.candidateUUID, 'accepted') }}
          >Accepted</MenuItem>
      </DropdownButton>
    </li>
  )
}
