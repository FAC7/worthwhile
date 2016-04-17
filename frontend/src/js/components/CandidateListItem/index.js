import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'

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
      <Row>
        <Col md={3}>{name}</Col>
        <Col md={2}>
          <Button
            bsStyle='primary'
            onClick={() => seeMore(props.candidate) }>SEE MORE
          </Button>
        </Col>
      </Row>
    </li>
  )
}
