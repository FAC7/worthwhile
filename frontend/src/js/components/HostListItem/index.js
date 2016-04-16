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
    <li style={props.liStyle}>{props.role.roleTitle} <Button bsStyle='primary' onClick={seeMore}>SEE MORE</Button></li>
  )
}
