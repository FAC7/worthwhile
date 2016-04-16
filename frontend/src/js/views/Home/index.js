import React from 'react'
import {Link} from 'react-router'
import { Jumbotron, Button } from 'react-bootstrap'

export default (props) => {
  return (
    <Jumbotron className='home'>
      <div>
        <h1>Welcome to Worthwhile portal</h1>
        <div className='CLogin'>
          <Link to={'/candidate'}><Button bsStyle='primary' bsSize='large'>Candidate login</Button></Link>
        </div>
        <div className='hLgin'>
          <Link to={'/host'}><Button bsStyle='primary' bsSize='large'>Host login</Button></Link>
        </div>
      </div>
    </Jumbotron>
  )
}
