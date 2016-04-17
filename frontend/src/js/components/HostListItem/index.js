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
    <li style={props.liStyle} key={props.role.roleUUID}>
      {props.role.roleTitle}
      <Button bsStyle='primary' onClick={seeMore}>SEE MORE</Button>
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
