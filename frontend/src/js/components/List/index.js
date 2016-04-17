import React from 'react'
import HostListItem from '../HostListItem'
import CandidateListItem from '../CandidateListItem'
import { Button } from 'react-bootstrap'

export default (props) => {
  return (
    <ul style={ulStyle}>
      {props.roles
        ? props.roles.filter(role => props.filterFunction(role))
          .map(role => <HostListItem role={role} changeState={props.changeState} liStyle={liStyle}/>)
        : props.candidates.filter(candidate => props.filterFunction(candidate))
          .map(candidate => <CandidateListItem candidate={candidate} changeState={props.changeState} liStyle={liStyle} />)
      }
    </ul>
  )
}

const ulStyle = {
  padding: '2em',
  borderRadius: '10px',
  color: 'white',
  position: 'inherit'
}

const liStyle = {
  listStyleType: 'none',
  color: 'black',
  fontSize: '1.7em',
  textDecoration: 'none',
  cursor: 'pointer'
}