import React from 'react'
import HostListItem from '../HostListItem'
import CandidateListItem from '../CandidateListItem'

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
  backgroundColor: '#03A9F4',
  padding: '2em',
  borderRadius: '10px'
}

const liStyle = {
  listStyleType: 'none',
  color: 'white',
  fontSize: '1.7em',
  textDecoration: 'none',
  cursor: 'pointer'
}
