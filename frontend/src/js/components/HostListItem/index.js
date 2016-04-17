import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'

export default (props) => {
  const seeMore = (role) => {
    props.changeState({
      showModal: true,
      currentRole: role
    })
  }
  return (
    <li style={props.liStyle} key={props.role.roleUUID}>
      <Row>
        <Col md={3}> {props.role.organisation} </Col>
        <Col md={2}>
          <Button
            bsStyle='primary'
            onClick={() => seeMore(props.role)}
            >SEE MORE</Button>
        </Col>
        <Col md={2}>
        {props.role.status !== 'applied'
          ? <Button bsStyle='primary' onClick={() => console.log('application successfull!')
              // db call, then-->
              // props.changeState({roles:dbResult})
            }>APPLY</Button>
          : <Button bsStyle='primary'>{props.role.status.toUpperCase()}</Button>
        }
        </Col>
        <Col md={6}/>
      </Row>
    </li>
  )
}
