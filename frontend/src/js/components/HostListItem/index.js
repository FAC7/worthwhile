import React from 'react'
import {Button} from 'react-bootstrap'

export default (props) => {
  const seeMore = (role) => {
    props.changeState({
      showModal: true,
      currRole: props.role
    })
  }
  return (
    <li style={props.liStyle} key={props.role.roleUUID}>
      {props.role.roleTitle}
      <Button
        bsStyle='primary'
        onClick={() => seeMore(props.role)}
        >SEE MORE</Button>
      {true // IF APPLIED LOGIC HERE!!
        ? <Button bsStyle='primary' onClick={() => console.log('application successfull!')
            // db call, then-->
            // props.changeState({roles:dbResult})
          }>APPLY</Button>
        : <div>APPLIED</div>
      }
    </li>
  )
}
