import React from 'react'
import {Button} from 'react-bootstrap'

export default (props) => {
  const seeMore = (candidate) => {
    props.changeState({
      showModal: true,
      currCandidate: candidate
    })
  }
  return (
    <li style={props.liStyle}>{props.candidate.name} <Button bsStyle='primary' onClick={() => {seeMore(props.candidate) }}>SEE MORE</Button></li>
  )
}
