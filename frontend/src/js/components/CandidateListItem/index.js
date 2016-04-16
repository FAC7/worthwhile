import React from 'react'
import {Button} from 'react-bootstrap'

export default (props) => {
  const seeMore = () => {
    props.changeState({
      showModal: true,
      currCandidate: props.candidate
    })
  }
  return (
    <li>{props.candidate.name} <Button bsStyle="primary" onClick={seeMore}>SEE MORE</Button></li>
  )
}
