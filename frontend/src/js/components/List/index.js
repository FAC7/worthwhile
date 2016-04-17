import React from 'react'
import HostListItem from '../HostListItem'
import CandidateListItem from '../CandidateListItem'

export default (props) => {
  return (
    <ul style={ulStyle}>
      {props.type === 'roles'
        ? props.roles.filter((role) => props.filterFunction(role))
          .map((role) => <HostListItem role={role} getState={props.getState} changeState={props.changeState} liStyle={liStyle}/>)
        : props.candidates.filter((candidate) => props.filterFunction(candidate))
          .map((candidate) => <CandidateListItem candidate={candidate} changeState={props.changeState} getState={props.getState} liStyle={liStyle} />)
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
