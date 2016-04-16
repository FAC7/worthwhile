import React from 'react'
import {Button} from 'react-bootstrap'

export default (props) => {
  const seeMore = () => {
    props.changeState({
      showModal: true
    })
  }
  return (
    <li style={props.liStyle}>{props.candidate.name} <Button bsStyle='primary' onClick={seeMore}>SEE MORE</Button></li>
  )
}
