import React from 'react'
import {Button} from 'react-bootstrap'

export default (props) => {
  const seeMore = (candidate) => {
    props.changeState({
      showModal: true,
      currCandidate: candidate
    })
  }
  const name = `${props.candidate.first_name} ${props.candidate.last_name}`
  return (
    <li style={props.liStyle}>
      {name} <Button bsStyle='primary' onClick={() => {seeMore(props.candidate) }}>SEE MORE</Button>
    </li>
  )
}
