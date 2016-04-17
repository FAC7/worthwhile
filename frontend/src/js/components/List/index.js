import React from 'react'
import HostListItem from '../HostListItem'
import CandidateListItem from '../CandidateListItem'
import { Button } from 'react-bootstrap'



export default (props) => {
  return (
    <li style={this.props.style}>
      {props.roles
        ? props.roles.map(role => <HostListItem role={role} changeState={props.changeState} liStyle={liStyle}/>)
        .filter(props.filterFunction)
        : props.candidates.map(candidate => <CandidateListItem candidate={candidate} changeState={props.changeState} liStyle={liStyle} />)
        .filter(props.filterFunction)
      }
    </li>
  )
}

const ulStyle = {
  backgroundColor: '#03A9F4',
  padding: '2em',
  borderRadius: '10px',
  color: 'white',
  position: 'inherit'
}

const liStyle = {
  listStyleType: 'none',
  color: 'white',
  fontSize: '1.7em',
  textDecoration: 'none',
  cursor: 'pointer'
}