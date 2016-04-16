import React from 'react'
import HostListItem from '../HostListItem'
import CandidateListItem from '../CandidateListItem'

export default (props) => {
  return (
      <ul style={ulStyle}>
      {props.roles
        ? props.roles.map(role => <HostListItem role={role} changeState={props.changeState} liStyle={liStyle}/>)
        .filter(props.filterFunction)
        : props.candidates.map(candidate => <CandidateListItem candidate={candidate} changeState={props.changeState} liStyle={liStyle} />)
        .filter(props.filterFunction)
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
